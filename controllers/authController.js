const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const { Op } = require('sequelize');

const User = require('../models/User');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}));

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
    });
};

exports.postLogin = (req, res, next) => {
    const Email = req.body.loginEmail;
    const Password = req.body.loginPassword;    
    User.findOne({
        where: {
            Email: Email
        }
    }).then(user => {
        if(!user){
            return res.redirect('/login');
        }
        console.log(Password);
        console.log(user.Password);
        bcrypt.compare(Password, user.Password).then(doMatch => {
            console.log(doMatch);
            if(doMatch){
                req.session.isLoggedIn = true;
                req.session.user = user;
                return req.session.save(err => {
                    console.log(err);
                    res.redirect('/index');
                });                
            }
            res.redirect('/login');
        }).catch(err => {
            console.log(err);
            res.redirect('/login');
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/login');
    });
};

exports.postReset = (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err);
            return res.redirect('/login');
        }
        const token = buffer.toString('hex');
        User.findOne({
            where: {
                Email: req.body.resetEmail
            }
        }).then(user => {
            if(!user){
                return res.redirect('/login');
            }
            user.ResetToken = token;
            user.ResetTokenExpiration = Date.now() + 34600000;
            return user.save();
        }).then(result => {
            res.redirect('/login');
            transporter.sendMail({
                to: req.body.resetEmail,
                from: 'amd@digitalamoeba.id',
                subject: 'Password reset',
                html: `
                    <p>You requested a password reset</p>
                    <p>Click this <a href="http://45.76.189.3:${process.env.PORT}/reset/${token}">link</a> to set a new password.</p>
                `
            });
        }).catch(err => {
            console.log(err);
        });
    });
};

exports.getNewPassword = (req, res, next) => {
    const token = req.params.token;
    User.findOne({
        where: {
            ResetToken: token,
            ResetTokenExpiration: {[Op.gt]: Date.now()}
        }
    }).then(user => {
        res.render('auth/new-password', {
            path: '/new-password',
            pageTitle: 'New Password',
            userId: user.Id.toString(),
            passwordToken: token
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
    const newPassword = req.body.Password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;
    let resetUser;

    User.findOne({
        where: {
            ResetToken: passwordToken,
            ResetTokenExpiration: {[Op.gt]: Date.now()},
            Id: userId
        }
    }).then(user => {
        resetUser = user;
        return bcrypt.hash(newPassword, 12);
    }).then(hashedPassword => {
        resetUser.Password = hashedPassword;
        resetUser.ResetToken = null;
        resetUser.ResetTokenExpiration = null;
        return resetUser.save();
    }).then(result => {
        res.redirect('/login');
    }).catch(err => {
        console.log(err);
    });
};
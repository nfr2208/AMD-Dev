const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const { Op } = require('sequelize');

const User = require('../models/user');

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
    const email = req.body.loginEmail;
    const password = req.body.loginPassword;    
    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(!user){
            return res.redirect('/login');
        }
        bcrypt.compare(password, user.password).then(doMatch => {
            if(doMatch){
                req.session.isLoggedIn = true;
                req.session.userRole = user.role;
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

exports.postSignUp = (req, res, next) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if(user){
            return res.redirect('/login');
        }
        return bcrypt.hash(password, 12).then(hashedPassword => {
            return User.create({
                name: fullname,
                email: email,
                password: hashedPassword,
                role: 'user'
            });
        }).then(result => {
            res.redirect('/login');
            return transporter.sendMail({
                to: email,
                from: 'amd@digitalamoeba.id',
                subject: 'Signup succeeded!',
                html: '<h1>You successfully signed up!</h1>'
            });
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/index');
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
                email: req.body.resetEmail
            }
        }).then(user => {
            if(!user){
                return res.redirect('/login');
            }
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + 34600000;
            return user.save();
        }).then(result => {
            res.redirect('/login');
            transporter.sendMail({
                to: req.body.resetEmail,
                from: 'amd@digitalamoeba.id',
                subject: 'Password reset',
                html: `
                    <p>You requested a password reset</p>
                    <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
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
            resetToken: token,
            resetTokenExpiration: {[Op.gt]: Date.now()}
        }
    }).then(user => {
        res.render('auth/new-password', {
            path: '/new-password',
            pageTitle: 'New Password',
            userId: user.id.toString(),
            passwordToken: token
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {
    const newPassword = req.body.password;
    const userId = req.body.userId;
    const passwordToken = req.body.passwordToken;
    let resetUser;

    User.findOne({
        where: {
            resetToken: passwordToken,
            resetTokenExpiration: {[Op.gt]: Date.now()},
            id: userId
        }
    }).then(user => {
        resetUser = user;
        return bcrypt.hash(newPassword, 12);
    }).then(hashedPassword => {
        resetUser.password = hashedPassword;
        resetUser.resetToken = null;
        resetUser.resetTokenExpiration = undefined;
        return resetUser.save();
    }).then(result => {
        res.redirect('/login');
    }).catch(err => {
        console.log(err);
    });
};
const crypto = require('crypto');

const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const { Op } = require('sequelize');

const User = require('../models/user');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: 'dsda'
    }
}));

exports.getIndex = (req, res, next) => {
    res.render('admin/index', {
        path: '/index',
        pageTitle: 'Admin Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('admin/inner', {
        path: '/inner',
        pageTitle: 'Inner Page'
    });
};

exports.getUserControl = (req, res, next) => {

    User.findAll({
        raw: true
    }).then(jsonUsers => {
        res.render('admin/usercontrol', {
            jsonUsers: jsonUsers,
            path: '/usercontrol',
            pageTitle: 'User Control'
        });
    }).catch(err => {
        console.log(err)
    });    
};

exports.postCreateUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;

    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err);
            return res.redirect('/login');
        }
        const token = buffer.toString('hex');
        User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if(user){
                return res.redirect('/admin/usercontrol');
            }
            return User.create({
                name: name,
                email: email,
                createPasswordToken: token,
                createPasswordTokenExpiration: Date.now() + 34600000,
                role: role
            });
        }).then(result => {
            res.redirect('/admin/usercontrol');
            return transporter.sendMail({
                to: email,
                from: 'amd@digitalamoeba.id',
                subject: 'Create user succeeded!',
                html: `
                    <h1>Administrator successfully create a user for you!</h1>
                    <p>Click this <a href="http://localhost:3001/admin/create-password/${token}">link</a> to set a password.</p>
                `
            });
        }).catch(err => {
            console.log(err);
        });
    });
};

exports.getCreatePassword = (req, res, next) => {
    const token = req.params.token;
    User.findOne({
        where: {
            createPasswordToken: token,
            createPasswordTokenExpiration: {[Op.gt]: Date.now()}
        }
    }).then(user => {
        res.render('auth/create-password', {
            path: '/create-password',
            pageTitle: 'Create Password',
            userId: user.id.toString(),
            createPasswordToken: token
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.postCreatePassword = (req, res, next) => {
    const password = req.body.password;
    const createPasswordToken = req.body.createPasswordToken;
    const userId = req.body.userId;
    let createUser;

    User.findOne({
        where: {
            createPasswordToken: createPasswordToken,
            createPasswordTokenExpiration: {[Op.gt]: Date.now()},
            id: userId
        }
    }).then(user => {
        createUser = user;
        return bcrypt.hash(password, 12);
    }).then(hashedPassword => {
        createUser.password = hashedPassword;
        createUser.createPasswordToken = null;
        createUser.createPasswordTokenExpiration = undefined;
        return createUser.save();
    }).then(result => {
        res.redirect('/login');
    }).catch(err => {
        console.log(err);
    });
};


// exports.postSignUp = (req, res, next) => {
//     const fullname = req.body.fullname;
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;
//     const role = req.body.role;

//     User.findOne({
//         where: {
//             email: email
//         }
//     }).then(user => {
//         if(user){
//             return res.redirect('/login');
//         }
//         return bcrypt.hash(password, 12).then(hashedPassword => {
//             return User.create({
//                 name: fullname,
//                 email: email,
//                 password: hashedPassword,
//                 role: role
//             });
//         }).then(result => {
//             res.redirect('/login');
//             return transporter.sendMail({
//                 to: email,
//                 from: 'amd@digitalamoeba.id',
//                 subject: 'Signup succeeded!',
//                 html: '<h1>You successfully signed up!</h1>'
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// };

// exports.postReset = (req, res, next) => {
//     crypto.randomBytes(32, (err, buffer) => {
//         if(err){
//             console.log(err);
//             return res.redirect('/login');
//         }
//         const token = buffer.toString('hex');
//         User.findOne({
//             where: {
//                 email: req.body.resetEmail
//             }
//         }).then(user => {
//             if(!user){
//                 return res.redirect('/login');
//             }
//             user.resetToken = token;
//             user.resetTokenExpiration = Date.now() + 34600000;
//             return user.save();
//         }).then(result => {
//             res.redirect('/login');
//             transporter.sendMail({
//                 to: req.body.resetEmail,
//                 from: 'amd@digitalamoeba.id',
//                 subject: 'Password reset',
//                 html: `
//                     <p>You requested a password reset</p>
//                     <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
//                 `
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     });
// };
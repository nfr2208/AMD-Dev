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
    const Nama = req.body.Nama;
    const Email = req.body.Email;
    const Role = req.body.Role;

    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err);
            return res.redirect('/login');
        }
        const token = buffer.toString('hex');
        User.findOne({
            where: {
                Email: Email
            }
        }).then(user => {
            if(user){
                return res.redirect('/admin/usercontrol');
            }
            return User.create({
                Nama: Nama,
                Email: Email,
                CreatePasswordToken: token,
                CreatePasswordTokenExpiration: Date.now() + 34600000,
                Role: Role
            });
        }).then(result => {
            res.redirect('/admin/usercontrol');
            return transporter.sendMail({
                to: Email,
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
            CreatePasswordToken: token,
            CreatePasswordTokenExpiration: {[Op.gt]: Date.now()}
        }
    }).then(user => {
        res.render('auth/create-password', {
            path: '/create-password',
            pageTitle: 'Create Password',
            userId: user.Id.toString(),
            createPasswordToken: token
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.postCreatePassword = (req, res, next) => {
    const Password = req.body.Password;
    const CreatePasswordToken = req.body.CreatePasswordToken;
    const userId = req.body.userId;
    let createUser;

    User.findOne({
        where: {
            CreatePasswordToken: CreatePasswordToken,
            CreatePasswordTokenExpiration: {[Op.gt]: Date.now()},
            Id: userId
        }
    }).then(user => {
        createUser = user;
        return bcrypt.hash(Password, 12);
    }).then(hashedPassword => {
        createUser.Password = hashedPassword;
        createUser.CreatePasswordToken = null;
        createUser.CreatePasswordTokenExpiration = null;
        return createUser.save();
    }).then(result => {
        res.redirect('/login');
    }).catch(err => {
        console.log(err);
    });
};
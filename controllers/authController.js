const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
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
        bcrypt.compare(password, user.password).then().catch(err => {
            console.log(err);
            res.redirect('/login');
        });
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save(err => {
            console.log(err);
            res.redirect('/index');
        })
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
                role: 'admin'
            });
        }).then(result => {
            res.redirect('/login');
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
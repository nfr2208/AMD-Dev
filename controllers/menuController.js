const User = require('../models/user');

exports.getDashboard = (req, res, next) => {
    res.render('index', {
        path: '/index',
        pageTitle: 'Dashboard',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.getInner = (req, res, next) => {
    res.render('inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};

exports.getLogin = (req, res, next) => {
    res.render('login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findByPk(1).then(user => {
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

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/index');
    });
};
exports.getDashboard = (req, res, next) => {
    res.render('index', {
        path: '/index',
        pageTitle: 'Dashboard'
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
        pageTitle: 'Login'
    });
};
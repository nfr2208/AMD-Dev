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
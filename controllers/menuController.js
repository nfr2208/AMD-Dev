exports.getDashboard = (req, res, next) => {
    res.render('menu/index', {
        path: '/index',
        pageTitle: 'Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('menu/inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};
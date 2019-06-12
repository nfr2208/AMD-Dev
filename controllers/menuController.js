exports.getDashboard = (req, res, next) => {
    res.render('menu/index', {
        path: '/index',
        pageTitle: 'Index Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('menu/inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};
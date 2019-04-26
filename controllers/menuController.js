exports.getDashboard = (req, res, next) => {
    res.render('index', {
        path: '/',
        pageTitle: 'Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('inner', {
        path: '/inner',
        pageTitle: 'Inner Dashboard'
    });
};
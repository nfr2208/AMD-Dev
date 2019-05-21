module.exports = (req, res, next) => {
    if(req.session.userRole !== 'admin'){
        return res.redirect('/login');
    }
    next();
};
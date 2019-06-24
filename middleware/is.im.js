module.exports = (req, res, next) => {
    if(req.session.user.role !== 'Innovation Manager'){
        return res.redirect('/index');
    }
    next();
};
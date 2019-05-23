module.exports = (req, res, next) => {
    if(req.session.user.role !== 'AI'){
        return res.redirect('/index');
    }
    next();
};
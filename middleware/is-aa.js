module.exports = (req, res, next) => {
    if(req.session.user.role !== 'AA'){
        return res.redirect('/index');
    }
    next();
};
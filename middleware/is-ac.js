module.exports = (req, res, next) => {
    if(req.session.user.role !== 'AC'){
        return res.redirect('/index');
    }
    next();
};
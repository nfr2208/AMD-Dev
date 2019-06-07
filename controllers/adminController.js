exports.getIndex = (req, res, next) => {
    res.render('admin/index', {
        path: '/index',
        pageTitle: 'Admin Dashboard'
    });
};

exports.getInner = (req, res, next) => {
    res.render('admin/inner', {
        path: '/inner',
        pageTitle: 'Inner Page'
    });
};

exports.getUsercontrol = (req, res, next) => {
    res.render('admin/user', {
        path: '/usercontrol',
        pageTitle: 'User Control'
    });
};

// exports.postSignUp = (req, res, next) => {
//     const fullname = req.body.fullname;
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.confirmPassword;
//     const role = req.body.role;

//     User.findOne({
//         where: {
//             email: email
//         }
//     }).then(user => {
//         if(user){
//             return res.redirect('/login');
//         }
//         return bcrypt.hash(password, 12).then(hashedPassword => {
//             return User.create({
//                 name: fullname,
//                 email: email,
//                 password: hashedPassword,
//                 role: role
//             });
//         }).then(result => {
//             res.redirect('/login');
//             return transporter.sendMail({
//                 to: email,
//                 from: 'amd@digitalamoeba.id',
//                 subject: 'Signup succeeded!',
//                 html: '<h1>You successfully signed up!</h1>'
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     }).catch(err => {
//         console.log(err);
//     });
// };

// exports.postReset = (req, res, next) => {
//     crypto.randomBytes(32, (err, buffer) => {
//         if(err){
//             console.log(err);
//             return res.redirect('/login');
//         }
//         const token = buffer.toString('hex');
//         User.findOne({
//             where: {
//                 email: req.body.resetEmail
//             }
//         }).then(user => {
//             if(!user){
//                 return res.redirect('/login');
//             }
//             user.resetToken = token;
//             user.resetTokenExpiration = Date.now() + 34600000;
//             return user.save();
//         }).then(result => {
//             res.redirect('/login');
//             transporter.sendMail({
//                 to: req.body.resetEmail,
//                 from: 'amd@digitalamoeba.id',
//                 subject: 'Password reset',
//                 html: `
//                     <p>You requested a password reset</p>
//                     <p>Click this <a href="http://localhost:3000/reset/${token}">link</a> to set a new password.</p>
//                 `
//             });
//         }).catch(err => {
//             console.log(err);
//         });
//     });
// };
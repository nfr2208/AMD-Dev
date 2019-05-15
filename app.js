const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Amoeba = require('./models/amoeba');
const Innovator = require('./models/innovator');
const User = require('./models/user');

const errorController = require('./controllers/errorController');
const sequelize = require('./util/database');

const app = express();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routing
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    credentials: true,
}));

// app.use((req, res, next) => {
//     User.findByPk(1).then(user => {
//         req.user = user;
//         next();
//     }).catch(err => {
//         console.log(err);
//     });
// })

//Routes

app.use(userRoutes);

app.use(errorController.get404);

app.listen(process.env.PORT || 3000);

// Innovator.belongsTo(Amoeba, { constraints: true, onDelete: 'SET NULL' });
// Amoeba.hasMany(Innovator);

// sequelize
// // .sync({force: true})
// .sync()
//     .then(result => {
//         return User.findByPk(1);
//         // console.log(result);
//     })
//     .then(user => {
//         if (!user) {
//             return User.create({name: 'Naufal', email: 'nfr2208@gmail.com', role: 'Admin', password: 'admin'});
//         }
//         return user;
//     })
//     .then(user => {
//         // console.log(user);
//         app.listen(process.env.PORT || 3000);
//     })
//     .catch(err => {
//         console.log(err);
//     });
const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const csrf = require('csurf');

const Amoeba = require('./models/amoeba');
const Innovator = require('./models/innovator');
const User = require('./models/user');

const errorController = require('./controllers/errorController');
const sequelize = require('./util/database');

const app = express();
const csrfProtection = csrf();

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routing
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const amoebaRoutes = require('./routes/amoebaRoutes');
const dataTalentRoutes = require('./routes/teamDataRoutes');
const innovatorRoutes = require('./routes/innovatorRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({credentials: true}));
app.use(session({
    secret: 'my secret',
    store: new SequelizeStore({
        db: sequelize,
        checkExpirationInterval: 15 * 60 * 1000,
        expiration: 24 * 60 * 60 * 1000
    }),
    resave: false,
    saveUninitialized: false
}));
app.use(csrfProtection);

app.use((req, res, next) => {
    if(!req.session.user){
        return next()
    }
    User.findByPk(req.session.user.id).then(user => {
        req.user = user;
        next();
    }).catch(err => {
        console.log(err);
    });
})

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLogggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

//Routes
app.use(authRoutes);
app.use(menuRoutes);
app.use(amoebaRoutes);
app.use(dataTalentRoutes);
app.use(innovatorRoutes);
app.use(errorController.get404);

Innovator.belongsTo(Amoeba, { constraints: true, onDelete: 'SET NULL' });
Amoeba.hasMany(Innovator);

sequelize
    // .sync({force: true})
    .sync()
    .then(result =>{
        app.listen(process.env.PORT || 3000)
    }).catch(err => {
        console.log(err);
    });
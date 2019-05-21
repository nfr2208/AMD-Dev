const http = require('http');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const csrf = require('csurf');

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
const teamDataRoutes = require('./routes/teamDataRoutes');
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
    res.locals.isAuthenticated = req.session.isLogggedIn;
    res.locals.userRole = req.session.role;
    res.locals.csrfToken = req.csrfToken();
    res.locals.userProfile = req.session.user;
    next();
});

//Routes
app.use(authRoutes);
app.use(menuRoutes);
app.use(amoebaRoutes);
app.use(teamDataRoutes);
app.use(innovatorRoutes);
app.use(errorController.get404);

sequelize
    // .sync({force: true})
    .sync()
    .then(result =>{
        app.listen(process.env.PORT || 3001)
    }).catch(err => {
        console.log(err);
    });
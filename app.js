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

//Model
const Talent = require('./models/data_talent/Talent');
const Flagging = require('./models/data_talent/Flagging');
const UnitKerjaAsal = require('./models/data_talent/UnitKerjaAsal');
const UnitKerjaSaatIni = require('./models/data_talent/UnitKerjaSaatIni');
const Amoeba = require('./models/amoeba/Amoeba');

// Templating Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Routing
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const adminRoutes = require('./routes/adminRoutes');
const talentRoutes = require('./routes/talentRoutes');
// const amoebaRoutes = require('./routes/old/amoebaRoutes');
// const teamDataRoutes = require('./routes/old/teamDataRoutes');
// const innovatorRoutes = require('./routes/old/innovatorRoutes');

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
    res.locals.csrfToken = req.csrfToken();
    res.locals.userProfile = req.session.user;
    next();
});

//Routes
app.use(authRoutes);
app.use(menuRoutes);
app.use('/admin', adminRoutes);
app.use('/talent', talentRoutes);
// app.use(amoebaRoutes);
// app.use(teamDataRoutes);
// app.use(innovatorRoutes);
app.use(errorController.get404);

//Relations
Talent.belongsTo(Flagging);
Talent.belongsTo(UnitKerjaAsal);
Talent.belongsTo(UnitKerjaSaatIni);
Talent.belongsTo(Amoeba);
Amoeba.hasMany(Talent);

sequelize
    // .sync({force: true})
    .sync()
    .then(result =>{
        app.listen(process.env.PORT || 3001)
    }).catch(err => {
        console.log(err);
    });
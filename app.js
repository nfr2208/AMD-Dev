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

//Association_Database
const unitKerja = require('./models/MsUnitKerja');
const lokasiKerja = require('./models/MsLokasiKerja');
const flagging = require('./models/MsFlagging');
const typeInovator = require('./models/MsTypeInovator');
const statusInovator = require('./models/MsStatusInovator');
const natureStream = require('./models/MsNatureStream');
const maturityLevel = require('./models/MsMaturityLevel');
const tenur = require('./models/TrTenur');
const timStrukturFungsi = require('./models/MsTimStruktur_Fungsi');
const cLevel = require('./models/MsC_Level');
const peserta = require('./models/MsPeserta');
const Inovator = require('./models/MsInnovator');
const seleksi = require('./models/seleksi');
const amoeba = require('./models/MsAmoeba');
const trMonev = require('./models/TrMonev');
const ide = require('./models/MsIde');
const batch = require('./models/MsBatch');
const areaInovasi = require('./models/MsAreaInovasi');
const typeInovasi = require('./models/MsTypeInovasi');
const mapping = require('./models/MsMapping');
const fase = require('./models/MsFase');
const monevSR = require('./models/Monev_SR#');
const pilarDDS = require('./models/MsPilarDDS');
const tribe = require('./models/MsTribe');
const fu = require('./models/MsFU');
const cfu = require('./models/MsCFU');
const statusFinance = require('./models/MsStatusFinance');
const budget = require('./models/MsBudget');





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
app.use(amoebaRoutes);
app.use(teamDataRoutes);
app.use(innovatorRoutes);
app.use(errorController.get404);

//Relation
peserta.belongsTo(unitKerja);
peserta.belongsTo(lokasiKerja);
seleksi.belongsTo(peserta);
seleksi.belongsTo(ide);
seleksi.belongsTo(batch);
Inovator.belongsTo(seleksi);
Inovator.belongsTo(flagging);
Inovator.belongsTo(typeInovator);
Inovator.belongsTo(statusInovator);
Inovator.belongsTo(natureStream);
Inovator.belongsTo(maturityLevel);
Inovator.belongsTo(tenur);
Inovator.belongsTo(timStrukturFungsi);
Inovator.belongsTo(cLevel);
Inovator.belongsTo(amoeba);
amoeba.hasMany(Inovator);
amoeba.belongsTo(seleksi);
amoeba.belongsTo(areaInovasi);
amoeba.belongsTo(typeInovasi);
amoeba.belongsTo(mapping);
amoeba.belongsTo(trMonev);
trMonev.belongsTo(monevSR);
trMonev.belongsTo(fase);
fase.belongsTo(budget);
budget.belongsTo(statusFinance);
mapping.belongsTo(pilarDDS);
mapping.belongsTo(tribe);
mapping.belongsTo(fu);
mapping.belongsTo(cfu);

sequelize
    .sync({force: true})
    // .sync()
    .then(result =>{
        app.listen(process.env.PORT || 9090)
    }).catch(err => {
        console.log(err);
    });
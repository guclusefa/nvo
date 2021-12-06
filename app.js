// inclure les dépendances et middlewares
const Routeur = require("./routes/routes");
const express = require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const i18n = require('i18n');

// activer les dépendances
let app = express();
app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser("i18n_demo"));
app.use(session({
    secret: "i18n_demo",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

i18n.configure({
    //define how many languages we would support in our application
    locales: ['fr', 'en'],
    //define the path to language json files, default is /locales
    directory: __dirname + '/locales',
    //define the default language
    defaultLocale: 'fr',
    // define a custom cookie name to parse locale settings from 
    cookie: 'i18n'
});

app.use(cookieParser("i18n_demo"));

app.use(session({
    secret: "i18n_demo",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

//init i18n after cookie-parser
app.use(i18n.init);

//chemins static
app.use(express.static("views"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/css", express.static(__dirname + "/assets/css"));
app.use("/scss", express.static(__dirname + "/assets/scss"));
app.use("/images", express.static(__dirname + "/assets/images"));
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/icons", express.static(__dirname + "/node_modules/bootstrap-icons/icons"));


app.listen(3000, () => console.log("Le serveur est actif !"));
app.use("/", (Routeur));

app.get('/en', function (req, res) {
    res.cookie('i18n', 'en');
    res.redirect('/')
});

app.get('/fr', function (req, res) {
    res.cookie('i18n', 'fr');
    res.redirect('/')
});
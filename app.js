// inclure les dépendances et middlewares
const express = require("express");

// activer les dépendances
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


//chemins static
app.use(express.static("views"));
app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/css", express.static(__dirname + "/assets/css"));
app.use("/scss", express.static(__dirname + "/assets/scss"));
app.use("/images", express.static(__dirname + "/assets/images"));

app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.listen(3000, () => console.log("Le serveur est actif !"));
app.use("/", (Routeur = require("./routes/routes")));
// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();

// exporter controllers
var control_accueil = require('../controllers/control_accueil')

// routage accueil
routeur.get('/', control_accueil.afficher)

// routeur
module.exports = routeur;
// création du routeur Express pour ce module
const express = require('express');
const routeur = express.Router();

// exporter controllers
var control_accueil = require('../controllers/control_accueil')
var control_connexion = require('../controllers/control_connexion')


// routage accueil
routeur.get('/', control_accueil.afficher)
routeur.get('/connexion', control_connexion.afficher)

// routeur
module.exports = routeur;
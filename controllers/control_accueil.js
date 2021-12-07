var model_accueil = require('../models/model_accueil');
module.exports = {
    // affichage accueil
    afficher: function (req, res) {
        titre = "Accueil";
        console.log(res.__('index.welcome', { test: 'PRENOM'}));
        res.render('./accueil', { titre })
    },
}
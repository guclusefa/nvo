var model_accueil = require('../models/model_accueil');
module.exports = {
    // affichage accueil
    afficher: function (req, res) {
        /*         console.log(res.__('index.welcome', { test: 'PRENOM'})); */
        titre = res.__('index.title');
        res.render('./accueil', { titre })
    },
}
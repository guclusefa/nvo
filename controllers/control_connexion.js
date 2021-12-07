var model_connexion = require('../models/model_connexion');
module.exports = {
    // affichage accueil
    afficher: function (req, res) {
        titre = res.__('navbar.login');
        res.render('./auth/connexion', { titre })
    },
}
var model_users = require('../models/model_users');
module.exports = {
    // affichage accueil
    afficher_liste: function (req, res) {
        titre = res.__('navbar.login');
        res.render('./users/liste', { titre })
    },
    afficher_ajouter: function (req, res) {
        titre = res.__('navbar.login');
        res.render('./users/ajouter', { titre })
    },
}
var niveau = 1;
var nombreATrouver =Math.round(Math.random()*Math.pow(10,niveau));
var affichageDepart = "0";
var INTERVAL = 0;
var TIMER = niveau * 60;
var ETAT = "stop";
var nombreSaisi = ""; 

$('.nbrepoint2').text(niveau);

$(document).ready(function () {
    //lancement du jeu au click d'un bouton
    $('.btn-circle').click(play);
    //affichage du mot de passe à 0
    $('.afficheur').text(affichageDepart);
    //fonction pour ecrire le mot de passe
    ecrireMotDePasse();
});
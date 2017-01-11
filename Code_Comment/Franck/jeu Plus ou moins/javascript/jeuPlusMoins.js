$(document).ready(function() {
    jouerPlusOuMoins();
});

function jouerPlusOuMoins() {

        // Creer nombre à decouvrir

 	    var chiffreOrdi = Math.round(Math.random()*10);
        console.log (chiffreOrdi);

        // Nombre d'esssai avant la perte

        var nbreEssai = 5;
        console.log(nbreEssai);

        //Nombre choisi par l'utilisateur

        var essaiUtilisateur = prompt('Choisis un nombre entre 1 et 10','xxx');
        nbreEssai -= 1;
        
        //Creation de la boucle de verification d'essai

        while (nbreEssai > 0) {
        // cas ou on gagne 

            if (essaiUtilisateur == chiffreOrdi) {
                alert ("T'es le plus fort");
                return;
            }
        //cas ou on est au dessus

            else if (essaiUtilisateur > chiffreOrdi) {
                nbreEssai -= 1;
                alert ("Tu es au dessus");
                essaiUtilisateur = prompt("Choisis un nombre entre 1 et 10");
            }

        //cas ou on est au dessus
        
            else if (essaiUtilisateur < chiffreOrdi) {
                nbreEssai -= 1;
                alert ("Tu es en dessous");
                essaiUtilisateur = prompt("Choisis un nombre entre 1 et 10");
            }
        } ;       

        //en cas d'essai trop long

        alert ("tu es un looser");

        };
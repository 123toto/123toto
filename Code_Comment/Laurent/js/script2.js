//**************************************************************************************************************************//
//**************************************************************************************************************************//
//* Pomodoro: Gestion de taches:
//* Saisir une tache dans "A faire", cliquer sur le bouton play, au bout de 25 minutes ou  si on clique sur le bouton stop, 
//* la tache est considérée comme terminé et elle est effacé pour être mise dans la liste des taches "Faits", pendant la
//* durée de la tache, la zone de saisie est inopérante.
//* Si on clique sur le bouton pause, le chronometre s'arrete et ne reprend que lorsqu'on reclique sur play.
//* Chaque fois qu'une tache est terminé, une pause de 5 minutes intervient et toutes les 4 taches c'est une pause plus
//* longue qui dure 15 minutes. Durant cette pause, on doit saisir une nouvelle tache à effectuer.
//* Pomodoro garde en mémoire les 5 dernieres taches effectuées: la tache la plus ancienne est effacée à chaque nouvelle tache.
//***************************************************************************************************************************//
//***************************************************************************************************************************//

var TEMPS = 25 * 60;                 // 25 minutes
var TEMPS_PASSE = TEMPS;        // on passe la duree totale: TEMPS à un variable qui va la décrémenter  //Variable globale: en majuscule
var ETAT = "stop";              // gère les boutons, évite la répétition de play
var INTERVALE;
var oui = true;
var COMPTEUR = 0;

//***** initialisation variables début nouvelle tache *****//
function initialisation(){
    $("#time").text("25:00");                   // initialisation du chrono à 25:00
    $("#task").attr('readonly','readonly');     // empeche la modification de la tache en cours
    $("#task").removeAttr('autofocus');         // supprime le focus du champs: tache à saisir
    $("#faire").text("A faire");                // titre du champs: A faire
    TEMPS_PASSE = TEMPS;
    INTERVALE = windows.setInterval(function(){
            TEMPS_PASSE = TEMPS_PASSE - 1;      // décrémente le temps
            afficher(TEMPS_PASSE);              // appel à la fonction qui affiche le temps
        }, 1000);                               // boucle toute les secondes
}

//****** ajoute la tache à faire dans les taches faites et met le champs à blanc *****//
function tacheFaite(){
    var aAjouter = $('input:text').val();
    $(".list-group").prepend('<li class="list-group-item"><s>' + aAjouter + '</s></li>'); // mise en mémoire de tache faite en premiere position
    $('input:text').val("");                     // efface le champs des taches à faire

    //on ne garde ici que les 5 dernières taches effectuées
    if ($('li').length > 5) {                     
    $('li:last-child').remove();
    }
    // on autorise la saisie d'une nouvelle tache et on met le focus sur le champ
    $("#task").removeAttr('readonly');
    $("#task").attr('autofocus', 'autofocus');
}

$("#time").text("25:00");
//***** preparation et affichage du chronometre *****//
function afficher(temps){
    console.log(temps);
    // calcule les minutes
    if (temps < 0){                             
        minutes = Math.floor(temps / 60) + 1;   // Quand le temps < 0, on ajouter 1, sinon on passe directement à -1mn et -1s
    } else {
        minutes = Math.floor(temps / 60);
    }

    // calcule les secondes
    var secondes = temps % 60;
    // ajoute "0" devant l'affichage des minutes et des secondes quand ils passent à 1 chiffre pour conserver le format mm:ss
    if (temps >= 0){
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (secondes < 10) {
            secondes = "0" + secondes;
        }
    } else {
        // quand temps < 0, on ne rentre qu'une seule fois par tache, pour compter le nombre de taches effectuées et le mettre dans les taches faites
        if (oui){
            COMPTEUR++;
            tacheFaite();
            $("#faire").text("Saisir une nouvelle tache");
            oui = false;
        }
    }

    // toutes les 4 taches: 15 minutes de pause, sinon 5 minutes entre chaque tache, après décompte du temps de la tache
    console.log("  compt   "+COMPTEUR);
    if (COMPTEUR > 0 && COMPTEUR % 4 == 0){
       // console.log("  compt  "+ compteur + " minute "+minutes)
       if(temps < (-15 * 60)) {
            oui = true;
            initialisation();
             
            }
        } else {
           if (temps < (-5 * 60)) {
                oui = true;
                initialisation();
            }
       }

    // affichage du chronometre
    $("#time").text(minutes + ":" + secondes);
}

//***** quand le bouton play est cliqué, on lance le chronometre *****//
function play(){
    if (ETAT != "play"){
        ETAT = "play";
        //***** bloque saisie d'une nouvelle tache *****//
        $("#faire").text("A faire");
        $("#task").attr('readonly','readonly');
        $("#task").removeAttr('autofocus');
        INTERVALE = setInterval(function(){
            TEMPS_PASSE = TEMPS_PASSE - 1;
            afficher(TEMPS_PASSE);
        }, 1000);
    }
}

//***** quand le bouton pause est cliqué, on met en pause le chronometre *****//
function pause(){
    ETAT = "pause";
    window.clearInterval(INTERVALE);
    $("#faire").text("En pause");
}

//***** quand le bouton stop est cliqué, on met le temps à -1 (temps de pause) et on met la tache à faire dans les taches faites *****//
function stop(){
    ETAT = "stop";
    window.clearInterval(INTERVALE);
    TEMPS_PASSE = -1;
    INTERVALE = setInterval(function(){
            TEMPS_PASSE = TEMPS_PASSE - 1;
            afficher(TEMPS_PASSE);
        }, 1000);
}

$(document).ready(function(){
    //***** action des bouton play, pause et stop *****//
    // $("#play").click(function(){
    //     play();
    // });
    $("#play").click(play);     //donne nom de la fonction mais ne l'execute pas, contrairement au code plus haut
    $("#pause").click(pause);
    $("#stop").click(stop);
    //afficher(TEMPS_PASSE);
});
/*******************
 * Pomodoro Didier *
 * Simplon         *
 * Promo La Poste  *
 * 20-12-2016      *
 *******************/

// initialisation des variables globales
var secondes = 0, minutes = 0, zero = 0;    // variables du chrono
var laPause = false, leTravail = false;     // variables de la pause et du doing
var myVar;                                  // variable de la focntion chrono
var parametrePause = false;                 // variable qui permet de savoir si le pomodoro est en pause ou en doing
var laTache;                                // variable de la tâche à faire
var etat = "stop";                          // variable de l'état des boutons

// affiche le chrono
function afficherChrono(minutes, zero, secondes) {
    $(".time").text(minutes + "'" + zero + secondes + "''");
}

// affiche que c'est la pause
function afficherPause(parametrePause) {
    if (parametrePause) {
        $("#doing").text("C'est la pause ! :-)");
    }
    else {
        $("#doing").text("Doing");
    }
}

// récupère l'intitulé de la tâche
function recupererLaTache() {
    laTache = document.getElementById("task").value;
    return laTache;
}

// remet les paramètres du compteur à zéro
function reinitialiser() {
    minutes = 0;
    secondes = 0;
    zero = 0;
}

// calculs pour le chrono
function monChrono(){
    if (secondes++ > 18) {                  // pour des commodités de rapidité j'ai ramené la minute à 20 secondes
        secondes = 0;
        minutes++;
    }
    if (secondes < 10) {
        zero = 0;
    }
    else {
        zero = "";
    }
    afficherChrono(minutes, zero, secondes);
    if (leTravail) {
        if ( minutes >= 2){                 // pour des commodités de rapidité j'ai mis par défaut un temps de travail de 2 minutes
            alert("c'est fini !");
            clearInterval(myVar);
        }
    }
    if (laPause) {
        if ( minutes >= 1){                 // pour des commodités de rapidité j'ai mis par défaut un temps de pause de 1 minute
            alert("la pause est finie !");
            clearInterval(myVar);
            reinitialiser();
            afficherChrono(minutes, zero, secondes);
            afficherPause(false);
        }
    }
}

// lance la tâche
function play() {
    if (recupererLaTache() != "" && etat != "play") {
        etat = "play";
        myVar = setInterval(monChrono, 1000); // lance le chrono
        leTravail = true;
        laPause = false;
    } 
}

// termine la tâche
function stop() {
    if (recupererLaTache() != "" && etat != "stop") {
        etat = "stop";
        clearInterval(myVar);                  // arrête le chrono
        reinitialiser(); 
        afficherChrono(minutes, zero, secondes);
        // écrit la tâche dans le Done
        var fait = $("<li class='list-group-item'></li>").text("");
        $("#done li:last-child").after(fait);
        $("#done li.list-group-item:last-child").append("<s>" + laTache + "</s>");
        // efface la tâche qui est dans l'input
        document.getElementById("task").value = "";
        // lance le chrono de la pause
        laPause = true;
        leTravail = false;
        myVar = setInterval(monChrono, 1000);
        afficherPause(true)
    }  
}

// met le chrono en pause lors de la tâche
// on ne peut pas mettre le chrono en pause lors de la pause
function pause() {
    if (recupererLaTache() == "" && etat != "stop") {
        clearInterval(myVar);
    }
}

// les commandes du Pomodoro
$(document).ready(function(){
    afficherChrono(minutes, zero, secondes);
    $('#play').click(play);
    $('#pause').click(pause);
    $('#stop').click(stop);
});

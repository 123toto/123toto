/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

/*  >>>>>>>>>>>>>>>>>>>>>>>> EN PROJET <<<<<<<<<<<<<<<<<<<<<<<<<<<
        rajouter une possibilité de mettre fin aux PAUSES ! 
        (apparition du bouton lorsque le décomptes de pause commence )  */

var MINUTE = 25; 
var SECONDE = 0;
var DEPART_CHRONO; // variable de départ chrono pour pouvoir utiliser setInterval()
var TACHE;  // tache rentrée par l'utilisateur
var NB_POMO = 0; // compteur pour le nombre de pomodori effectués (à connaitre pour gérer les pauses)

function demarrerChrono() { // fonction chronomètre
    
    if ( SECONDE < 0 ) {  // passage seconde => minute
        MINUTE--;
        SECONDE = 59;
    };
    if ( MINUTE < 0) {  // fin du chrono
            alert("DRRIINNGGG");
            stop();
    };
    if ( SECONDE < 10) { // affichage du 0
        $('.time').text( MINUTE + ":0" + SECONDE);
    }
    else $('.time').text( MINUTE + ":" + SECONDE);
    SECONDE--;
};

function play() { // action du bouton play
    
    DEPART_CHRONO = setInterval( demarrerChrono, 1000);     
    gererChampTexte(true); // bloque l'input pour ne pas modifier le nom de la tâche
    gererBoutonPlay(true); //bloque le fait de pouvoir spammer le bouton play
    gererBoutonPetitePause(true); // bloque le bouton petite pause
    gererBoutonGrandePause(true); // bloque le bouton grande pause
    gererBoutonPause(false); // redonne accès  pauses
    gererBoutonStop(false); // redonne accès  stop

}

function pause() { // action du bouton pause
    
    clearInterval(DEPART_CHRONO);        
    $('.time').text( MINUTE + ":" + SECONDE);
    gererBoutonPlay(false); // redonne accès au bouton play
    annulerPause();
}

function stop() { // action du bouton stop
    
    clearInterval(DEPART_CHRONO);
    $('.time').text( MINUTE + ":" + SECONDE);
// recupération TACHE et l'ajouter à la suite
    TACHE = $('#task').val();
    $('#done').append('<li class="list-group-item"><s>'+ TACHE + '</s></li>');
    $('#task').val(""); // puis remettre cette valeur à vide
//bloque pause et stop
    gererBoutonPause(true);
    gererBoutonStop(true);
// incrémentation du nombres de tâches pour gérer les pauses
    NB_POMO++;
// selon valeur NB_POMO, boutons ré-accessibles APRES attente (pause obligatoire!)
    if ( NB_POMO === 4) {
        $('#doing').append('<h3> Grande Pause 10min obligatoire </h3>'); // affichage information pause
        setTimeout(function() { 
                gererChampTexte(false);
                gererBoutonPlay(false);
                gererBoutonPetitePause(false);
                gererBoutonGrandePause(false);
                $('h3').remove(); // on retire l'affichage une fois la pause terminée
                }, 600000);
        NB_POMO = 0;

    }
    else {      
        $('#doing').append('<h3> Petite Pause 2min obligatoire </h3>'); // affichage information pause
        setTimeout(function() { 
                gererChampTexte(false);
                gererBoutonPlay(false);
                gererBoutonPetitePause(false);
                gererBoutonGrandePause(false);
                $('h3').remove(); // on retire l'affichage une fois la pause terminée
                }, 120000);
        }
    // remise en valeur par défaut
        MINUTE = 25;
        SECONDE = 0;
}


function fairePetitePause () { // action du bouton petite pause
    $('#doing').append('<h3> Vous avez demandé une Pause de 5min </h3>'); // apparition texte
    MINUTE = 5;
    SECONDE = 0;
    DEPART_CHRONO = setInterval( demarrerChrono, 1000);
    gererChampTexte(true); // bloque l'input pour ne pas modifier le nom de la tâche
    gererBoutonPlay(true); //bloque le fait de pouvoir spammer le bouton play
    gererBoutonPetitePause(true); // bloque le bouton petite pause
    gererBoutonGrandePause(true); // bloque le bouton grande pause
    gererBoutonPause(true); // bloque accès  pauses
    gererBoutonStop(true); // bloque accès  stop
}

function faireGrandePause () { // action du bouton grande pause
    $('#doing').append('<h3> Vous avez demandé une Pause de 15min </h3>');  // apparition texte
    MINUTE = 15;
    SECONDE = 0;
    DEPART_CHRONO = setInterval( demarrerChrono, 1000);
    gererChampTexte(true); // bloque l'input pour ne pas modifier le nom de la tâche
    gererBoutonPlay(true); //bloque le fait de pouvoir spammer le bouton play
    gererBoutonPetitePause(true); // bloque le bouton petite pause
    gererBoutonGrandePause(true); // bloque le bouton grande pause
    gererBoutonPause(true); // bloque accès  pauses
    gererBoutonStop(true); // bloque accès  stop
}

function gererBoutonPlay(acces) {   //gère l'acces au bouton play
    $('#play').prop('disabled', acces);
}

function gererBoutonPause(acces) {  //gère l'acces au bouton pause
    $('#pause').prop('disabled', acces);
}

function gererBoutonStop(acces) {   //gère l'acces au bouton stop
    $('#stop').prop('disabled', acces);
}

function gererChampTexte(acces) {   //gère l'acces au champ texte à remplir
    $('#task').prop('disabled', acces);
}

function gererBoutonPetitePause(acces) { // gère l'acces au bouton petite pause
    $('#petite_pause').prop('disabled', acces);
}

function gererBoutonGrandePause(acces) { // gère l'acces au bouton grande pause
    $('#grande_pause').prop('disabled', acces);
}

$(document).ready(function() { 
// redonne l'accès à input, boutons play, petite pause et grande pause
    gererChampTexte(false);
    gererBoutonPlay(false);
    gererBoutonPetitePause(false);
    gererBoutonGrandePause(false);
// bloque bouton pause et bouton stop
    gererBoutonPause(true);
    gererBoutonStop(true);
// actions des boutons
    $('#play').click(play);
    $('#pause').click(pause);
    $('#stop').click(stop);
    $('#petite_pause').click(fairePetitePause);
    $('#grande_pause').click(faireGrandePause);
});



/*    premier code sans organisation en function ( tout dans $(document).ready)

        $('#play').click(function(){
        DEPART_CHRONO = setInterval( DemarrerChrono, 1000);
        // bloque l'input pour ne pas modifier le nom de la tâche 
        $("#task").prop('disabled', true);
        //bloque le fait de pouvoir spammer le bouton play
        $('#play').prop('disabled', true);
        // redonne accès  pauses et stop
        $('#pause').prop('disabled', false);
        $('#stop').prop('disabled', false);

    });

    $('#pause').click(function() {
        clearInterval(DEPART_CHRONO);        
        $('.time').text( MINUTE + ":" + SECONDE);
        // redonne accès au bouton play
        $('#play').prop('disabled', false);
    });

    $('#stop').click(function() {
        clearInterval(DEPART_CHRONO);
        MINUTE = 0;
        SECONDE = 10;
        $('.time').text( MINUTE + ":" + SECONDE);
        // recupération TACHE et l'ajouter à la suite
        TACHE = $('#task').val();
        $('#done').append('<li class="list-group-item"><s>'+ TACHE + '</s></li>');
        // puis remettre cette valeur à vide
        $('#task').val("");
        //bloque pause et stop
        $('#pause').prop('disabled', true);
        $('#stop').prop('disabled', true);
        // incrémentation du nombres de tâches pour gérer les pauses
        NB_POMO++;
        // selon valeur NB_POMO, input et play ré-accessibles
        if ( NB_POMO === 4) {
            setTimeout(function() { 
                        $('#task').prop('disabled', false);
                        $('#play').prop('disabled', false);
                        }, 10000);
            NB_POMO = 0;
        }
        else setTimeout(function() { 
                        $('#task').prop('disabled', false);
                        $('#play').prop('disabled', false);
                        }, 5000);

    });
*/







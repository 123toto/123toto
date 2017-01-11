
function ecrire(temps) { 
    var minutes = Math.floor(temps / 60);
    var secondes = temps % 60;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    return minutes + ":" + secondes;
}

function play() {
    $('.time').text(ecrire(TIMER));
    if (ETAT != "play") {
           ETAT = "play";
           INTERVAL = window.setInterval(function () {
               if (TIMER > 0) {
                   TIMER--;
                   $('.time').text(ecrire(TIMER));
               } 
               else {
                    ETAT = "stop";
                    window.clearInterval(INTERVAL);
                }
           }, 1000);
       }
}
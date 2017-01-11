var lettreSaisie = [];
var motATrouver = "";
var lettre = "";
var val = false;
var nombre = 0;
var trouve = 0;
var compteur = 0;


// Après validation du mot, on le met dans une variable et on affiche le nombre de lettre de comporte le mot
function valider(){
    val = true;                         // permet de ne faire appel à la fonction manquer qu'une fois le mot validé
    motATrouver = $('input:text').val();
    $('input:text').val("");
    afficherNbrLettre();
}

function afficherNbrLettre(){           // affichage du nombre de lettre (background-color)
    for (var i = 0; i < motATrouver.length; i++){
        // $("#afficher").append("<li id="+i+"></li>");
        $("#afficher").append("<li id="+i+"></li>");
    }
}

function rechercherLettre() {           // recherche correspondance entre lettre tapé et lettre dans le mot
                  // tableau ou on va mettre les lettres déjà saisies
    var tableau = motATrouver.split("");
    var idx = tableau.indexOf(lettre);  
    if (val){
        var ilettre = lettreSaisie.indexOf(lettre); // permet de verifier si la lettre à déjà été saisie
        console.log(" lettre "+lettre);
        lettreSaisie.push(lettre); 
    }
    if (idx == -1 && val){

        console.log("  indice idx  "+idx+ " ilettre "+ilettre);
        if (ilettre == -1){             // si la lettre n'a pas déjà été saisie
            nombre++;
            console.log("  nombre "+nombre);
            manquer();
            console.log("  nombre "+nombre);
            afficherGibet();
            dessiner(nombre);
            if (nombre > 9){
                $("#lettreBis").prepend("<p><strong>PERDU !!  Le mot est:</strong></p>");
                if ($('p').length > 1) {                     
                    $('p:last-child').remove();
                }
                $("li").css({"background-color":"Lime", "font-weight":"bold"});
                $(document).off('keydown');
                for (var i = 0; i < motATrouver.length; i++){
                    var lettreMot = tableau[i];
                    if (lettreSaisie.indexOf(lettreMot) == -1){                   
                        $("#"+i).append(lettreMot);
                    }
                }
            }
        }
        else{
            $("#lettreBis").prepend("<p>La lettre : <strong>" + lettre + "</strong> a déjà été saisie !</p>");
            if ($('p').length > 1) {                     
                 $('p:last-child').remove();
             }
        }
    }

    while (idx != -1 && ilettre == -1) {      // si correspondance et lettre non déjà saisie on affiche la lettre
            afficherLettre(idx);
            idx = tableau.indexOf(lettre, idx + 1); // si plusieurs fois meme lettre on continue la boucle
    }
    return lettre;
}

function afficherLettre(idx){           // affichage de la lettre à sa place
    trouve++;
    $("#"+idx).append(lettre);
    console.log("  trouve "+trouve);
    var coups = trouve + nombre;
    if (trouve == motATrouver.length){
        $("#lettreBis").prepend("<p><strong>GAGNE !!! En "+coups+" coups ! </strong></p>");
        if ($('p').length > 1) {                     
            $('p:last-child').remove();
        }
        gagner();
        $(document).off('keydown');
    }
}


function gagner(){
    var intervalle = setInterval(function(){
        compteur++;
        lettre = "";
        for (var i=0; i < 1; i++){
            var indice = Math.floor(Math.random() * motATrouver.length);
            lettre += motATrouver.substring(indice, indice+1);
        }
        manquer();
        if (compteur > 300){
            window.clearInterval(intervalle);
        }
    }, 30);

}

function manquer(){
    console.log(" manquer  "+ lettre);
    var couleur = genererCouleur();
    var top = Math.floor(Math.random() * 450);
    var left = Math.floor(Math.random() * 450);
    console.log(" top: "+top+" left: "+left);
    $("#manque").append("<span style='left: "+left+"px; top: "+top+"px; background-color:#"+couleur+"'>"+lettre+"</span>");
}

function genererCouleur(){
    var couleur = "";
    var valeurs = ["a", "b", "c", "d", "e", "f","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 6; i++){
        indice = Math.floor(Math.random() * 16);
        couleur += valeurs[indice];
    }
    return couleur;
}

$(document).ready(function(){           // au clic sur le bouton valider
    $("#valider").click(valider);
});


$(document).on('keydown',function(touche){
    lettre = String.fromCharCode(touche.which); // récupère le code ascii de la touche puis le convertit sous forme de lettre
    rechercherLettre();
});

function afficherGibet() {
  var canvas = document.getElementById('canvas3');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = "black";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(10, 470);
    ctx.lineTo(150, 470);
    ctx.moveTo(65, 470);
    ctx.lineTo(65, 30);
    ctx.lineTo(305, 30);
    ctx.lineTo(305, 85);
    ctx.moveTo(90, 470);
    ctx.lineTo(65, 430);
    ctx.moveTo(65, 70);
    ctx.lineTo(120, 30);
    ctx.moveTo(200, 470);
    ctx.lineTo(220, 410);
    ctx.lineTo(310, 410);
    ctx.lineTo(330, 470);
    ctx.stroke();
  }
}

function dessiner(nombre){
    var canvas = document.getElementById('canvas3');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        var mon_image = new Image();
        switch(nombre){
            case 1:
                break;
            case 2:
                mon_image.src="../pendu/images/piedG400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 3:
                mon_image.src="../pendu/images/piedD400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 4:
                mon_image.src="../pendu/images/jambeG400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 5:
                mon_image.src="../pendu/images/jambeD400.png";
                
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 6:
                mon_image.src="../pendu/images/corps400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 7:
                mon_image.src="../pendu/images/brasG400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 8:
                mon_image.src="../pendu/images/brasD400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 9:
                mon_image.src="../pendu/images/tete400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                break;
            case 10:
                mon_image.src="../pendu/images/corde400.png";
                ctx.drawImage(mon_image, 95,80, 330, 330);
                ctx.strokeStyle = "white";
                ctx.lineWidth = 15;
                ctx.beginPath();
                ctx.moveTo(200, 470);
                ctx.lineTo(220, 410);
                ctx.lineTo(310, 410);
                ctx.lineTo(330, 470);
                ctx.stroke();
                break;
            }
        }
}               
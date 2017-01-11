
// Déclaration des variables globales

var pvGentil = 15;
var pvMechant = 15;
var tour = "gentil";

function enleverPv(personnage, nombrePv) {

        if (personnage == "gentil") {
                pvGentil -= nombrePv;
                $('#variablesGentil span').text(pvGentil);
                $("#avatarGentil").effect( "pulsate", {times:5},"fast");
            
        }
        if (personnage == "mechant") {
                pvMechant -= nombrePv;
                $('#variablesMechant span').text(pvMechant);
                $("#avatarMechant").effect( "pulsate", {times:5},"fast");
            
        }  
        if (tour == "mechant") {
            delai(attaqueDuMechant);
    
        }
}

function toucherOuPas(chanceToucher) {
    var toucher = Math.ceil(Math.random() * 10);

    switch (chanceToucher) {
        case "grande": 
            if (toucher >= 2) {
                if (mortOuPas(chanceToucher)) {
                enleverPv("mechant", 1);
                $('#toucheRateGentil').text("touché");
                $('.affichageLog').show();
                $('#combatLogGentil').show();
                }               
            }
            else {
            delai(attaqueDuMechant);
            $('#toucheRateGentil').text('raté');
            $("#avatarMechant").effect( "slide","fast");
            $('.affichageLog').show();
            $('#combatLogGentil').show();            
            }        
            break;
        case "moyenne":
            if (toucher >=5) {
                if (mortOuPas(chanceToucher)) {
                enleverPv("gentil", 2);
                $('#toucheRateMechant').text("touché");
                $('.affichageLog').show();
                $('#combatLogMechant').show();
                $('#turn').show();
                }
            }
            else {
            tour = "gentil";
            $('#toucheRateMechant').text('raté');
            $("#avatarGentil").effect( "slide","fast");
            $('.affichageLog').show();
            $('#combatLogMechant').show();
            $('#turn').show();
            } 
            break;
        case "petite":
            if (toucher >=7) {
                if (mortOuPas(chanceToucher)) {
                enleverPv("mechant", 3);
                $('#toucheRateGentil').text("touché");
                $('.affichageLog').show();
                $('#combatLogGentil').show();
                }
            }
            else {
            delai(attaqueDuMechant);
            $('#toucheRateGentil').text('raté');
            $("#avatarMechant").effect( "slide","fast");
            $('.affichageLog').show();
            $('#combatLogGentil').show();               
            }         
    }
}


function delai(attaque) {
    window.setTimeout(attaque, 2000);
}



function attaquePrecise() {
   var chance = "grande";
   toucherOuPas(chance);
}

function attaquePuissante() {
   var chance = "petite";
   toucherOuPas(chance);
}

function attaqueDuMechant() {
    var chance = "moyenne";  
    tour = "gentil";  
    toucherOuPas(chance);    
}


function mortOuPas(chance) {
    if (chance == "petite") {
        if (pvMechant <= 3) {
            tour =="fin";
            pvMechant = 0;
            $("#avatarMechant").toggle( "clip" );
            $('#toucheRateGentil').text("tué");
            $('.affichageLog').show();
            $('#combatLogGentil').show();
            $('#variablesMechant span').text(pvMechant);
            $('h3').text("GAGNE !");
            $('#resultat').show();
            return false;
        }
    }
    if (chance == "moyenne") {
        if (pvGentil <= 2) {
            tour =="fin";
            pvGentil = 0;
            $("#avatarGentil").toggle( "clip" );
            $('#toucheRateMechant').text('tué');
            $('.affichageLog').show();
            $('#combatLogMechant').show();
            $('#variablesGentil span').text(pvGentil);
            $('h3').text("PERDU !");
            $('#resultat').show();           
            return false;
        }
    }
    if (chance =="grande") {
        if (pvMechant <= 1) {
            tour = "fin";
            pvMechant = 0;
            $("#avatarMechant").toggle( "clip" );
            $('#toucheRateGentil').text("tué");
            $('.affichageLog').show();
            $('#combatLogGentil').show();
            $('#variablesMechant span').text(pvMechant);
            $('h3').text("GAGNE !");
            $('#resultat').show();            
            return false;
        }
    }
    return true;
}
  



$(document).ready( function() {
    $('#resultat').hide();
    $('.affichageLog').hide();  

    $('#atk1').click(function () {
        $('#turn').hide();
        $('#combatLogMechant').hide();
        $('#combatLogGentil').hide();
        if (tour == "gentil") {
            tour = "mechant";
            delai(attaquePrecise);
        }
    });


    $('#atk2').click(function() {
        $('#turn').hide();
        $('#combatLogMechant').hide();
        $('#combatLogGentil').hide();
        if (tour == "gentil") {
             tour = "mechant";
             delai(attaquePuissante);
        }
    });    
});
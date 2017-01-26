var compteur = 0;
var premierNb;
var deuxiemNb;
var operateur;

function ecrireChiffre() {
    if (compteur == 0) { result.innerHTML = event.target.value;compteur++;}
    else if (compteur <12) { result.innerHTML += event.target.value;compteur++;}
    else {alert("taille max atteinte")}
}

function memoriserPremier(oper){
    premierNb = parseInt(result.innerHTML);
    compteur=0;
    operateur = oper;
}

function calculer(){
    deuxiemNb = parseInt(result.innerHTML);
    var resultat;
    switch (operateur){
        case "+" :
            resultat = premierNb + deuxiemNb ;
            break;
        case "-" :
            resultat = premierNb - deuxiemNb ;
            break;
        case "/" :
            resultat = premierNb / deuxiemNb ;
            break;
        case "*" :
            resultat = premierNb * deuxiemNb ;
            break;
    }
    if (resultat.toString().length >12) {
        if (Math.round(resultat).length >12) {
            result.innerHTML = resultat.toExponential(5);
        }
        else {
            result.innerHTML = resultat.toString().slice(12);
        }
    }
    else {
        result.innerHTML = resultat;
    }

}

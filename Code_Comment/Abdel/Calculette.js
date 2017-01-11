
// Permet d'afficher dans le input le chiffre correspondant au bouton appuyé

function afficher(id) {
    
    document.getElementById("rep").value += id;
}



function calculer() {
    var operation = document.getElementById("rep").value; //Récupère la totalité de l'input
    
    // Loop pour connaitre la position de l'opérateur dans l'input
   
    for (var i = 0; i < operation.length; i++) {
        if (operation[i] == "+" || operation[i] == "-" || operation[i] == "*" || operation[i] == "/") {
            var position = i;
        }
    }

    // Déclaration de notre opération grâce à notre loop

    var nb1 = parseInt(operation.substr(0,position)); // nombre précédent l'opérateur
    var operateur = operation.substr(position,1);
    var nb2 = parseInt(operation.substr(position + 1)); // nombre suivant l'opérateur


 // Switch qui determine le type d'opération à calculer en fonction de notre opérateur
 
    var resultat = 0;  

    switch(operateur) {
    case "+":
        resultat = nb1 + nb2;
        break;
    case "-":
        resultat = nb1 - nb2;
        break;
    case "*":
        resultat = nb1 * nb2;
        break;
    case "/":
        resultat = nb1 / nb2;
        break;
    }    

    //Affichage de la réponse à la suite de notre input

    document.getElementById("rep").value = operation + " = " + resultat;
}
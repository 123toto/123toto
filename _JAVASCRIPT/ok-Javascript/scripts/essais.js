////FIBONACCI
// var n0;
// var n1=1;
// var n2=2;
// var n3;
//
//
// ////FIBONACCI
//
// var fibonacci = function (nbreUtilisateur) {
//     var nbreFois = parseInt(nbreUtilisateur);
//
//     if (!isNaN(nbreFois) && (0 < nbreFois < 100)) {
//         console.log(n1);
//         console.log(n2);
//         for (var i=1 ; i < (nbreFois+1) ; i++) {
//             n3=n1+n2;
//             n1=n2;
//             n2=n3;
//             console.log(n3);
//         }
//     }
//     else {
//         console.log("Votre nombre n'est pas compris entre 1 et 100");
//     }
// }
//
// JOUER A FIBONACCI
// nbreUtilisateur = prompt("combien de fois ?");
// fibonacci(nbreUtilisateur);


// ////fonction BISSEXTILE
//
// var bissextile = function (annee){
//     var nbreAnnee = parseInt(annee);
//     if (!isNaN(nbreAnnee) && (nbreAnnee % 4 == 0) && (!(nbreAnnee % 100 == 0) || (nbreAnnee % 400 == 0))) {
//         console.log(nbreAnnee + " est une année bissextile");
//     }
//     else {
//         console.log(nbreAnnee + " n\'est pas une année bissextile");
//     }
// }
//
//JOUER A BISSEXTILE
// annee = prompt("Année à tester pour savoir si elle est bissextile : ");
// bissextile(annee);


// ////fonction FIZZBUZZ
//
// var fizzbuzz = function (nbreUtilFizzbuzz){
//     var nbreFizzbuzz = parseInt(nbreUtilFizzbuzz);
//     if (!isNaN(nbreFizzbuzz)) {
//         console.log("toto");
//         for (var i=1 ; i < nbreFizzbuzz+1 ; i++){
//             if ((i % 3 == 0) && (i % 5 == 0)) {
//                 console.log("FizzBuzz");
//             }
//             else {
//                 if (i % 3 == 0) {
//                     console.log("Fizz");
//                 }
//                 else if (i % 5 == 0){
//                     console.log("Buzz");
//                 }
//                 else {
//                     console.log(i)
//                 }
//             }
//         }
//     }
//     else {
//         console.log("Ce n'est pas un nombre");
//     }
// }
//
//JOUER A FIZZBUZZ
// nbreUtil = prompt("jusqu'à quel nombre veux tu afficher la suite FizzBuzz")
// fizzbuzz(nbreUtil);



// // fonction NOMBRES PREMIERS
// var primenumbers = [2,3];
// var nbP = false;
//
// var premiers = function (nbreUtilPremiers) {
//     var nbrePremiers = parseInt(nbreUtilPremiers);
//     console.log(2);
//     console.log(3);
//     for (var i= 4; i <= nbrePremiers ; i++){
//         ////////////////// VERSION DE FRED
//         var nbreLimite = Math.sqrt(i);
//         nbP = true;
//         for (var j = 0; j<primenumbers.length; j++) {
//             for (var j = 0; primenumbers[j] <= primenumbers[primenumbers.length-1]; j++) {
//             if (primenumbers[j] > nbreLimite){
//                 break;
//             }
//             if ((i % primenumbers[j]) == 0){
//                 nbP = false;
//                 break;
//             }
// ////////////////// MA VERSION
//             // if (i != primenumbers[j] && i % primenumbers[j] != 0){
//             //     nbP = true;
//             //     if (j == primenumbers.length-1 && nbP == true){
//             //         primenumbers.push(i);
//             //         console.log(i);
//             //         nbP = false;
//             //         break;
//             //     }
//             // }
//             // else {
//             //     break;
//             // }
// //////////////////////
//         }
//         if (nbP) {
//                 primenumbers.push(i);
//                 console.log(i);
//         }
//     }
// }
//
//JOUER A NOMBRES PREMIERS
// var nbreUtil = prompt("jusqu'à quel nombre veux tu afficher les nombres premiers");
// premiers(nbreUtil);



// // fonction CHIFFRE 1 à 9
//
// var chiffreAleatoire = parseInt(((Math.random()*9)+1));
// var chiffreUtilisateur = prompt("Trouvez le chiffre choisi par l'ordinateur compris entre 1 et 9");
//
// function chiffre1a9() {
//     if (chiffreUtilisateur == chiffreAleatoire) {
//         confirm("Vous avez gagnez !!");
//     }
//     if (chiffreUtilisateur < chiffreAleatoire) {
//         chiffreUtilisateur = prompt("Votre chiffre est trop petit, retentez votre chance");
//         chiffre1a9();
//     }
//     if (chiffreUtilisateur > chiffreAleatoire) {
//         chiffreUtilisateur = prompt("Votre chiffre est trop grand, retentez votre chance");
//         chiffre1a9();
//     }
//
// }


///////// fonction TRIANGLE EN LETTRE

var lettreTriangle = prompt("choisissez la lettre à utiliser pour le triangle");
var dimensionTriangle = prompt("quelle taille doit-il faire ?");

function triangleEnLettres (lettre, dim) {
    var dimension = parseInt(dim);
    for (var i=1 ; i < dimension ; i++) {
        console.log(lettre.repeat(i));
    }
}

triangleEnLettres(lettreTriangle,dimensionTriangle);

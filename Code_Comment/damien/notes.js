

//crée un tableau de 20 notes aléatoirement
function creerNotes() {
        var notes = [];
        for (i=0; i < 20; i++){
        notes.push(Math.round(Math.random() * 20));
        }
        return notes;
}

//affiche la note la plus grande et la note la plus petite
function afficherMinMax(notes){
  var petite = 0;
  var grande = 0;
  var comparePet = 20;
  var compareGr = 0
      for ( var i = 0; i < notes.length ; i++) {
          if (notes[i] < comparePet) {
          comparePet = notes[i];
         }
      else if(notes[i] > compareGr) {
          compareGr = notes[i];
         }
       }
  petite = comparePet;
  grande = compareGr;
  console.log("la note la plus basse est " + petite);
  console.log("la note la plus haute est " + grande);
}

//affiche la moyenne des notes
function afficherMoy(notes){
  var moyenne = 0;
  var somme = 0;
        for ( var i = 0; i < notes.length ; i++) {
         somme += notes[i];
        }
   moyenne = somme / notes.length;
   console.log("la moyenne est de " + moyenne);     
}

//affiche le nombre d'occurence de même notes
function afficherOccur(notes){
    var res = 0;
     for ( var i = 0; i < notes.length ; i++) {
         if (notes[i] % 10 == 0 && notes[i] !== 20){
             res += 1;
         }
    }    
    console.log('Il y a ' + res + " occurence(s) de 10");
}

//affiche le nombre de notes supérieures à la moyenne
function afficherSupMoy(notes){
    var supMoy = 0;
    for ( var i = 0; i < notes.length ; i++) {
        if (notes[i] > 10){
            supMoy += 1;
        }
    }
    console.log("Il y a " + supMoy + " notes au dessus de 10");
}

//appelle toutes les fontions
function main(){
    var notes = creerNotes();
    afficherMinMax(notes);
    afficherMoy(notes);
    afficherOccur(notes);
    afficherSupMoy(notes);
}


//appelle la fonction principale
main()
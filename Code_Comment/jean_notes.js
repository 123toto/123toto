/*Création du tableau de notes*/
function creerNote(){
  var note;
  var notesEleves = [];
  for (var i = 0; i < 20; i++) {
    note = Math.round((Math.random()*2000))/100;    //Calcul d'une note aléatoire avec une décimale à 2 chiffres
    notesEleves.push(note);                         //Note enregistrée dans un array
  }
  return notesEleves;                               //Retour du resultat
}

/*Calcul de la moyenne des notes*/
function calculerMoyenne(notes){
  var total = 0;
  var moyenne = 0;
  for (i=0; i<notes.length; i++) {
    total += notes[i];                              //Addition des notes
    moyenne = total/notes.length;                   //Division du total par le nombre de notes
  }
   return moyenne;                                  //Retour du resultat
}

/*Recherche de la note la plus haute*/
function noteHaute(notes){
  var resultat = 0;
  for (var i = 0; i < notes.length; i++) {
      if (resultat< notes[i]){                      //Si la note du tableau est plus haute que celle de la variable
        resultat = notes[i];                        //La valeur de la variable est midifiée
      }
    }
  return resultat;                                  //Retour du résultat
}

/*Recherche de la note la plus basse*/
function noteBasse(notes){
  var resultat = 20;
  for (var i = 0; i < notes.length; i++) {
      if (resultat> notes[i]){                      //Si la note du tableau est plus basse que celle de la variable
        resultat = notes[i];                        //La valeur de la variable est midifiée
      }
    }
  return resultat;                                  //Retour du résultat
}

/*Comptage du nombre de note supèrieur à la moyenne*/
function compterNoteHaute(notes){
  var moyenne = calculerMoyenne(notes);             //Calcul de la moyenne des notes en appelant la fonction 
  var nbrDessus = 0;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i]>moyenne){                          //Si la note du tableau est supèrieur à la moyenne
      nbrDessus++;                                  //La valeur compteur est incrémentée
    }
  }
  return nbrDessus;                                 //Retour du résultat
}

/*Comptage du nombre de note supèrieur à 10*/
function compterNoteDix(notes){
  var nbrDix = 0;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i]>10){                             //Si la note du tableau est supèrieur à 10
      nbrDix++;                                     //La valeur compteur est incrémentée
    }
  }
  return nbrDix;                                    //Retour du résultat
}


function main(){
  var eleves = creerNote();                         //Initialisation des notes
  console.log(eleves);                              //affichage des notes
  console.log(calculerMoyenne(eleves));             //affichage de la moyenne des notes
  console.log(noteHaute(eleves));                   //affichage de la note la plus haute
  console.log(noteBasse(eleves));                   //affichage de la note la plus basse
  console.log(compterNoteHaute(eleves));            //affichage du nombre de notes supèrieur à la moyenne
  console.log(compterNoteDix(eleves));              //affichage du nombre de notes supèrieur à 10
}


main();

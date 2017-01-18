
var getAllLetters = function(array) {
    var result =[];
    // for (var i = 0; i < array.length; i++) {
    //     for (var j = 0; j < array[i].length; j++) {
    //         if (array[i].)
    //     }
    // }
    var tabEnLettres = array.toString();
    var indexLettres = "" ;

    console.log(tabEnLettres);
    for (var i = 0; i < tabEnLettres.length; i++) {
        var lettreEnCours = tabEnLettres.substring(i,i+1);
        if (lettreEnCours != ",") {
            if (i == 0) {
                indexLettres = lettreEnCours;
                result.push(lettreEnCours);
            }
            if (indexLettres.indexOf(lettreEnCours) == -1) {
                indexLettres += lettreEnCours;
                result.push(lettreEnCours);
            }
        }
    }
    result.sort();
    console.log(result);
}



getAllLetters(['cat', 'dog', 'fish']);
getAllLetters(['cat', 'dog', 'fish', 'cat']);

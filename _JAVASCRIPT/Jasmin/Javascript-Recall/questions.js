var selectElementsStartingWithA = function(array) {
    var result = [];
    for (i = 0 ; i < array.length ; i++) {
        if (array[i].startsWith("a")) {
            result.push(array[i]);
        }
    }
    return result;
}

var selectElementsStartingWithVowel = function(array) {
    var result = [];
    for (i = 0 ; i < array.length ; i++) {
        if (array[i].startsWith("a")) {
            result.push(array[i]);
        }
        if (array[i].startsWith("e")) {
            result.push(array[i]);
        }
        if (array[i].startsWith("i")) {
            result.push(array[i]);
        }
        if (array[i].startsWith("o")) {
            result.push(array[i]);
        }
        if (array[i].startsWith("u")) {
            result.push(array[i]);
        }
        if (array[i].startsWith("y")) {
            result.push(array[i]);
        }
    }
    return result;
}

var removeNullElements = function(array) {
    var result = [];
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] != null) {
            result.push(array[i]);
        }
    }
    return result;
}

var removeNullAndFalseElements = function(array) {
    var result = [];
    for (var i = 0 ; i < array.length ; i++) {
        if (!(array[i] === null || array[i] === false)) {
            result.push(array[i]);
        }
    }
    return result;
}

var reverseWordsInArray = function(array) {
    var result = [];
    for (var i = 0 ; i < array.length ; i++) {
        var word = array[i];
        var drow = word.split("").reverse().join("");
        result.push(drow);
    }
    return result;
}

var everyPossiblePair = function(array) {
    var result=[];
    array.sort();
    for (var i = 0 ; i < array.length-1 ; i++ ) {
        for (var j = i + 1 ; j < array.length  ; j++) {
            var resultPaire = [];
            resultPaire.push(array[i]);
            resultPaire.push(array[j]);
            result.push(resultPaire);
        }
    }
    return result;
}

var allElementsExceptFirstThree = function(array) {
    array.splice(0,3);
    return array;
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    var result = array.sort(function(premierMotTeste,deuxiemeMotTeste){
        if (premierMotTeste[premierMotTeste.length-1] > deuxiemeMotTeste[deuxiemeMotTeste.length-1]){
            return 1;
        }
        else if (premierMotTeste[premierMotTeste.length-1] < deuxiemeMotTeste[deuxiemeMotTeste.length-1]){
            return -1;
        }
        return 0;
    })
    return result;
}

var getFirstHalf = function(string) {
    var moitie = Math.round(string.length/2);
    string = string.slice(0,moitie);
    return string;
    }

var makeNegative = function(number) {
        if (number >= 0) {
            number = number * -1;
        }
        return number;
    }

var numberOfPalindromes = function(array) {
        var compteur = 0;
        var test = 0;
        for (var i = 0 ; i < array.length ; i++ ) {
            var mot = array[i];
            for (var j = 0 ; j < Math.round(mot.length/2) ; j++) {
                var debut = mot.substr(j,1);
                var fin = mot.substr(mot.length-j-1,1);
                if (debut != fin) {
                    break;
                }
                test++;
                if (test == Math.round(array[i].length/2)) {
                    compteur++;
                    test = 0;
                }
            }
        }
    return compteur;
    }

var shortestWord = function(array) {
        var result = [array[0]];
        for (var i = 1 ; i<array.length;i++){
            if (array[i].length < result[0].length){
                result.splice(0,1,array[i]);
            }
        }
        return result[0];
    }

var longestWord = function(array) {
    var result = [array[0]];
    for (var i = 1 ; i<array.length;i++){
        if (array[i].length > result[0].length){
            result.splice(0,1,array[i]);
        }
    }
    return result[0];
}

var sumNumbers = function(array) {
    var result = array.reduce(function(memo,val){
        return memo + val;
    });
    return result;
}

var repeatElements = function(array) {
    longueurTabDepart = array.length;
    for (var i = 0; i < longueurTabDepart; i++) {
        array.push(array[i]);
    }
    return array;
}

var stringToNumber = function(string) {
    var result = parseInt(string);
    return result;
}

var calculateAverage = function(array) {
    var result = array.reduce(function(memo,val){
        return memo + val;
    });
    var average = result / array.length;
    return average;
}


var getElementsUntilGreaterThanFive = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            array.splice(array[i]);
        }
    }
    return array;
}

var convertArrayToObject = function(array) {
    var personnages = {};
    for (var i = 0; i < array.length; i = i+2) {
        personnages[array[i]] = array[i+1];
    }
    return personnages;
}


var getAllLetters = function(array) {
    var result =[];
    var tabEnLettres = array.toString();
    var indexLettres = "" ;

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
    return result;
}

var swapKeysAndValues = function(object) {
    for (var prop in object) {
        var PropDevientVal = prop;
        var ValdevientProp = object[prop];

        delete prop ;
        delete object[prop];

        prop = ValdevientProp;
        object[prop] = PropDevientVal;
    }
    return object;
}

var sumKeysAndValues = function(object) {
    var entreeParPaires = Object.entries(object);
    var tabloEntrees = [];
    var tabloConcat = [];
    for (var i = 0; i < entreeParPaires.length; i++) {
        tabloEntrees = tabloConcat.concat(entreeParPaires[i]);
        tabloConcat = tabloEntrees ;
    }
    var result = tabloEntrees.reduce(function(memo,val){
        return parseInt(memo) + parseInt(val);
    });
    return result;
}

var removeCapitals = function(string) {
}

var roundUp = function(number) {
}

var formatDateNicely = function(date) {
}

var getDomainName = function(string) {
}

var titleize = function(string) {
}

var checkForSpecialCharacters = function(string) {
}

var squareRoot = function(number) {
}

var factorial = function(number) {
}

var findAnagrams = function(string) {
}

var convertToCelsius = function(number) {
}

var letterPosition = function(array) {
}

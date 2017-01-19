var removeCapitals = function(string) {
    for (var i = 0; i < string.length; i++) {
        var testMajuscule = string.substring(i,i+1);
        var majuscule = testMajuscule.toUpperCase();
        console.log(testMajuscule);
        console.log(majuscule);
        if (testMajuscule === majuscule) {
            var string2 = string.slice(i,i+1);
        }
    }
    console.log(string);
}

    removeCapitals('Hello Kitty');

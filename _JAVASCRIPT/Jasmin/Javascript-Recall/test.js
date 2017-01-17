
var selectElementsStartingWithA = function(array) {
    var result = [];
    for (i = 0 ; i < array.length ; i++) {
        if (array[i].startsWith("a")) {
            result.push(array[i]);
        }
    }
    console.log(result);
    console.log("toto");
}
selectElementsStartingWithA(['bananas', 'apples', 'pears', 'avocados']);

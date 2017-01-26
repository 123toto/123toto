var letterPosition = function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].toUpperCase() == array[i]) {
            result.push(array[i].charCodeAt() - 64);
        }
        else{
            result.push(array[i].charCodeAt() - 96);
        }
    }
    return result;
}

 letterPosition(['H', 'e', 'l', 'l', 'o', 'k', 'i', 't', 't', 'y']);
//([8, 5, 12, 12, 15, 11, 9, 20, 20, 25])

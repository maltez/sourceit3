// concating arrays 
var firstArray = [5, 6, 10, 11];
var secondArray = [7, 8, 9];

function concatArrays(arr1, arr2) { //declare a function for concating two arrays

    for (var i = 0; i < arr2.length; i++) { //loop to go through elements of the second array
        arr1.splice(2, 0, arr2[i]) //insert arr2 elements to arr1 in 2nd index place
    };
    return arr1;
};
concatArrays(firstArray, secondArray);

// the second way with reversed array

function concat2Arrays(arr1, arr2) { //declare a function for concating two arrays

    arr2.map(function(el) { //use map method to sort out elements 
        return arr1.splice(2, 0, el) //insert arr2 elements to arr1 in 2nd index place
    });
    return arr1;
};
concat2Arrays(firstArray, secondArray);

//Get 'a' letters in closure

var getString = function() { //declare a function which print the 'a' letter

    var stringPrint = ''; // assign variable 

    return function() { // result of function getString is a function which return concatination
        return stringPrint = stringPrint + 'a'; // concating string
    };
};

var s = getString(); //assign the result of function in variable

// encrypt a word

var crypt = function() { //Declare a function to crypt and decrypt a word

    var takeWord = prompt('Enter your word'); // use prompt to get a word
    var text = 'Как пробегает дней круговорот и королевства близятся к распаду. Все говорит о том, что час пробьет и время унесет мою отраду.'
    var result = [];

    function getCrypt(text, takeWord) { //Declare a function to crypt a word

        var findIndex; // assign a variable
        takeWord = takeWord.split(''); // convert string to array
        text = text.split(''); // convert string to array

        for (var i = 0; i < takeWord.length; i++) { // loop goes through elements in word
            findIndex = text.indexOf(takeWord[i]); // and get index from the text for each element

            if (result.indexOf(findIndex) > -1) { //condition for repeated indices
                result.push(text.indexOf(takeWord[i], ++findIndex));

            } else {
                result.push(findIndex);
            };

        };
        return result;
    };

    function getDecrypt(text, result) { // declare a function for decript array

        var decryptSymbol = ''; // assign a variable with string type

        for (var i = 0; i < result.length; i++) {

            if (result[i] == -1) { // condition for not determined letters
                decryptSymbol += 'X';

            } else {
                decryptSymbol += text[result[i]];
            };
        };
        return decryptSymbol;
    };

    console.log(getCrypt(text, takeWord));
    console.log(getDecrypt(text, result));
};
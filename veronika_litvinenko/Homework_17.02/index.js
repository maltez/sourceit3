    //Declare a function which looking for vowel letters and removes them
var getVowel = function() {
    var vowel = prompt('Enter your sentence'); // assign a variable for get letters

    function deleteVowel(str) { // declare a function which includes methods
        str = str.split('').filter(function(element) { //transform string to array when filter all elenents
            return 'aeiouy'.indexOf(element) < 0; //condition for remove vowels
        }).join(''); // transform array to string
        return str;
    };
    return deleteVowel(vowel);
};
// getVowel();
    // Find palindroms in array
var palindArray = ['anna', 'osyotr', 'madam', 'led'];

function getPalindrom(palindrom) { //Declare a function which looking for palindromes and returnes array with them
    return palindrom.filter(function(element) { //use filter method
        return element.spit('').reverse().join('') === element; //condition if reversed string === string it will pass condition
    });
};
// getPalindrom(palindArray);
    //extent a number
var extentNumber2 = function(a, b, func) { ////Declare a function with 3 arguments
    var sum = func(a, b); //assign the result of function to the variable
    return sum; // or we can use: return func(a,b);
};
extentNumber2(7, 2, function(a, b) { // call the function with parameters where the last one is callback
    return Math.pow(a, b); ////method raises a number to a extent number
});

    //sort strings in array from 2 to 4 symbols
var words = ['There', 'are', 'more', 'things', 'in', 'Heaven', 'and', 'Earth'];

function cutString(arr) { // Declare a function which sorts string from 2 to four symbols
    var result = [];

    arr.filter(function(element) {
        return typeof(element) === 'string' && element.length > 0; // condition for element type
    }).map(function(element) { //use map method
        if (element.length >= 2 && element.length <= 4) { // condition from 2 to 4
            return result.push(element); // if element pass the condition - push it in result variable
        };
    });
    return result;
};
// cutString(words);
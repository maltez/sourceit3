var arrEven = [3, 4, 9, 2, 7];  //create an array

function getEvenArray(newArr) { // declare a function which sorts array to even numbers
    var result = [];    // assign variable with empty array 

    for (var i = 0; i < newArr.length; i++) {   // run the loop for all elements in array
        if (newArr[i] % 2 == 0) {       // condition for even numbers
            result.push(newArr[i]);     // recording numbers in var result
        };
    };
    return result;
};

//declare a function which takes palindroms and return true or false
function isPalindrome() {
    var a = prompt('enter a palindrome'); // assigment a variable and ask a word

    function getPalindrom(arg) {
        var str = arg.split('').reverse().join(''); //Split a string into an array when overturn elements 
        return str === arg; //and stick together an array to a string on a blank line                     
    };
    return getPalindrom(a);
};

//

var arr = [2, 6, 5, 4, 9, 8]; //create an array

function getSum(arg) { //declare a function which summarizes the even numbers
    var result = []; // empty array for result

    for (var i = 0; i < arg.length; i++) { // run the loop for all elements in array
        if (arg[i] % 2 === 0) { // condition for even numbers
            result.push(arg[i]); // push all even numbers in var result
        };
    };

    return result.reduce(function(a, b) { // using reduse method to summurize all even numbers in var result
        return a + b;
    });
};

//

var arrSort = [22, 16, 267, 10, 30]; //assign the array variable

function GetBiggestNumber(arg) { // declare a function which finding the biggest number in array

    function compareNumbers(a, b) { // function with condition for correct sorting array
        if (a > b) return 1;
        if (a < b) return -1;
    };

    arg.sort(compareNumbers); // using method =>[10, 16, 22, 267]
    return arg[arg.length - 1] // take the last highest number
};

//

var katya = { // create an object
    age: 25,
    eyes: 'green',
    children: 2,
    fullName: 'Katerina',
    apartment: 3
};

function getString(obj) { //declare a function which deletes all the properties except strings

    for (key in obj) { // loop for object goes around the object
        if (typeof(obj[key]) !== 'string') { // condition, if the value not a string 
            delete obj[key]; // remove values that are not strings
        };
    };
    return obj;
};
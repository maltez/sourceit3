// It removes all the vowels
function task_1(){
var word = prompt('Enter the word');
var arrWord = word.split(''); 
var arrVowels = ['a','A','e','E','i','I','o','O','u','U','y','Y'];
var newWord =  arrWord.filter(function(elt){
        return arrVowels.indexOf(elt) < 0;
    }).join('');

console.log(newWord);
}

// It leaves only palindromes
function task_2(){
var arrWord = ['deed', 'nun','level', 'hello', 'lost'];
var newWord =  arrWord.filter(function(elt){
        return elt.split('').reverse().join('') === elt;
    });

console.log(newWord);
}

// Leaving only those elements in the array, where 2 or 3 characters
function task_3(){
var arrWord = ['can','the','a', 'an', 'top','button','peep', 'under', 'success'];
var newWord =  arrWord.filter(function(elt){
        return elt.length == 2 || elt.length == 3; 
    });

console.log(newWord);
}

// Raises a number in mathematics degree
function task_4(){
var number = +(prompt('Enter the number'));
var degree = +(prompt('Enter the degree'));

    function getDegree(number, degree){ 
    var arrNumbers = [];  
        for(var i = 0; i < degree; i++){
            arrNumbers.push(number);
        }

    return arrNumbers.reduce(function(previous, current){ 
            return previous * current;
        });
    }

console.log(getDegree(number, degree));
}

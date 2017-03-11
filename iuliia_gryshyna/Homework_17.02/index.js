//function that clear vowel letters from sentence

function consonants(){
    var str=prompt('Enter a sentence!');
    var arr=str.split('');
    var vowels=['a','A','e','E','i','I','o','O','u','U','y','Y'];//letters that need to be removed
    var consonantsStr=arr.filter(function(letter){
        return vowels.indexOf(letter)<0;}).join('');
console.log(consonantsStr);
};


//function that return only palindrome string

function isPalindrome(){
var arr=['level','racecar', 'window','eye','live'];
var palWord=arr.filter(function(elt){
    return elt.split('').reverse().join('') === elt;
});
console.log(palWord);
};

//function for sorting strings from needed range of letters
function lengthStr(){
    var str=['cruel','mind','diplomacy','bit','i'];
    var strLengths = str.filter(function(elt){
        return elt.length>=2 && elt.length<=4;//filter elements that is in condition
    });
    console.log(strLengths);
};


//function for exponentiation number

function power(){
var num=+prompt('Enter the number');
var pow=+prompt('Enter needed power');
var result=num;

    function getPow(num,pow){
        for (var i=1;i<pow;i++){
            result*=num;
        };
        return result;
    };
    console.log(getPow(num,pow));
};
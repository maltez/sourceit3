

/*Declaration function for remove vowel from array*/
function remove(){
	var word = prompt("Enter the word");
	var arr = word.split(''); //create array from enter word
	var arrVowel = ['a','e','i','o','u','y',' '];  //array of values that we need to remove

	function RemoveVowel(elt){     //callback function for find all elements which is not a vowel

		return arrVowel.indexOf(elt) < 0; 

	}
	var newArr = function(arr, func){
		return arr.filter(func).join(''); //create new array whithout vowels

	}

	console.log (newArr(arr, RemoveVowel));
}

/*Declaration function for find palindroms in array*/

function findPolindrom(){
	var arr = ['reifier', 'radiogaga','aibohphobia', 'mother'];

	function getPallindrom(elt){ //callback function make array from each of element, make it reverse and join to string
		return elt.split('').reverse().join('') === elt; //condition: if reverse element equal to element
	}

var newArr = function(arr, func){ //create new array only with palindrom
	return arr.filter(func);
}

console.log(newArr(arr, getPallindrom));
}

/*Declaration function for find elements in array which made of more than two letters and less then four letters*/
function SortStrings(){
	var arr = ['How','can','a','clam','cram','in','a','clean','cream','can'];

function Sort(elt){  //
	return elt.length>=2 && elt.length<=4; //callback function for find elements which the condition is true
}

var newArr = function(arr, func){
	return arr.filter(func);          //filter all of elements through callback function
}


console.log(newArr(arr, Sort));
}
/*Declaration function for find degree of number*/
function NumberDegree(){
var number = +(prompt('enter the number'));
		var degree = +(prompt('enter degree'));

function getDegree(mult,current){   // multiply each element of the array

return mult*current
}
var result = function(degree,number, func){ 
	var arr = [];  // create array of numbers
		for(var i = 0; i<degree; i++){
			arr.push(number);
		}

	return arr.reduce(func);         //get degree of number
}

console.log(result(degree,number,getDegree));
}
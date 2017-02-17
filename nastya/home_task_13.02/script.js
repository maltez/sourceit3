
/*Declaration function for merging two of arrays*/

function getNewArray(){
	var arr1 = [1,2,5,6,7,8];
var arr2 = [3,4];

var mergArray = function (a,b){
	var secondPart = a.slice(2); // get first part of array
	var firstPart = a.slice(0,2); // get second part of array
	var arr3 = firstPart.concat(b,secondPart); //cmarging two off arrays
 
   return arr3;
  


}
newArray = mergArray(arr1,arr2); //get new array

console.log(newArray);
}



/*Declaration function for get triangle with word "a"*/

function Triangle(){
	var getTriangle = function(){
	var word = "";       //variable "word" assignment
	return function(){
		return word+="a"; //return function that change variable "word" 
	}
}
var triangle = getTriangle() //assign the result of function call in variable

for (var j = 0; j<51; j++){
	console.log(triangle()); //call function 50 times
}


/*Declaration function for get secret code*/
function getCode(){

var secretText = "буря мглою небо кроет вихри снежные крутя то как зверь она завоет то заплачет как дитя"
var code = prompt("Enter the code"); //get word that need to get secret

var newArray = function(secretStr, str){
var secretArr = secretStr.split(''); //get array from text for code
var codeArr = str.split(''); //get array from code
var newArrayNumber = [];
var indexCode;

for (var i = 0; i < codeArr.length; i++) {   //loop for get array from index of secret text
	
		indexCode = secretStr.indexOf(codeArr[i]);
		if(newArrayNumber.indexOf(indexCode)>-1){       // check repeat letters    
			newArrayNumber.push(secretStr.indexOf(codeArr[i],++indexCode));
		}
		else{
			newArrayNumber.push(indexCode);
		}

}

return newArrayNumber;		
}
var secretCode = newArray(secretText,code)
console.log(secretCode);

/*function for get string from code*/

var strCode = function (secretStr,secretCode){
var secretArr = secretStr.split('');
var SecretString = "";
for (var i = 0; i < secretCode.length; i++) {
		if (secretCode[i] == -1){   //check empty letter
			SecretString += '*';
		}
		else{
			SecretString += secretStr[secretCode[i]]; //get string
		}
	
}

return SecretString;
}

console.log(strCode(secretText,secretCode));

}
}


/*declaration function for check phone number*/

function fun(){

	var phoneNumber = prompt ("enter the phone number");


var checkPhone = function(str){
var reg = /^((8|\+38)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/  //regExp for check phone number

if (str.search(reg)!=-1){ // output true If there is a coincidence whith regExp
	console.log(true)
}
else{
	console.log(false)
}
	
}
checkPhone(phoneNumber);

}



/*Declaration function for create object from enter string*/

function fun1() {
	var name = prompt("Enter your name, lastname and age")

	var firstName = name.match(/\w*\s/); //regExp for enter name
	var lastName = name.match(/\s\w*/); //regExp for enter last name
	var age = name.match(/[0-9]/g)      //regExp for enter age

 var User = function(a,b,c){
 	var userObject = {};
 	userObject.name = a[0]; //assignment variable of name to key name
 	userObject.lastName = b[0]; //assignment variable of last name to key last name
 	userObject.age = c[0]; //assignment variable of age to key age
 	return userObject;	
 }

console.log (User(firstName,lastName,age));
	
}

/*Declaration function for check e-mail*/
function fun2(){
	var email = prompt('enter your e-mail');

var checkEmail = function(email){
	var regExp = /\w+@[a-zA-Z_].[a-z A-Z]{2,6}/ig;// regexp for check e-mail
	return regExp.test(email);  //true if there is a coincidence whith regExp

}

	console.log(checkEmail(email));
}


/*Declaration function for sum all of numbers in enter string*/
function fun3(){
	var numbers = prompt('enter the numbers');


var sumNumbers = function(numbers){
var regExp = /\d/g;
var arrNumbers = numbers.match(regExp).map(function(elt){  //transformation array with string to array with numbers
	return +(elt);

});
var result = arrNumbers.reduce(function(sum,current){ //sum all of numbers in string
	return sum+current; 
},0);
return result;

}
console.log(sumNumbers(numbers));

}
/* Check enter numbes if it 16-hex number*/
function fun4(){
var number = prompt('enter the number in 16-hex');

var newNumber = function(str){
	var regExp = /[G-Z]/g; //regExp for check 16-hex number
	var result;

	if(!regExp.test(str)){
console.log(parseInt(str,16)); // transformation to 10-hex number
	
	}
else{
	console.log('no 16-hex number ')
}
}
newNumber(number);
}

//ask user enter phone number
var phone = prompt("Enter your Phone Number, please");

//allow numbers, -, (), spaces
var reg = /^[\d\(\)-\s]{4,17}$/;

//check the phone number
if(reg.test(phone)){
	console.log(true);
} else{
	console.log(false);
}




//ask user enter email
var email = prompt("Enter your email, please");

//allow words, -, dot, @
var reg = /^[\w-\.]*@[\w-]+\.[\w]*$/i;

//check the email
if(reg.test(email)){
	console.log(true);
} else{
	console.log(false);
}




var value = prompt("Enter the value");

//allow numbers and letters a-f
var reg = /^[\d\a-f]*$/i;

//check the value
if(reg.test(value)){
	var result = parseInt(value, 16);
	console.log(result);
} else{
	console.log(false);
}
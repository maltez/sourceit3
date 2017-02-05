//declare variables for prompt
var name = "Jesus";
var age = "33";

//ask about user's name
confirm("What is your name?");

//ask user to enter his name
if(prompt("Name:") == name){
	//if answer is right
	alert("Ok! Go on!");
} else
	//if answer is wrong
	alert("It's wrong!")


//ask about user's age
confirm("How old are you?");

//ask user to enter his age
if(prompt("Age:") == age){
	//if answer is right
	alert("Welcome!");
} else
	//if answer is wrong
	alert("It's wrong!")
//ask about user's name
var person = prompt("Hi! What is your name?");

//ask about user's gender
if(confirm("Are you man?")) { 
	//hello to man
	console.log("Hello, Mr. " + person + "!"); 
} else
	//hello to woman
	console.log("Hello, Mrs. " + person + "!");


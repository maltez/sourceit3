//declare variable for prompt
var person;
	
//first window
if(confirm("Hi! What is your name?")) {  
	//ask about user's name
	person = prompt("Name:"); 
} 

//ask about user's gender
if(confirm("Are you man?")) { 
	//hello to man
	alert("Hello, Mr. " + person + "!"); 
} else
	//hello to woman
	alert("Hello, Mrs. " + person + "!");
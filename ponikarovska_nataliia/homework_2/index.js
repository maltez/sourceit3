//declare function hello
function hello(){
	
	//declare variables 
	var a;
	var b = "Hello!";

	//ask user to enter the number
	a = prompt("Enter the number from 1 to 100, please");

	//if the number < 100
	if(Number(a) < 101){
		
		//cycle repeats = var "a"
		for(i = 0; i < Number(a); i++){
			
			//show result
			console.log(b);
		}

	} else 
		//if the number > 100
		alert("It's not correct");
}



//declare function yourName
function yourName(){

	//ask user's name
	switch (prompt("What's your name?")){
		//if user's name is "Lena" - answer is "Hi!"
		case "Lena": console.log("Hi!"); break;
		//if user's name is "Nataly" - answer is "Hello!"
		case "Nataly": console.log("Hello!"); break;
		//if user's name is "Masha" - answer is "How do you do?"
		case "Masha": console.log("How do you do?"); break;
		//if user's name is "Irene" - answer is "How are you?"
		case "Irene": console.log("How are you?"); break;
		
		//for different user's names - answer is "Good afternoon!"
		default: console.log("Good afternoon!");
	}
}



//declare function calc
function calc(){

	//declare variables "a", "b"
	var a;
	var b = 0;

	//cycle "for" repeats 5
	for(i = 0; i < 5; i++){

		//ask user to enter the number
		a = prompt("Enter the number, please");

		//sum up "a" and "b". cast var "a" to numeric type
		b = b + Number(a);
	}
	//divisible sum "b" by 5
	var result = b / 5;

	//show result
	console.log("Result is " + result);
}



//declare function even
function even(){
	
	//declare variable
	var a;

	//ask user to enter an even number
	a = prompt("Enter en even number, please");

	//check the number
	if(Number(a) % 2 == 0){

		//show only even numbers
		for(i = 0; i <= a; i++){
			if(i % 2) continue;
			console.log(i);
		}

	//if the number is odd
	} else
		console.log("It's not correct")
}

/* Declaration getOddNumbers function*/
function getOddNumbers(){
	for (var i=0; i<15; i++){   //loop from 0 to 15
		if(i%2 != 0){			// conditional statement for checking odd number	
			console.log(i)
		}
	}
}


/* Declaration function for serarch sum of numbers*/

function getSum(){

var a = +(prompt("input a")); //getting variable a 
var b = +(prompt("input b")); //getting variable b
fun2(a,b);		// call function fun2 with a and b parametrs

function fun2 (){
var c = a+b;		//assign variable с sum of parametrs
console.log (c);

}
}

/*Declaration function for checking enter name*/

function sayName(){

var name = prompt("What is your name?"); //gettin variable name
switch(name){							// check all conditions	
	case "Лена": alert("Hello "+name);
	 break;								//stop check if contitions is true
	case "Марина": alert("Hi "+name);
	 break;
	case "Женя": alert("yohoo "+name);
	 break;

	default: alert("I don't know who you are"); // if all cases was false 
}

}

/*Declaration function for checking two conditions*/
function access(){
	var gender = confirm("Are you man?"); //assigment gender  variable  
	var name = prompt("What is your name?") //assigment name variable 

	/*checking conditions*/
	if(gender == true && name == "Vissarion" || gender == false && name == "Nickol"){
			alert("Access is allowed")
	}
	else {
		alert("Access denided");
	}
};


/*Declaration function for getting average */
function getAverage (){
	/*assigment variable*/
	var i = 0;
	var result = 0;
	var average;
/* loop for enter 5 numbers*/
	while(i<5){
		var a = +(prompt("enter the number"));
		i++; 
		result = result+a; //sum all of numbers and assigning a value to a variable

	}

	getResult(result); //call function with result parametr 
function getResult(result){
average = result/5;     //find avarage and assigning a value to a variable 
console.log(average);
}


};

/*Declaration function for getting row of numbers to the enter number */
function getRow(){
	var number = +(prompt("enter the number")); //assigment variable

	getRowNumber(number); //call function with number parametr 
	function getRowNumber(number){
		for (var i = 0; i<number; i++){ // loop for output row of nubers to the number parametr
			console.log(i)
		}
	} 
};

/*Declaration function for getting triangle of the word "Hello"*/
function getTriangle(){
	var number = +(prompt("enter the number<100")); //assigment variable
	var word = "";
	if(number<100){								//checkin the condition of enter number<100
		getTriangleWords(number); //if cindition is true call function with number parametr
	}
	else{
		alert("You have to enter the number < 100")
	

	}

	function getTriangleWords(number){
	for (var i = 0; i<number; i++){
		word = word + "Hello"; //concatenation "Hello" and assigning a value to a variable
			
		document.write(word + "<br>"); //output variable word for each iteration
		
	}	
	
	}
	

}
/*Declaration function for getting row of prime number*/
function getPrimeNumber (){
	var number = +(prompt("Enter the number")); //assigment variable
for (var i=2; i<number; i++){  //first loop for gettig row of numbers to the enter number 
    for(var j=2; j<i; j++){    //second loop for getting row numbers less numbers from first loop
        if (i%j == 0) break; // stop second loop and exit if modils equal 0
    }
    if(j==i) console.log(i); // if last number in second loop equal number from first loop number is prime
}



}

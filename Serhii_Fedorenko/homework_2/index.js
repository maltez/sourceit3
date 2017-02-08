// considers the arithmetic average of five numbers
function task_1(){
var i = 0, sum = 0, number = 0;
    while(i < 5){
        number = (prompt("Enter the number")); // take 5 numbers
        i++; 
        sum += Number(number); // sum 5 numbers
    }
    function average(){
        var result = sum / 5; // average
        return result;
    }

    console.log(average(sum));
}

// print all even numbers
function task_2(){
var number = prompt('Enter the number'); 
    function even(){
        do {
            if (number % 2 === 0){  // even parity
                console.log(number);
            }
         number--;
        } while(number > 0);
    }
even(number);
}

// print many greetings
function task_3(){
var number = prompt('Enter the number < 100');
number = Number(number);
    if(number < 100 && typeof(number) == 'number'){ 							
        console.log(words(number)); 
    } else {
        alert("You entered more than 100 or 0")
    }
    function words(){   // concatenation "Hello"
        var word = 'Hello';
        while(number > 0){
            word += ' Hello';
            number--;
        }
    return word;
    }
}

// prints all the prime numbers up to inputted number
function task_4(){
var number = prompt('Enter the number');
    if(number <= 3){    // checks on the minimum acceptable
        alert("You have entered less than 3");
    } else {
        prime(number);
    }
        function prime(number){ 
            for (var primeNumber = 2; primeNumber < number; primeNumber++){ // cycle through all of the entered
                for(var i = 2; i < primeNumber; i++){   
                    if (primeNumber % i == 0) break; // divided by all possible dividers
                }
        if(primeNumber == i){   // check for conditions
            console.log(primeNumber); 
        } 
            }
        }
}

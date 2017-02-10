// task with name and age

function setAge(){
    var gender = confirm('Are you man?');   //assigment variables
    var age = +prompt('Enter your age');
    if (age >= 30 && gender === true) {     //condition for man
        alert("What's up " + 'Vasya');
    } else if (age <= 17 && gender === false) {     // condition for woman
        alert('Hi, young lady ' + 'Lily');
    } else {
        alert('Hey!');    // for another person
    };
};


// declare a function which concatenates value of variables a and b
function setConc() {
    var a = 'foo';      //assigment variables
    var b = 'bar';

    getConc(a, b);

    function getConc() {
        var c = a + b; // invite in var c values a and b 
        alert(c);
    };
};



// declare a function which gets name and returns greetings
function setName() {
    var name = prompt('Enter your name'); //assigment variable
    // conditions for different names
    switch (name) {
        case 'Лена':
            alert('Привет, Лена!');
            break;
        case 'Алина':
            alert('Привет, Алина!');
            break;
        case 'Ира':
            alert('Здравствуйте, Ирина')
        default:
            alert('Добрый вечер!');
    };
};


// declare a function which receives 5 numbers and returns the average
function setNumber() {
    var i = 0;
    var sum = 0; //assigment variables
    var average;
    // loop to bring PROMT 5 times
    while (i < 5) {
        var asker = +prompt('Enter numbers');
        i++;
        sum = sum + asker; //summarize all numbers and assign the value to a variable
    };
    getAverage(sum); // call the function with average value
    function getAverage(sum) {
        average = sum / 5; // get average and assign to the variable
    };

    return average; // return the value of the average variable
};



// declare a function which provides a sequence of even numbers
function getEvenNumbers() {
    var number = +prompt('Enter the number'); //assigment variable
    // loop for output all even numbers
    for (var i = 0; i <= number; i++) {
        if (i % 2 === 0) { // condition for even numbers
            console.log(i); // showing the result
        };
    };
};



// declare the function which takes a number and issues strings
function setHello() {

    // assigment variables

    var hello = 'Hello';
    var i = 1;
    var num = +prompt('Enter number');

    // condition for determine the type and number

    if (typeof(num) === 'number' && num <= 100) {
        getHello(num); // if the condition is correctly call getHello(num);
    } else {
        alert('Try another one');
    };

    function getHello(num) {
        while (i < num) {
            hello += ' Hello' // string concatenation
            i++;
        };
    };
    return hello; // return the result (concatenation)
};


// declare the function which outputs prime numbers
function setPrimeNumber() {
    var a = +prompt('Enter the number'); // assigment variable
    // condition not less than 3
    if (a < 3) {
        alert('Enter another one');
    } else {
        getPrimeNumber(a);
    };

    function getPrimeNumber(a) {
        for (var i = 2; i < a; i++) { // first loop gets a row of numbers
            for (var j = 2; j < i; j++) { // second loop has condition which separates nubbers by the result of division
                if (i % j == 0) break; // stop and exit from loop if condition equal 0
            };
            if (j == i) { // if numbers in loops are same, these are prime numbers
                console.log(i);
            };
        };
    };
};

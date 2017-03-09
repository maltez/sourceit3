//Task where we need to check an email

var str = 'nick@gmail.com'; //assign a variable

function checkEmail(email) {    // declare a function
    // regular expression for email types
    var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g; 
    // if condition is true - displays 'valid email' otherwise 'wrong' 
    return reg.test(email) ? alert('Valid email') : alert('Wrong email');
};
//checkEmail(str);

//Task where we need to check a phone number

var telephone = '+38(077)4567890'; //assign a variable

function checkTelephone(tel) {      // declare a function
    var regex = /\+\d{2}\(\d{3}\)\d{7}/g; // regular expression to check phone number
    
    return regex.test(tel);   // return true or false
};

//checkTelephone(telephone);

//Task. Check a hex and convert it in demical system

var hex = prompt('Enter a hex');    //assign a variable

function hexToDec(arg) {        // declare a function
    var regex = /^[0-9A-Fa-f]+$/;   // regular expression to check a hex
    // if value pass the condition, convert it in demical system
    return regex.test(arg) ? parseInt(arg, 16) : alert("This number isn't hex");
};
//hexToDec(hex);

//Task. Summarize all values in a string

var nums = '56879543';  //assign a variable

function getSum(num) {       // declare a function
    num = num.split('').reduce(function(prevValue, currentValue) {  //split on array, when use reduce to get a sum
        
        return parseInt(prevValue) + parseInt(currentValue);    //convert the string to a number and summarize values
    });
    
    return num;
};
//getSum(nums);

// Task. Get name, age and lastname in object

function personInfo() {
    var person = {};    //created an object

    var name = prompt('Enter your name');   // assign name, age and lastname to variables
    var lastName = prompt('Enter your lastname');
    var age = prompt('Enter your age');

    var regexpName = /^([A-Z][a-z]+)/g;     // regular expression for check the spelling
    var regexpLastName = /^([A-Z][a-z]+)/g;
    var regexpAge = /\d{2}/g;

    // check the info by 'test'.If the condition is true - assign propertys to the object, otherwise it will display an error
    regexpName.test(name) ? person.name = name.replace(regexpName, name) 
                          : alert('Wrong name');

    regexpLastName.test(lastName) ? person.lastname = lastName.replace(regexpLastName, lastName) 
                                  : alert('Wrong lastname');

    regexpAge.test(age) ? person.age = age.replace(regexpAge, age) 
                        : alert('Wrong age');

    return person;  
};
//personInfo();
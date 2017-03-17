// Verification of phone number
function task_1(){
var phoneNumber = prompt ("Enter the phone number");

    function isValidPhone(phoneNumber) { 
       return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phoneNumber); 
    } 

console.log(isValidPhone(phoneNumber));
}

// String to object
function task_2(){
var person = prompt("Enter your name, lastname and age");

    function obj_person(person){
        var obj = {};
        obj.firstName = person.match(/\w*\s/).join();
        obj.lastName = person.match(/\s\w*/).join();
        obj.age = person.match(/\d/g).join('');
        return obj;
    }

console.log(obj_person(person));
}

// Verification of e-mail
function task_3(){
var email = prompt('Enter your e-mail');
    function checkEmail(email){
        return /.+@.+\..+/i.test(email) ? console.log('Valid email') : console.log('Not valid');
    }
    
checkEmail(email);
}

// Sum of entered numbers
function task_4(){
var nums = prompt('Enter the numbers');  
var regExp = /\d/g;
    function getSum(num){       
        return num
        .match(regExp)
        .map(function(elt){ 
            return +(elt);
        })
        .reduce(function(sum, current) {
            return sum + current;
        }, 0);
    }
    
 console.log(getSum(nums));
}

// Check or conversion 16-hex in decimal
function task_5(){
var number = prompt('Enter the number in 16-hex');

    function checkNumber(num){
        var regExp = /[g-zG-Z]/g; 

        if(!regExp.test(num)){
            console.log(parseInt(num, 16));
        } else {
            console.log('no 16-hex number ');
        }
    }
    
checkNumber(number);
}

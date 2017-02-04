// Task, which we was doing at class 3.02

var name;
var age;
name = prompt('Enter your name');
age = +prompt('Enter your age');
if (name === 'Jesus' && age === 33) {
    console.log('Welcome, Jesus!');
} else {
    console.log('Access denied');
};

// Home task 3.02

var name;
var gender;
name = prompt('Enter your name');
gender = prompt('Enter your gender');
if (gender === 'female') {
    console.log('Hello,' + ' ' + 'Mrs' + ' ' + name + '!');
} else if (gender === 'male') {
    console.log('Hello,' + ' ' + 'Mr' + ' ' + name + '!');
} else {
    console.log('Please, enter valid information');
};
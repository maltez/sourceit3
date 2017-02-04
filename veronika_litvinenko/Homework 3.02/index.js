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

var name = prompt('Enter your name');
var gender = confirm('Are you male?');
if (gender === false) {
    console.log('Hello,' + ' ' + 'Mrs' + ' ' + name + '!');
} else {
    console.log('Hello,' + ' ' + 'Mr' + ' ' + name + '!');
};
// Task, which we was doing at class 3.02

function jesus(){
	var name;	//assign variables
	var age;

	name = prompt('Enter your name');	// use prompt to get a name
	age = +prompt('Enter your age');	// use prompt to get an age

	if (name === 'Jesus' && age === 33) {  // conditions for name and age
	    alert('Welcome, Jesus!');	// if the conditions are correctly
	} else {
	    alert('Access denied'); 
	};
};

// Home task 3.02
function greeting(){
	var name = prompt('Enter your name');	//assign variables
	var gender = confirm('Are you male?');
	if (gender === false) {		// condition for female
	    alert('Hello,' + ' ' + 'Mrs' + ' ' + name + '!');	
	} else {		// condition for man
	    alert('Hello,' + ' ' + 'Mr' + ' ' + name + '!');
	};
};
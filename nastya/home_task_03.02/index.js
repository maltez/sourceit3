
/* Declaration
    function Greeting onclick button event*/
function Greeting(){

	var name = prompt('Hi! What is your name?'); //  name variable assignment
	var person = confirm('Are you man?');        // person variable assignment
	var status; // status variable declaration


/*Check to see if person man or woman*/

	if (person == true){
		alert('Hi, Mr '+name + '!');
	}

	else{
		status = confirm('Are you married?'); //status variable assignment

		/*Check to see if status married or not*/

		if (status == true){
			alert('Hi, Mrs '+ name +'!');
		}
		else{
			alert('Hi, Miss ' + name + '!');
		}
	}

}
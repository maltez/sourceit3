  var name = prompt('Как Вас зовут?',''); //request users name
  var gender = confirm('Вы мужчина?'); 	//users gender
  	if(gender===true ) {					//record answers on console
  		console.log('Greetings' +' '  + 'Mr.'  + name); }
  	else {
  		console.log('Greetings' +' '  + 'Ms.'+ name);
  	} 

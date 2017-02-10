var sum=0, number, avarege;	//before calculations
	function question() { 	//ask user number and adds them
		for (i = 0; i < 5; i++ ) {
		number= +prompt('White your number');
		sum= sum+number;
	} 
	function avarege() { 		//calculates average for user
		var avarege = sum / 5;
		return avarege;
	}
		console.log(avarege(avarege)); 	//write resualt to the console 
}

	function selection () { 	//select only even number
		var number = +prompt('Write number');
		while(number>0) {
			if(number %2 === 0){
				console.log(number); }
			number--;
		}
	}	
	function greetings() {   //ask number
		var number = +prompt('Добрый день,введите число,которое <100');
			if (number >=100) {       
				alert('Please number<100'); }			
			else if (number<100 && typeof(number)== 'number')
				console.log(hello(number));
		 function hello(){    //add greetings with number
        	var greetings = 'Hello';
        	while(number > 0){
            	greetings += 'Hello' + number + '\n'; 
            	number--;
        }
    		return greetings;
    }
		}
	
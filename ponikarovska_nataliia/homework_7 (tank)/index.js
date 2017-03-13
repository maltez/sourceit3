//create the function
function Tank(fuel, shell){
	
	//tank's description
	this.name = "Tiger";
   	this.arms = "Turret";
   	this.move = "Fuel";
   	this.crewmember_1 = "Driver";
   	this.crewmember_2 = "Gunner";
   	this.crewmember_3 = "Assistant";
   	this.fuel = 0;
	this.shell = 0;

	//create the method of refuel 
	var refuelTank = function(fuel, shell){
		return this.fuel, this.shell;
	}

	//create the method of fuel consumption
	this.moveTank = function(fuel){
		
		var m = fuel;

		if(m > 0){
			for(i = 0; i < m; i++){
			console.log(i);
		}} else{
			alert("The fuel rans out!")
		}
		
		return m;
	}

	//create the method of shell consumption
	this.fireTank = function(shell){
		
		var f = shell;

		if(f > 0){
			for(i = 0; i < f; i++){
			console.log(i);
		}} else {
			alert("There're no shells!");
		}
		
		return f;
	}
}

//function invocation
var fullTank = new Tank();

//refuel shells and fuel
fullTank.fuel = 3;
fullTank.shell = 4;
console.log(fullTank);
function Tank(fuel,cartriges){
	this.quantityFuel = fuel;
	document.getElementById('Fuel-balance').value = this.quantityFuel;
	this.quantityCartriges = cartriges;
	document.getElementById('Cartrige-balance').value = this.quantityCartriges;
	this.move = function (){
		if(this.quantityFuel ==0){
			alert("Tank is not move");
		}
		else{

			this.quantityFuel = this.quantityFuel - 1;
			
		}
	 
	}

	this.fire = function (){
	if(this.quantityCartriges ==0){
			alert("There are no cartriges");
		}
		else{
			this.quantityCartriges = this.quantityCartriges - 1;
		}
	} 
	this.refill = function (fuel,cartriges){
	this.quantityFuel = this.quantityFuel+fuel;
	this.quantityCartriges = this.quantityCartriges+cartriges;
}

}


var battleTank = new Tank(5,5);

document.getElementById('move').onclick = function(){
	battleTank.move();
return document.getElementById('Fuel-balance').value = battleTank.quantityFuel;
}
document.getElementById('fire').onclick = function(){
	battleTank.fire();
return document.getElementById('Cartrige-balance').value = battleTank.quantityCartriges;
}


document.getElementById('refill').onclick = function(){
	var fuel = +(document.getElementById('Fuel-refill').value);
var cartriges = +(document.getElementById('Cartrige-refill').value);
	
	battleTank.refill(fuel,cartriges);
	return [document.getElementById('Fuel-balance').value = battleTank.quantityFuel,
	 document.getElementById('Cartrige-balance').value = battleTank.quantityCartriges];
	

}

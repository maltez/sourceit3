/* Declaration Function constructor*/

function Tank(fuel, cartriges) {
	this.quantityFuel = fuel;
	this.fuelConsumption = 1;
	this.cartrigesConsumption = 1;
	this.quantityCartriges = cartriges;

}

/*Write the object's methods to the object's prototype*/
Tank.prototype.move = function () {
	if (this.quantityFuel == 0) {
		alert("The Tank does not move");
	} else {
		this.quantityFuel = this.quantityFuel - this.fuelConsumption;
	}

}

Tank.prototype.fire = function () {
	if (this.quantityCartriges == 0) {
		alert("There are no cartriges");
	} else {
		this.quantityCartriges = this.quantityCartriges - this.cartrigesConsumption;
	}
}

Tank.prototype.refill = function (fuel, cartriges) {
	this.quantityFuel = this.quantityFuel + fuel;
	this.quantityCartriges = this.quantityCartriges + cartriges;
}
/* Declaration Function constructor for new Tank,
which inherits the properties and methods of the tank object */

function FiveBattleTank(fuel, cartriges) {
	Tank.apply(this, arguments);
	this.fuelConsumption = 2;
	this.cartrigesConsumption = 5;
}

/*Inherits methods from Tank prototype to the FiveButtleTank prototype */


FiveBattleTank.prototype = Object.create(Tank.prototype);
FiveBattleTank.prototype.constructor = FiveBattleTank;


	var arrTanks = []; //array of tanks on playground

/* Declaration Function constructor*/
function Playground() {
	this.quantityTanks = 4;
}
/*Write the object's methods to the object's prototype*/
Playground.prototype.addTanks = function () {
	if (arrTanks.length < 4) {
		arrTanks.push(new FiveBattleTank(8, 10));
		
	} else {
		throw new Error("You should put on playground no more than 4 tanks");

	}


}


var battleTank = new Tank(5, 5);
battleTank.move();
console.log(battleTank.quantityFuel);
battleTank.fire();
console.log(battleTank.quantityCartriges);
battleTank.refill(2, 2);
console.log([battleTank.quantityFuel, battleTank.quantityCartriges]);

var fiveBattleTank = new FiveBattleTank(8, 10);
fiveBattleTank.move();
console.log(fiveBattleTank.quantityFuel);
fiveBattleTank.fire();
console.log(fiveBattleTank.quantityCartriges);


var playground = new Playground();
playground.addTanks();
playground.addTanks();
playground.addTanks();
playground.addTanks();
console.log(arrTanks);
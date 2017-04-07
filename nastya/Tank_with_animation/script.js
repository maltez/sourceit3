/* Declaration Function constructor*/

class Tank {

	constructor(fuel, cartriges) {
			this.quantityFuel = fuel;
			document.getElementById('fuel-balance').value = this.quantityFuel;
			this.fuelConsumption = 1;
			this.cartrigesConsumption = 1;
			this.quantityCartriges = cartriges;
			document.getElementById('cartrige-balance').value = this.quantityCartriges;
			this.tankObj = document.getElementById('tank');
			this.crew = 4;
		}
		/*Write the object's methods to the object's prototype*/
	move(keyCode) {
		let CurrentPos = window.getComputedStyle(this.tankObj); // determine the current position of tank;
		this.left = parseInt(CurrentPos.left);
		this.top = parseInt(CurrentPos.top);


		if (this.quantityFuel == 0) {
			alert("The Tank does not move");
		} else {
			this.quantityFuel = this.quantityFuel - this.fuelConsumption;
			switch (keyCode) {
				case 37: // left
					if (this.left > 0)
						this.tankObj.style.left = this.left - 20 + 'px';


					break;
				case 38: // up
					if (this.top > 0)
						this.tankObj.style.top = this.top - 20 + 'px';
					break;
				case 39: // right

					if (this.left < 500)
						this.tankObj.style.left = this.left + 20 + 'px';
					break;
				case 40: // down
					if (this.top < 500)
						this.tankObj.style.top = this.top + 20 + 'px';
					break;
			}

		}

	}


	/*fire method*/
	fire() {
		let self = this;
		if (this.quantityCartriges == 0) {
			alert("There are no cartriges");
		} else {
			this.quantityCartriges = this.quantityCartriges - this.cartrigesConsumption;

			this.tankObj.style.backgroundColor = 'red'; //change background on space click
			var backgroundFire = function () {
				self.tankObj.style.backgroundColor = "#eeeeee"
			}
			setTimeout(backgroundFire, 50); // change background back through time

		}
	}
	refill(fuel, cartriges) {
		this.quantityFuel = this.quantityFuel + fuel;
		this.quantityCartriges = this.quantityCartriges + cartriges;
	}
}

/* Declaration Function constructor for new FiveButtleTank,
which inherits the properties and methods of the Tank object */
class FiveBattleTank extends Tank {
	constructor(fuel, cartriges) {
		super(fuel, cartriges);
		this.fuelConsumption = 2;
		this.cartrigesConsumption = 5;
	}

}
// extends new class of class Tank
class Enemy extends Tank {
	constructor(fuel, cartriges, id) {
		super(fuel, cartriges);
		this.id = 'enemy' + id;
	}

	move() {
		this.enemyObj = document.getElementById(this.id);
		let self = this;
		var CurrentPos = window.getComputedStyle(self.enemyObj);
		if (this.quantityCartriges == 0) {
			alert("There are no cartriges");
		}
		
	}

}


/* Declaration Function constructor*/
class Playground {
	constructor() {
			this.arrTanks = []; //array of tanks on playground
		}
		/*Write the object's methods to the object's prototype*/
	addTanks(newTank) {
		if (this.arrTanks.length < 3) {
			this.arrTanks.push(newTank);
			let parentNode = document.getElementById('playground')
			let tankFigure = document.createElement("div");
			parentNode.appendChild(tankFigure);
			tankFigure.className = 'enemy';
			tankFigure.id = newTank.id;
			tankFigure.style.top = Math.floor(Math.random() * 500) + 'px';
			tankFigure.style.left = Math.floor(Math.random() * 500) + 'px';

		} else {
			throw new Error("You should put on playground no more than 4 tanks");

		}
	}
}


let battleTank = new Tank(250, 250);
/*declaration function for control tank*/
let moveTankOnKey = function (e) {
	switch (e.keyCode) {
		case 32: // space key

			battleTank.fire();

			break;
		case 37: // left key
			battleTank.move(e.keyCode);

			break;
		case 38: // up key
			battleTank.move(e.keyCode);
			break;
		case 39: // right key
			battleTank.move(e.keyCode);

			break;
		case 40: // down key
			battleTank.move(e.keyCode);
			break;

	}
};

/*declaration function for statistic*/
let statOnKey = function () {
	return [document.getElementById('fuel-balance').value = battleTank.quantityFuel,
		document.getElementById('cartrige-balance').value = battleTank.quantityCartriges
	]
}

/*Assign event handlers*/
window.addEventListener('keydown', moveTankOnKey);
window.addEventListener('keydown', statOnKey);

refill.onclick = function () {

	// call method 'refill'
	battleTank.refill(10, 10);
	return [document.getElementById('fuel-balance').value = battleTank.quantityFuel,
		document.getElementById('cartrige-balance').value = battleTank.quantityCartriges
	];
}
let playground = new Playground();
let i = 0;
document.getElementById('Enemy').onclick = function () {
	let enemy = new Enemy(25, 25, i++);
	playground.addTanks(enemy);
	enemy.move();
	
}
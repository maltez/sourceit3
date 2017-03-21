/* Declaration Function constructor*/

function Tank(fuel, cartriges) {
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
Tank.prototype.move = function (keyCode) {
  var CurrentPos = window.getComputedStyle(this.tankObj); // determine the current position of tank;
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
Tank.prototype.fire = function () {
  var self = this;
  if (this.quantityCartriges == 0) {
    alert("There are no cartriges");
  } else {
    this.quantityCartriges = this.quantityCartriges - this.cartrigesConsumption;

    this.tankObj.style.backgroundColor = 'red'; //change background on space click
    var bg = function () {
      self.tankObj.style.backgroundColor = "#eeeeee"
    }
    setTimeout(bg, 50); // change background back through time

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


/* Declaration Function constructor*/
function Playground() {
  this.arrTanks = []; //array of tanks on playground

}
/*Write the object's methods to the object's prototype*/
Playground.prototype.addTanks = function (newTank) {
  if (this.arrTanks.length < 4) {
    this.arrTanks.push(newTank);

  } else {
    throw new Error("You should put on playground no more than 4 tanks");

  }


}


var battleTank = new Tank(25, 25);
/*declaration function for control tank*/
var moveTankOnKey = function (e) {
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
var statOnKey = function () {
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

var playground = new Playground();
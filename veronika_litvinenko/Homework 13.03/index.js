//Declaration function constructor for a common tank
function Tank(ammo, fuel) {

    this.engine = 'engine';
    this.fuelTank = fuel;
    this.crew = 5;
    this.tower = 1;
    this.ammo = ammo;

    this.fuelConsumption = 1;
    this.ammoConsumption = 1;

};

// Create constructor's methods. Use 'prototype' for inheritance.

Tank.prototype.refill = function(fuel, ammo) {

    this.ammo += ammo;
    this.fuelTank += fuel;

    console.log(this.ammo, this.fuelTank);

};

Tank.prototype.fire = function() {

    if (this.ammo > 0) {

        this.ammo = this.ammo - this.ammoConsumption;

        console.log(this.ammo);

    } else {

        alert('Out of ammo');

    };
};

Tank.prototype.move = function() {

    if (this.fuelTank < 1) {

        alert('The fuel ran out');

    } else {

        this.fuelTank = this.fuelTank - this.fuelConsumption;

        console.log(this.fuelTank);

    };
};

//Declaration function constructor for 5 towers tank.

function Tank5Towers(ammo, fuel) {

    Tank.call(this, ammo, fuel);    // heritage parameters and 'this'
    this.tower = 5;

    this.fuelConsumption = 5;
    this.ammoConsumption = 5;

};

// Heritage methods from Tank to Tank5Towers

Tank5Towers.prototype = Object.create(Tank.prototype);
Tank5Towers.prototype.constructor = Tank;


function Battlefield(){

    this.numberTanks = [];

};

//Declaration function constructor for tanks field

Battlefield.prototype.addTanks = function( tank ){

    if( this.numberTanks.length < 4){

        this.numberTanks.push(tank);

        console.log(this.numberTanks);

    }else{

        alert('There is no more place for another tank');
    };
};

// instance 

var tank1 = new Tank(5, 5);
tank1.move();
tank1.fire();
tank1.refill(10, 10);

var tank2 = new Tank5Towers(10, 10);
tank2.move();
tank2.fire();
tank2.refill(20, 20);

var field1 = new Battlefield();
field1.addTanks(tank1);
field1.addTanks(tank2);
field1.addTanks(tank1);
field1.addTanks(tank2);


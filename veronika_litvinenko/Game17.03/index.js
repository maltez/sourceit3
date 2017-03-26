var tank = document.getElementById("tank");
var actualFuel = document.getElementById("fuel");
var actualCartridges = document.getElementById("ammo");
var positionX = 0;
var positionY = 0;
var slide = 5;

var tank1 = new Tank(10, 50);
var field1 = new Battlefield(tank1);

actualFuel.innerText = tank1.fuelTank;
actualCartridges.innerText = tank1.ammo;

window.onkeydown = function(event) {

    if (event.key == ' ') { // ' ' - fire button

        if (tank1.ammo > 0) {

            tank1.fire(); 

            // Change background to red and return the previous background

            changeImage('url("images/fire.jpg")', 'url("images/tnk.jpg")');
        };
    };

    if (event.key == 'ArrowRight') { // Right arrow

        if (positionX < 85) {

            if (tank1.fuelTank > 0) {

                tank1.move();

                positionX = positionX + slide;
                tank.style.marginLeft = positionX + "%";
                tank.style.transition = 0.2 + 's';

            };
        };

    };

    if (event.key == 'ArrowLeft') { // Left arrow

        if (positionX > 3) {

            if (tank1.fuelTank > 0) {

                tank1.move();

                positionX = positionX - slide;
                tank.style.marginLeft = positionX + "%";

            };
        };

    };

    if (event.key == 'ArrowDown') { // Down arrow

        if (positionY < 50) {

            if (tank1.fuelTank > 0) {

                tank1.move();

                positionY = positionY + slide;
                tank.style.marginTop = positionY + "%";

            };
        };
    };

    if (event.key == 'ArrowUp') { // Up arrow

        if (positionY > 3) {

            if (tank1.fuelTank > 0) {

                tank1.move();

                positionY = positionY - slide;
                tank.style.marginTop = positionY + "%";

            };
        };
    };

    if (event.key == 'r') { // "r" key

        tank1.refill(100, 10);

    };

};

//Declare a function to change img 

function changeImage(img1, img2) {

    tank.style.backgroundImage = img1;

    setTimeout(function() {

        tank.style.backgroundImage = img2;

    }, 100);
};

// Function constructor

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

    if (this.ammo < 10 && this.fuelTank < 10) {

        this.ammo += ammo;
        this.fuelTank += fuel;

    } else {

        alert('Tank is full');
    };

    console.log(this.ammo, this.fuelTank);

};

Tank.prototype.fire = function() {

    if (this.ammo < 1) {

        alert('Out of ammo');

    } else {

        this.ammo = this.ammo - this.ammoConsumption;

        console.log(this.ammo);

    };

    actualCartridges.innerText = this.ammo;
};

Tank.prototype.move = function() {

    if (this.fuelTank < 1) {

        alert('The fuel ran out');

    } else {

        this.fuelTank = this.fuelTank - this.fuelConsumption;

        console.log(this.fuelTank);
    };

    actualFuel.innerText = this.fuelTank;
};

// Declaration function constructor for 5 towers tank.

function Tank5Towers(ammo, fuel) {

    Tank.call(this, ammo, fuel); // heritage parameters and 'this'
    this.tower = 5;

    this.fuelConsumption = 5;
    this.ammoConsumption = 5;

};

// Heritage methods from Tank to Tank5Towers

Tank5Towers.prototype = Object.create(Tank.prototype);
Tank5Towers.prototype.constructor = Tank;


function Battlefield() {

    this.numberTanks = [];

};

//Declaration function constructor for tanks field

Battlefield.prototype.addTanks = function(tank) {

    if (this.numberTanks.length < 4) {

        this.numberTanks.push(tank);

        console.log(this.numberTanks);

    } else {

        alert('There is no more place for another tank');
    };
};

Battlefield.prototype.getTanks = function() {

    return this.numberTanks;
};
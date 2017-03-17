function Tank(fuel, cartridges) {
    this.fuel = fuel;
    this.cartridges = cartridges;
    this.crewmembers = []; // For the crew
}

    Tank.prototype.moove = function() {
        if (this.fuel < 1){
            console.log('The fuel ran out!');
        } else {
            this.fuel--;
        }
    };

    Tank.prototype.fire = function() {
        if (this.cartridges < 1){
            console.log('The cartridges are over!');
        } else {
            this.cartridges--;
        }
    };
  
    Tank.prototype.refuel = function(fuel, cartridges) {
        this.fuel += fuel;
        this.cartridges += cartridges;
    };
    
    Tank.prototype.setCrow = function(crewmember) {
        this.crewmembers.push(crewmember);
    };

function ModernizedTank(fuel, cartridges) {
    // inheritance
    Tank.call(this);
    
    this.fuel = fuel;
    this.cartridges = cartridges;
    this.crewmembers = []; // For the crew
}

// inheritance
ModernizedTank.prototype = Object.create(Tank.prototype);
ModernizedTank.prototype.constructor = ModernizedTank;

    ModernizedTank.prototype.fire = function() {
        if (this.cartridges < 5){
            console.log('The cartridges are over!');
        } else {
            this.cartridges -= 5;
        }
    };
  
    ModernizedTank.prototype.moove = function() {
        if (this.fuel < 2){
            console.log('The fuel ran out!');
        } else {
            this.fuel -= 2;
        }
    };

function PlayingField() {
    this.arrTank = [];
    
        this.addTank = function(objTank) {
            if (this.arrTank.length >= 4){
                throw new Error("More than 4 tanks!");
            } else {
                this.arrTank.push(objTank);
            }
        };
        
        this.getTanks = function() {
            return this.arrTank;
        };
}


// testing
var t64 = new Tank(1, 1);
t64.moove();
t64.fire();
t64.refuel(100, 15);

var t64b = new ModernizedTank(2, 5);
t64b.moove();
t64b.fire();
t64b.refuel(0, 10);

var prokhorovka = new PlayingField();
prokhorovka.addTank(t64);
prokhorovka.addTank(t64b);
console.log(prokhorovka.getTanks());


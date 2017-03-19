// craete game map
var prokhorovka = new PlayingField();

    function createTank(){
        var t64 = new Tank(100, 10);
        prokhorovka.addTank(t64);
    }
    
    createTank();

    var tanks = prokhorovka.getTanks();

// in EventListener
function gameTanks(e){
     
    var playingTank = document.getElementById("playingTank");
    var actualFuel = document.getElementById("fuel");
    var actualCartridges = document.getElementById("cartridges");
    // Get the style for playingTank
    var cs = window.getComputedStyle(playingTank);
     
    var left = parseInt(cs.marginLeft);
    var top = parseInt(cs.marginTop);

    switch(e.keyCode){
        
        case 32:   // space key
                tanks.forEach(function(tank) {
                    tank.fire();
                       if (tank.cartridges > 1){
                           playingTank.style.backgroundImage = "none";
                           setTimeout(function() { playingTank.style.backgroundImage = "url(\"./tank.jpg\")"; }, 50);
                       };
                  });
            break;
        case 37:  // left key
            if(left > 0)
                tanks.forEach(function(tank) {
                    tank.moove();
                        if (tank.fuel > 1){
                            playingTank.style.marginLeft = left - 10 + "px";
                        }
                });
            break;
        case 38:   // up key
            if(top > 0)
                tanks.forEach(function(tank) {
                    tank.moove();
                        if (tank.fuel > 1){
                            playingTank.style.marginTop = top - 10 + "px";
                        }
                });
            break;
        case 39:   // right key
            if(left < 450)
                tanks.forEach(function(tank) {
                    tank.moove();
                        if (tank.fuel > 1){
                            playingTank.style.marginLeft = left + 10 + "px";
                        }
                });
            break;
        case 40:   // down key
            if(top < 450)
                tanks.forEach(function(tank) {
                    tank.moove();
                        if (tank.fuel > 1){
                            playingTank.style.marginTop = top + 10 + "px";
                        }
                });
            break;
    }

// for game interface 
    tanks.forEach(function(tank) {
                    actualFuel.innerHTML = tank.fuel;
                  });
    tanks.forEach(function(tank) {
                    actualCartridges.innerHTML = tank.cartridges;
                  });  
}
 
addEventListener("keydown", gameTanks);

// constructor
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

// constructor
function ModernizedTank() {
    // Functional-based inheritance of the constructor Tank
    Tank.apply(this);
}

// Prototype-based inheritance
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

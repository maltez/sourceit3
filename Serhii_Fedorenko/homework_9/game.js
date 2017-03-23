// constructor
function Tank(fuel, cartridges, title) {
    this.fuel = fuel;
    this.cartridges = cartridges;
    this.title = title;
    this.fuelConsumption = 1;
    this.ammunitionConsumption = 1;
    this.crewmembers = []; // For the crew
    this.playingTank = document.getElementById("playingTank");
    this.actualFuel = document.getElementById("fuel");
    this.actualCartridges = document.getElementById("cartridges");
    if (this.title === 'Tank'){
        this.actualFuel.innerHTML = this.fuel;
        this.actualCartridges.innerHTML = this.cartridges; 
    }
}

    Tank.prototype.moove = function(keyCode) {
        // Get the style for playingTank
        var cs = window.getComputedStyle(playingTank);
        this.left = parseInt(cs.marginLeft);
        this.top = parseInt(cs.marginTop);

        if (this.fuel < 1){
            console.log('The fuel ran out!');
        } else {
            switch(keyCode){
                case 37:  // left key
                    if(this.left > 0)
                            this.playingTank.style.marginLeft = this.left - 10 + "px";
                            this.fuel = this.fuel - this.fuelConsumption;
                    break;
                case 38:   // up key
                    if(this.top > 0)
                            this.playingTank.style.marginTop = this.top - 10 + "px";
                            this.fuel = this.fuel - this.fuelConsumption;
                    break;
                case 39:   // right key
                    if(this.left < 450)
                            this.playingTank.style.marginLeft = this.left + 10 + "px";
                            this.fuel = this.fuel - this.fuelConsumption;
                    break;
                case 40:   // down key
                    if(this.top < 450)
                            this.playingTank.style.marginTop = this.top + 10 + "px";
                            this.fuel = this.fuel - this.fuelConsumption;
                    break;
            }
        }
        
        this.actualFuel.innerHTML = this.fuel;
    };

    Tank.prototype.fire = function() {
        var me = this;
        if (this.cartridges < 1){
            console.log('The cartridges are over!');
        } else { 
            this.playingTank.style.backgroundImage = "none";
            setTimeout(function() { me.playingTank.style.backgroundImage = "url(\"./tank.jpg\")"; }, 50);
            this.cartridges = this.cartridges - this.ammunitionConsumption;
        }
        
        this.actualCartridges.innerHTML = this.cartridges;
    };
  
    Tank.prototype.recharge = function(fuel, cartridges) {
        this.fuel += fuel;
        this.cartridges += cartridges;
        this.actualFuel.innerHTML = this.fuel;
        this.actualCartridges.innerHTML = this.cartridges;
    };
    
    Tank.prototype.setCrow = function(crewmember) {
        this.crewmembers.push(crewmember);
    };

// constructor
function ModernizedTank(fuel, cartridges, title) {
    // Functional-based inheritance of the constructor Tank
    Tank.apply(this, [fuel, cartridges, title]);
    
    this.fuelConsumption = 2;
    this.ammunitionConsumption = 5;
}

    // Prototype-based inheritance
    ModernizedTank.prototype = Object.create(Tank.prototype);
    ModernizedTank.prototype.constructor = ModernizedTank;

// constructor
function TankBot(fuel, cartridges, title) {
    // Functional-based inheritance of the constructor Tank
    Tank.apply(this, [fuel, cartridges, title]);
}

    // Prototype-based inheritance
    TankBot.prototype = Object.create(Tank.prototype);
    TankBot.prototype.constructor = TankBot;

    TankBot.prototype.moove = function() {
        this.plaingBot = document.getElementById(this.title);
        this.plaingBot.style.visibility = "visible";
        var me = this;
        // Starting an infinite loop
        setInterval(botFront, 25);
        
            function botBack(){
                // Get the style for playingTank
                var cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top > 0) {
                    me.plaingBot.style.marginLeft = me.left - 1 + "px";
                    me.plaingBot.style.marginTop = me.top - 1 + "px";
                } else {
                    setInterval(botFront, 25);
                }
            };
            function botFront(){
                // Get the style for playingTank
                var cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top < 300) {
                    me.plaingBot.style.marginLeft = me.left + 1 + "px";
                    me.plaingBot.style.marginTop = me.top + 1 + "px";
                } else {
                    setInterval(botBack, 25);}
            };

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

// craete game map
var prokhorovka = new PlayingField();
var tanks = prokhorovka.getTanks();
var t64 = new Tank(100, 10, 'Tank');
//var t64b = new ModernizedTank(100, 10, 'ModernizedTank_' + i + ' ');   // for the test
prokhorovka.addTank(t64);
//prokhorovka.addTank(t64b);    // for the test
var addBot = document.getElementById("addBot");
var i = 0;
      
window.onkeydown = function(e) {
    switch (e.keyCode){
        case 32:  // space key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.fire();
                }
            });
            break;
        case 37:  // left key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 38:   // up key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 39:   // right key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 40:   // down key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 82:   // R key
            tanks.forEach(function(tank, key) {
                if (key === 0){
                    tank.recharge(100, 10);
                }
            });
            break;
    }
};

addBot.onclick = function() {
    i++;
    var bot = new TankBot(100, 10, 'TankBot_' + i);
    prokhorovka.addTank(bot);
    bot.moove();
};
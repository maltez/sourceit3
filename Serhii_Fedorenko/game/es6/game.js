// for class TankBot title
let num = 0;

class Tank {
    constructor(fuel, cartridges){
        this.fuel = fuel;
        this.cartridges = cartridges;
        this.fuelConsumption = 1;
        this.ammunitionConsumption = 1;
        this.crewmembers = []; // For the crew
        this.playingTank = document.getElementById("playingTank");
        this.actualFuel = document.getElementById("fuel");
        this.actualCartridges = document.getElementById("cartridges");
        if (num === 0) {
            this.actualFuel.innerHTML = this.fuel;
            this.actualCartridges.innerHTML = this.cartridges; 
        }
    }

    moove(keyCode) {
        // Get the style for playingTank
        let cs = window.getComputedStyle(playingTank);
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

    fire() {
        let me = this;
        if (this.cartridges < 1){
            console.log('The cartridges are over!');
        } else { 
            this.playingTank.style.backgroundImage = "none";
            setTimeout(function() { me.playingTank.style.backgroundImage = "url(\"./tank.jpg\")"; }, 50);
            this.cartridges = this.cartridges - this.ammunitionConsumption;
        }
        
        this.actualCartridges.innerHTML = this.cartridges;
    };
  
    recharge(fuel, cartridges) {
        this.fuel += fuel;
        this.cartridges += cartridges;
        this.actualFuel.innerHTML = this.fuel;
        this.actualCartridges.innerHTML = this.cartridges;
    };
    
    setCrow(crewmember) {
        this.crewmembers.push(crewmember);
    };
}



class ModernizedTank extends Tank {
    constructor(fuel, cartridges) {
        super(fuel, cartridges);
        this.fuelConsumption = 2;
        this.ammunitionConsumption = 5;
    } 
}



class TankBot extends Tank {
    constructor() {
        num++;
        super();
        this.title = 'TankBot_' + num;
    }

    moove() {
        this.plaingBot = document.getElementById(this.title);
        this.plaingBot.style.visibility = "visible";
        let me = this;
        // Starting an infinite loop
        setInterval(botFront, 25);
        
            function botBack(){
                // Get the style for playingTank
                let cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top > 0) {
                    me.plaingBot.style.marginLeft = me.left - 1 + "px";
                    me.plaingBot.style.marginTop = me.top - 1 + "px";
                } else {
                    me.moove();
                }
            };
            function botFront(){
                // Get the style for playingTank
                let cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top < 300) {
                    me.plaingBot.style.marginLeft = me.left + 1 + "px";
                    me.plaingBot.style.marginTop = me.top + 1 + "px";
                } else {
                    setInterval(botBack, 25);}
            };
    };
}



class PlayingField {
    constructor(){
        this.arrTank = [];
    }  
        addTank(objTank) {
            if (this.arrTank.length >= 4){
                throw new Error("More than 4 tanks!");
            } else {
                this.arrTank.push(objTank);
            }
        };
        
        getTanks() {
            return this.arrTank;
        };
}

// craete game map
let prokhorovka = new PlayingField();
// get tanks
let tanks = prokhorovka.getTanks();
// craete playing tank
let t64 = new Tank(100, 10);
// add playing tank in game map
prokhorovka.addTank(t64);
/* for the test
let t64b = new ModernizedTank(100, 10);   
prokhorovka.addTank(t64b);
*/
let addBot = document.getElementById("addBot");

addBot.onclick = function() {
    let bot = new TankBot(100, 10);
    prokhorovka.addTank(bot);
    bot.moove();
};
      
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
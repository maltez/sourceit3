"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// for class TankBot title
var num = 0;

var Tank = function () {
    function Tank(fuel, cartridges) {
        _classCallCheck(this, Tank);

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

    _createClass(Tank, [{
        key: "moove",
        value: function moove(keyCode) {
            // Get the style for playingTank
            var cs = window.getComputedStyle(playingTank);
            this.left = parseInt(cs.marginLeft);
            this.top = parseInt(cs.marginTop);

            if (this.fuel < 1) {
                console.log('The fuel ran out!');
            } else {
                switch (keyCode) {
                    case 37:
                        // left key
                        if (this.left > 0) this.playingTank.style.marginLeft = this.left - 10 + "px";
                        this.fuel = this.fuel - this.fuelConsumption;
                        break;
                    case 38:
                        // up key
                        if (this.top > 0) this.playingTank.style.marginTop = this.top - 10 + "px";
                        this.fuel = this.fuel - this.fuelConsumption;
                        break;
                    case 39:
                        // right key
                        if (this.left < 450) this.playingTank.style.marginLeft = this.left + 10 + "px";
                        this.fuel = this.fuel - this.fuelConsumption;
                        break;
                    case 40:
                        // down key
                        if (this.top < 450) this.playingTank.style.marginTop = this.top + 10 + "px";
                        this.fuel = this.fuel - this.fuelConsumption;
                        break;
                }
            }

            this.actualFuel.innerHTML = this.fuel;
        }
    }, {
        key: "fire",
        value: function fire() {
            var me = this;
            if (this.cartridges < 1) {
                console.log('The cartridges are over!');
            } else {
                this.playingTank.style.backgroundImage = "none";
                setTimeout(function () {
                    me.playingTank.style.backgroundImage = "url(\"./tank.jpg\")";
                }, 50);
                this.cartridges = this.cartridges - this.ammunitionConsumption;
            }

            this.actualCartridges.innerHTML = this.cartridges;
        }
    }, {
        key: "recharge",
        value: function recharge(fuel, cartridges) {
            this.fuel += fuel;
            this.cartridges += cartridges;
            this.actualFuel.innerHTML = this.fuel;
            this.actualCartridges.innerHTML = this.cartridges;
        }
    }, {
        key: "setCrow",
        value: function setCrow(crewmember) {
            this.crewmembers.push(crewmember);
        }
    }]);

    return Tank;
}();

var ModernizedTank = function (_Tank) {
    _inherits(ModernizedTank, _Tank);

    function ModernizedTank(fuel, cartridges) {
        _classCallCheck(this, ModernizedTank);

        var _this = _possibleConstructorReturn(this, (ModernizedTank.__proto__ || Object.getPrototypeOf(ModernizedTank)).call(this, fuel, cartridges));

        _this.fuelConsumption = 2;
        _this.ammunitionConsumption = 5;
        return _this;
    }

    return ModernizedTank;
}(Tank);

var TankBot = function (_Tank2) {
    _inherits(TankBot, _Tank2);

    function TankBot() {
        _classCallCheck(this, TankBot);

        num++;

        var _this2 = _possibleConstructorReturn(this, (TankBot.__proto__ || Object.getPrototypeOf(TankBot)).call(this));

        _this2.title = 'TankBot_' + num;
        return _this2;
    }

    _createClass(TankBot, [{
        key: "moove",
        value: function moove() {
            this.plaingBot = document.getElementById(this.title);
            this.plaingBot.style.visibility = "visible";
            var me = this;
            // Starting an infinite loop
            setInterval(botFront, 25);

            function botBack() {
                // Get the style for playingTank
                var cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top > 0) {
                    me.plaingBot.style.marginLeft = me.left - 1 + "px";
                    me.plaingBot.style.marginTop = me.top - 1 + "px";
                } else {
                    me.moove();
                }
            };
            function botFront() {
                // Get the style for playingTank
                var cs = window.getComputedStyle(me.plaingBot);
                me.left = parseInt(cs.marginLeft);
                me.top = parseInt(cs.marginTop);
                if (me.top < 300) {
                    me.plaingBot.style.marginLeft = me.left + 1 + "px";
                    me.plaingBot.style.marginTop = me.top + 1 + "px";
                } else {
                    setInterval(botBack, 25);
                }
            };
        }
    }]);

    return TankBot;
}(Tank);

var PlayingField = function () {
    function PlayingField() {
        _classCallCheck(this, PlayingField);

        this.arrTank = [];
    }

    _createClass(PlayingField, [{
        key: "addTank",
        value: function addTank(objTank) {
            if (this.arrTank.length >= 4) {
                throw new Error("More than 4 tanks!");
            } else {
                this.arrTank.push(objTank);
            }
        }
    }, {
        key: "getTanks",
        value: function getTanks() {
            return this.arrTank;
        }
    }]);

    return PlayingField;
}();

// craete game map
var prokhorovka = new PlayingField();
// get tanks
var tanks = prokhorovka.getTanks();
// craete playing tank
var t64 = new Tank(100, 10);
// add playing tank in game map
prokhorovka.addTank(t64);
/* for the test
let t64b = new ModernizedTank(100, 10);   
prokhorovka.addTank(t64b);
*/
var addBot = document.getElementById("addBot");

addBot.onclick = function () {
    var bot = new TankBot(100, 10);
    prokhorovka.addTank(bot);
    bot.moove();
};

window.onkeydown = function (e) {
    switch (e.keyCode) {
        case 32:
            // space key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.fire();
                }
            });
            break;
        case 37:
            // left key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 38:
            // up key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 39:
            // right key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 40:
            // down key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.moove(e.keyCode);
                }
            });
            break;
        case 82:
            // R key
            tanks.forEach(function (tank, key) {
                if (key === 0) {
                    tank.recharge(100, 10);
                }
            });
            break;
    }
};
var new_game = document.getElementById('New_Game');
var game_boasr = document.getElementById('game_space');
var legenda = document.getElementById('legenda');
var tank_im = document.getElementById('tank_im');
var player_input = document.getElementById('name_player');
var player_name = document.getElementById('player_name');
var shell_ind = document.getElementById("shells");
var fuel_ind = document.getElementById("fuel");
var shoots = document.getElementById("fires");
var dist = document.getElementById("track"); //indicators
var br=false;
var last_key = "ArrowDown";
var key_down = "ArrowDown";
var demoarr = ["ArrowRight"," ", "ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"," ", " ", " ", "ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"," ", " ", " ", "ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"," ", " ", " ", "ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight","ArrowRight"," ", " ", " ", "ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowDown","ArrowLeft","ArrowLeft"," ", " ", " ", "ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft"," ", " ", " ", "ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft"," ", " ", " ","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowLeft","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp"," ", " ", " ", "ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp","ArrowUp"];
game_boasr.hidden = true;
legenda.hidden = true;
tank_im.backgroundImage = 'url(img/tank_backward.png)';

var tank = new Tank('T-34');
var poligon = new Game_space();

window.onkeydown = function (event) {
    key_down = event.key;
     if (event.key == "ArrowRight") { //moove rigth button
        tank_im.style.backgroundImage = 'url(img/tank_rigth.png)';
        tank.moove(last_key, event.key);
        last_key = event.key;
    }
    if (event.key == "ArrowLeft") {//moove left button
        tank_im.style.backgroundImage = 'url(img/tank_left.png)';
        tank.moove(last_key, event.key);
        last_key = event.key;
    }
    if (event.key == "ArrowDown") {//moove down button
        tank_im.style.backgroundImage = 'url(img/tank_backward.png)';
        tank.moove(last_key, event.key);
        last_key = event.key;
    }
    if (event.key == "ArrowUp") {//moove up button
        tank_im.style.backgroundImage = 'url(img/tank_forward.png)';
        tank.moove(last_key, event.key);
        last_key = event.key;
    }
    if (event.key == "q"){ if (br) br=false; else br=true;}

    if (event.key == " ") {//fire button
        tank.fire();
    }
    if (event.key == "r") tank.rearm(1000, 20);
}
new_game.onmouseover = function () {
    this.style.backgroundImage = 'url(img/Start_mouse_on.png)';
}
new_game.onmouseout = function () {
    this.style.backgroundImage = 'url(img/Start.png)';
}
new_game.onclick = function () {
    this.style.backgroundImage = 'url(img/Start_mouse_click.png)';
    console.log('Game Started');
    if (player_input.value) player_name.innerText = player_input.value;
    setTimeout(function () {
        player_input.hidden = true;
        new_game.hidden = true;
        game_boasr.hidden = false;
        legenda.hidden = false;
        New_demo.hidden = true;
    }, 500);
}

function Tank(name) {//tank generator
    this.fuel = 1000;
    var x = 0, y = 0;
    this.ammunition = 20;
    var fire_count = 0;
    var distans = 0;
    this.power = 2;
    this.name = name;
   // this.shell = 100;
    this.caterpillar = 2;
    this.wheels = 0;
    this.turret = 1;
    var amm_max = 200;
    var fuel_tank = 1000;
    this.crew = { captan: 'leutenant', captan_heatth: 100, driver: 'Sergeant', driver_health: 100, gun_layer: 'st.Sergeant', gun_layer_health: 100 };

    function img_change(img1, img2) {
        tank_im.style.backgroundImage = img1;
        setTimeout(function () { tank_im.style.backgroundImage = img2; }, 100);
    };

    this.moove = function (key1, key2) {//fuel down distans up
        if (this.fuel > 0) {
            if (key1 == key2) {
                if (key1 == 'ArrowRight') if (x < 900) {
                    x += 10;
                    this.fuel -= this.power;
                    distans++;
                }
                if (key1 == 'ArrowLeft') if (x > 0) {
                    x -= 10;
                    this.fuel -= this.power;
                    distans++;
                }
                if (key1 == 'ArrowDown') if (y < 500) {
                    y += 10;
                    this.fuel -= this.power;
                    distans++;
                }
                if (key1 == 'ArrowUp') if (y > 0) {
                    y -= 10;
                    this.fuel -= this.power;
                    distans++;
                }
                tank_im.style.marginLeft = x + 'px';
                tank_im.style.marginTop = y + 'px';
            }
        }
        else {
            console.log('Fuel ends.');//if no fuel
        }
        console.log(this.name + ' Distans - ' + distans + ' m. Fuel - ' + this.fuel / 10 + '/' + fuel_tank / 10 + ' l.');
        fuel_ind.innerText = this.fuel / 10 + ' l.';
        dist.innerText = distans + ' m.'
    };


    this.fire = function () {//shell down until zero by fireng
        if (this.ammunition > 0) {
            this.ammunition -= this.turret;
            fire_count++;
            console.log('Boom!!');
            if (last_key == 'ArrowRight') {
                img_change('url(img/tank_rigth_fire.png)', 'url(img/tank_rigth.png)');
            }
            if (last_key == 'ArrowLeft') {
                img_change('url(img/tank_left_fire.png)', 'url(img/tank_left.png)');
            }
            if (last_key == 'ArrowDown') {
                img_change('url(img/tank_backward_fire.png)', 'url(img/tank_backward.png)');
            }
            if (last_key == 'ArrowUp') {
                img_change('url(img/tank_forward_fire.png)', 'url(img/tank_forward.png)');
            }
        }
        else {
            if (last_key == 'ArrowRight') {
                img_change('url(img/tank_rigth_no_fire.png)', 'url(img/tank_rigth.png)');
            }
            if (last_key == 'ArrowLeft') {
                img_change('url(img/tank_left_no_fire.png)', 'url(img/tank_left.png)');
            }
            if (last_key == 'ArrowDown') {
                img_change('url(img/tank_backward_no_fire.png)', 'url(img/tank_backward.png)');
            }
            if (last_key == 'ArrowUp') {
                img_change('url(img/tank_forward_no_fire.png)', 'url(img/tank_forward.png)');
            }
            console.log('Click-click...');
        }
        console.log(this.name + ' Shell - ' + this.ammunition + '/' + amm_max + ' You shoot - ' + fire_count + ' times');
        shoots.innerText = fire_count;
        shell_ind.innerText = this.ammunition + ' x';
    };


    this.rearm = function (fuel_add, amm_add) {//add fuel and shell to tank geted in obj
        if (!isNaN(fuel_add + amm_add)) {
            this.fuel += fuel_add;
            if (this.fuel > fuel_tank) {//maximum  litres 
                console.log(this.name + ' - The tank is full');
                this.fuel = fuel_tank;
            }
            this.ammunition += amm_add;
            if (this.ammunition > amm_max) {//maximum amm_max shells
                console.log(this.name + ' - Maximum supply of shells');
                this.ammunition = amm_max;
            }
            console.log('Rearmed ' + this.name + ' ' + this.ammunition + '/' + amm_max);
            console.log('Refueled ' + this.name + ' ' + this.fuel + '/' + fuel_tank);
            fuel_ind.innerText = this.fuel / 10 + ' l.';
            shell_ind.innerText = this.ammunition + ' x';
        }
        else console.log('Rearm faled');
    }

}

function TankMorph(turret, power, name) {//new tank this new parameters
    this.power = power;
    this.name = name;
    this.turret = turret;
    this.amm_max = 80;
    this.fuel_tank = 300;
    console.log('Tank ' + this.name + ' Created')
    this.rearm(100, 30);
}

New_demo.onclick = function () {//tank will moovin around pole until user press Q
      var event = new Event("onkeydown"); 
      player_name.innerText = "demo";
      function navigator(demoarray){
         var j=0,d=0;
         for (var i=0; i<10000; i++){
                setTimeout( function(){
                    if (br) return null;
                    event.key = demoarray[j];
                    if (tank.fuel==0||tank.ammunition==0) event.key = 'r';
                    else j++;
                    if (j==demoarray.length-1) j=0;
                    window.onkeydown(event);
                    },100+i*50)
           } 
      }
     console.log('Demo Started');
     setTimeout(function () {
        player_input.hidden = true;
        new_game.hidden = true;
        game_boasr.hidden = false;
        legenda.hidden = false;
        New_demo.hidden = true;
        navigator(demoarr);
    }, 500);
     
} 
    

function Game_space() {
    this.content = [];
    this.add_on = function (name) {
        this.content.push(name);
        if (this.content.length > 4) {
            this.content.length = 4;
            return console.log('tank over 4  !!Error');
        };
        console.log(this.content);
    }
}

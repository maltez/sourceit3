var helth_ind = document.getElementById('Helth');
var armor_ind = document.getElementById('Armor');
var shell_ind = document.getElementById('Shell');
var fuel_ind = document.getElementById('Fuel');
var distans_ind = document.getElementById('Distans');
var tank_create = document.getElementById('Create');
var button_create = document.getElementById('create_tank');
var fire_ind = document.getElementById('Fire')//links to texp out to web page
var button_go = document.getElementById('button_go');
var button_fire = document.getElementById('button_fire');
var button_reamm = document.getElementById('button_reamm');
var button_create_morph = document.getElementById('create_tankMorph');

function Tank(ammunition, name) {//tank generator
    this.fuel = 100;
    if (!isNaN(ammunition) && ammunition > 0) this.ammunition = ammunition;//chek shell number
    else this.ammunition = 10;
    var fire_count = 0;
    var distans = 0;
    this.power = 1;
    this.name = name;
    this.shell = 100;
    this.caterpillar = 2;
    this.wheels = 0;
    this.turret = 1;
    this.amm_max = 20;
    this.fuel_tank = 100;
    this.crew = { captan: 'lieutenant', captan_heatth: 100, driver: 'Sergeant', driver_health: 100, gun_layer: 'staff Sergeant', gun_layer_health: 100 };
    this.moove = function () {//fuel down distans up
        if (this.fuel > 0) {
            this.fuel -= this.power;
            distans++;
        }
        else {
            console.log('Fuel ends.');//if no fuel
        }
        console.log(this.name+' Distans - ' + distans + ' m. Fuel - ' + this.fuel + '/'+this.fuel_tank +' l.');
    };

    this.fire = function () {//shell down until zero by fireng
        if (this.ammunition > 0) {
            this.ammunition -= this.turret;
            fire_count--;
            console.log('Boom!!');
        }
        else {
            console.log('Click-click, yopta!!');
        }
        console.log (this.name+' Shell - ' + this.ammunition + '/'+this.amm_max+' You shoot - ' + fire_count + ' times');
    }
    this.rearm = function (fuel_add, amm_add) {//add fuel and shell to tank geted in obj
        this.fuel += fuel_add;
        if (this.fuel > this.fuel_tank) {//maximum  litres 
            console.log(this.name + ' - The tank is full');
            this.fuel =  this.fuel_tank;
        }
        this.ammunition += amm_add;
        if (this.ammunition > this.amm_max) {//maximum amm_max shells
            console.log(this.name+' - Maximum supply of shells');
            this.ammunition = this.amm_max;
        }
        console.log ('Rearmed '+this.name+' '+this.ammunition + '/'+this.amm_max);
        console.log ('Refueled '+this.name+' '+this.fuel + '/'+this.fuel_tank);
    }
   if(this.name != 'Prototype') console.log('Tank '+this.name+' Created');
}
function TankMorph(turret, power, name) {//new tank this new parameters
    this.power = power;
    this.name = name;
    this.turret = turret;
    this.amm_max = 80;
    this.fuel_tank = 300;
    console.log('Tank '+this.name+' Created')
    this.rearm(100, 30);
}
var tank = new Tank(20,'Prototype');
TankMorph.prototype = tank;

function game_space(){
    this.content = [];
    this.add_on = function(name)
    {
        this.content.push(name);
         if (this.content.length>4){
            this.content.length=4;
            return console.log('tank over 4  !!Error');
        };
        console.log(this.content);
    }
}
var z =new game_space();


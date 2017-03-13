var helth_ind = document.getElementById('Helth');
var armor_ind = document.getElementById('Armor');
var shell_ind = document.getElementById('Shell');
var fuel_ind = document.getElementById('Fuel');
var distans_ind = document.getElementById('Distans');
var tank_create = document.getElementById('Create');
var button_create = document.getElementById('create_tank');
var fire_ind = document.getElementById('Fire')//links to texp out to web page
var tank_img = document.getElementById('tank_img');
var button_go = document.getElementById('button_go');
var button_fire = document.getElementById('button_fire');
var button_reamm = document.getElementById('button_reamm');
button_go.hidden = true;
button_fire.hidden = true;
button_reamm.hidden = true;
tank_img.hidden = true;

function Tank(fuel,ammunition,name){//tank generator
    if (!isNaN(fuel)&&fuel>0) this.fuel = fuel;//chek fuel number
    else this.fuel = 0;
    if (!isNaN(ammunition)&&ammunition>0) this.ammunition = ammunition;//chek shell number
    else this.ammunition = 0;
    var fire_count = 0;
    var distans = 0;
    this.name = name;
    this.shell = 100;
    this.right_caterpillar = true;
    this.left_caterpillar = true;
    this.crew = {captan:'lieutenant',captan_heatth:100, driver :'Sergeant',driver_health:100, gun_layer:'staff Sergeant',gun_layer_health:100};
    this.moove = function(){//fuel down diatsns up
        if (this.fuel>0) {
            this.fuel--;
            distans += 0.5;
            console.log('Drove through '+distans+ ' meters');
        }
        else {
            console.log('Fuel ends.');//if no fuel
        }
        fuel_ind.innerText = 'Fuel - '+this.fuel+'/100 l.';
        distans_ind.innerText = 'Distans - '+distans+' m.';
        return this.fuel;
    };
    this.fire = function(){//shell down until zero by fireng
        if (this.ammunition>0) {
            this.ammunition--;
            fire_count++;
            console.log('Boom!!');
            tank_img.backgroundImage ='img/tank_fr.png';
        }
        else {
            console.log('Click-click, yopta!!');
        }
        shell_ind.innerText = 'Shell - '+this.ammunition+'/20';
        fire_ind.innerText = 'You shoot - '+fire_count+' times';
        return this.ammunition;
    }
    console.log('Tank created');

    helth_ind.innerText = 'Heath - 100';
    armor_ind.innerText = 'Armor - 100%';
    shell_ind.innerText = 'Shell - 10/20';
    fuel_ind.innerText = 'Fuel - 10/100 l.';
    distans_ind.innerText = 'Distans - 0 m.';
    fire_ind.innerText = 'You shoot - '+fire_count+' times';
    tank_create.innerText = this.name;
    button_create.hidden = true;
    button_go.hidden = false;
    button_fire.hidden = false;
    button_reamm.hidden = false;
    tank_img.hidden = false;
}

function rearm(fuel_add,amm_add,obj){//add fuel and shell to tank geted in obj
    obj.fuel += fuel_add;
    if(obj.fuel>100) {//maximum 100n litres 
    console.log('The tank is full');
    obj.fuel = 100;
    }
    obj.ammunition += amm_add;
    if(obj.ammunition>20){//maximum 20 shells
    console.log('Maximum supply of shells');
    obj.ammunition = 20;
}
    shell_ind.innerText = 'Shell - '+obj.ammunition+'/20';
    fuel_ind.innerText = 'Fuel - '+obj.fuel+'/100 l.';
    return obj;
}

//

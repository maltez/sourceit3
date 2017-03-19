/*function string(parametr)
/{
    var str = parametr.islord ? 'Lord ' : 'Yoman ';
    return parametr.titul + ' ' + parametr.name + ' ' + str + parametr.lastname;
}

function del_nick(parametr) 
{
    delete parametr.nickname;
    return;
}
function parametr_in_object(param, objeckt) {
    return param in objeckt;
}
function for_key_in(objeckt) 
{
    for (key in objeckt)
    {
         console.log(objeckt[key]);
    }
    return;
}
var basil = { name: 'Vasya', lastname: 'Ivanov', age: 24, nickname:'Brige', titul:'Sir', islord: true };
var fruits =['Apple','Orange','Greapfrut'];
fruits.push('Peanapple');
fruits.push('Peanapple2');
for (var i=0; i<fruits.length; i++)
    {      console.log(fruits[i]);   }

var fruits_2=fruits.slice(1,3);
console.log(fruits_2);
//console.log(string(basil));
//del_nick(basil);
//console.log(basil);
//console.log(parametr_in_object('islord', basil));
//console.log(parametr_in_object('nan', basil));
//for_key_in(basil);*/
/*var array=[];
function not_even(arr)
    {   
        var arr_new=[], j=0;
        for (var i=1; i<arr.length ; i+=2)
        {
              arr_new[j]=arr[i];
              j++;
         }
        return arr_new;
    }
for (var i=0; i<10; i++)//налолним массив рандомными целыми числами от 0 до 100
    {
       array[i] = Math.floor(Math.random() * (100 - 1) + 1);
    }
console.log(not_even(array));
//'use strict' - ES5;//нельзя записывать неявно переменные без вара
function tes(a)
{    
   return a +=20; 
}

function lever_first_create_second(index,parameters,code)
{   
    var a = [];
    var id;    
    if (index>=0) 
    {
    function level_second()
        {
         var name = (index + '_Second').toString();
         var core = code.toString();
         var par = '';
     if (parameters>0)
        {
            for (var i = 1; i<=parameters; i++)
            {
                par = par + ('par'+i);
            }
        }
        a.length++;
        return eval ('function '+name+'('+par+') {'+core+'}');
         }
    a[index] = level_second();
    return a[index] ;
    }
return;
}

lever_first_create_second(0 , 2 , 'var s = 0; id = id+1 ; return; ');

var a;
try //если в трае ошибка то срабатывает кеч
{
   a(); 
}
catch(err)//err ошибка не нуль
{
    console.log(err);
    console.log('be a')
}
console.log ('happy')


try 
{
   throw new Error('fuck'); //генерируем ошибку со значением строки
}
catch(err)//
{
    console.log(err);
    console.log('be a')
}
console.log ('happy')


var a = [1,3,4,3,7,3];

var z = function (arr){
    var c = []; 
    arr.forEach( 
        function(elt){ 
            if (typeof elt !== 'number'){
                throw new Error('new')
            }
             c.push(elt+2);
             return c;
             })
console.log(z(a));
var l = function (arr){
return a.map(
    function(elt){
    elt= elt+2;
})
}
console.log(l(a));

var m = function (arr){
return a.filter(
    function(elt){
    return elt%2 == 0;
})
}
console.log(m(a));

var one = function(a,b,func){
    if (typeof func != 'function'){
        throw newError('1');
    }
    return func (a,b)
}
console.log( one (1,2,function(a,b){return a+b;}) );



function sum_f(func,func2,a,b){
    if (typeof func !== 'function'){
        throw newError('1');
    }
    if (typeof func2 !== 'function'){
        throw newError('2');
    }
    return ( func(a,b) + func2(a,b) );
}
console.log(sum_f(function(a,b){return a*b}, function(a,b){return a/b},2,3));

var ar = 'string of value 23'.slice('');//оставляет чётные элементы
function del_space(ar){
   return ar.filter(function(el){
       return el % 2 === 0;
   });
}
console.log (del_space(ar));
var arr_out = [];
var str_1=[true,'test',1 , 'str', false], str_2=[true,'test',1 , 'str', false];
function separete(arr,x){
    for(var i=0; i<arr.length; i++){
        if (typeof(arr[i]) == typeof(x)){
        arr_out.push(arr[i]);
        }
    }
    return;
}
function plus(arr1,arr2){
separete(arr1,true);
separete(arr1,'str');
separete(arr1,1);
arr1=arr_out;
separete(arr2,true);
separete(arr2,'str');
separete(arr2,1);
arr2=arr_out;
arr_out = [];
arr_out=arr1;
for (var i=0; i<arr2.length; i++){
arr_out.push(arr2[i])
}
return arr_out;
}
console.log(plus(str_1, str_2));
function slog(str, char){//возвращает сколько вхождений в тексте
  var regexp = /char/;
  var z= document.body.children[0];
  z.inntenText = "Result" + str.match(regexp);
 return ;
}

console.log(slog('мама мыла раму','ма'));

//var str = 'я люблю свою люлю';
///alert (str.search(/ЛЮ/));//позиция первого схождения
//alert (str.search(/ЛЮ/i));игнор регистра /g сколько угоднго совпадений

var str = '+3sko4i5i5p2w';
var reg = /\s/;//пробелы
var reg = /\d/;//любая цифра
var reg = /\w/;//любое слово
//alert (str.match(reg));//первый символ
reg = /\d/g;//
//alert (str.match(reg).length);// количество цифр в тексте
str = '2323 3444 556 56765 235 245 34435 3454 334';
///alert (str.match(reg).length);
reg = /\d{4}/g;
function space(str,reg){
    var r = reg;//ищет цифры длинной 4 символа
    return str.match(r).length;
}
alert (space(str,reg));
str = 'Миру мир и мир за миром и За Мирам есть мирок МИРРР';//ищем мир в тексте и возвращаем количество схождений
reg = /мир/gi;
function space2(str,reg){
    var r = reg;//ищет цифры длинной 4 символа
    return str.match(r).length;
}
alert (space2(str, reg));

str = 'Мой возраст 344 года'
function age(str){
    var r = /\d[0-9]{1,3}/g//ищет цифры и выводит возраст
    return str.match(r);
}
alert (age(str));
//str.match (/(go)+/i) найдёт gogogo и вернёт его как gogogo
// reg = /<.*?>/g; //найдёт любой символ сколько угодно символов т конец строки начало строки ^ конец строки $

function Vehicle(){//функция конструктор
    this.color = 'red';
    var subcolor = 'green';
    this.SetSubColor = function(color){
        subcolor = color;
    }
    this.wheelCount = 4;
    this.beep = function(){
        console.log('Beep Beep!');
    };
    this.WhatColor = function(){
        console.log(this.color);
    };
}
var car = new Vehicle();// возвращает эеземпляр объекта по контруктору
car.WhatColor();

fanction animal 
4 лапы
жрать (еда)
арр ; */
/*
function Animal(name, gender){//конструктор животного с входящим именем
    var arr= 'myyyyrr';
    this.name = name;
    this.negs = 4;
    this.eat = function(food){
        console.log(gender + 'I am eat ' + food);
    };
  }
var cat = new Animal('Barsik', 'Woman');
cat.negs = 5;
cat.eat('Meat');
console.log(cat); 
function Vehicle(FuelCPH){//конструктор животного с входящим именем
    this.fuelCapacity = 0;
    function stop(){
        alert ('Car Stoped');
    }
    function getVehicleRange(){
        return this.fuelCapacity / FuelCPH;
    }
    this.go = function(food){
        setTimeout (stop, getVehicleRange.apply(this)));// будет поддерживаться актуальным берясь после присвоения ибо возьмёт 
    };
  }

  var cab = new Vehicle(4);
  cab.fuelCapacity = 4000;
  cab.go();
 
  var a = {x:1, y:2};
  var b = {calc:function(i){return this.x + this.y + i}};
  console.log( b.calc.apply(a,[1]));//можно call но туда передаёьъться не массив а попунктно

  console.log( b.calc.bind(a)) // не выполняет а возвращает фенкцию
  console.log( b.calc.bind(a)(1) ) // возвращает фенкцию и выполняет 
  console.log( b.calc.bind(a,1) ) // нужно не менять переменную 

var A = function(){
      this.a =1;
      this.b = 2;
}

var B = function(){
A.call(this);//механизм наследования функции B всего из функции А
    this.fu = function(){
        return this.a+this.b
    };
}

var z = new B();

function Vehicle(FuelCPH){
    this.fuelCapacity = 0;
    var self=this;

    function getVehicleRange(){
        return self.fuelCapacity / FuelCPH;
    }
    function stop(){
        alert('car Stop');
    }

    this.go = function (){
        setTimeout(stop, getVehicleRange());// первое значение чтьо выполниться по завершению таймера второе сам таймер в тысячных секунды
    };
}
function FordVehicle(){
    this.isFord = true;
    Vehicle.call(this,4);
    this.go = function(){ alert ('newer stop');}//при добавлении этого переопределяеться функция go
    this.fuelCapacity = 4000;
}

var fordT= new FordVehicle();
fordT.go();
console.log (fordT);


function Calc_simple(){
  this.s = true;
}

Calc_simple.prototype.add = function(a,b){
        return a+b;
    };
Calc_simple.prototype.multiply = function(a,b){
        return a*b;
    };

function Calc_ext(){
    Calc_simple.call(this);
    this.exponentiation = function (a,b){
       var res=1;
       for(var i=0; i<b; i++)  {    
           res = this.multiply(res,a);
        }
          return res;
        };
    this.division = function(a,b){
        return a/b;
    };
  
}

var calcul
var calculator = new Calc_ext();

console.log (calculator.add(3,4));
console.log (calculator.multiply(3,4));
console.log (calculator.exponentiation(3,4));
console.log (calculator.division(3,4));

var vehicle = { wheels: 4};
var car = {engine:true};

car._proto_ = vehicle //все свойства объекта vehicle добавяться к объекту car используеться для уже созданных объектов

console.log(car);
 //наследование через прототип
 function Vehicle(){
     this.wheels = 4;
     this.speed = 0;
 }

Vehicle.prototype.go = function(speed){

    this.speed += speed;
    console.log('we go with '+this.speed + 'speed');
}


Vehicle.prototype.stop = function(){
    this.speed = 0;
    console.log('we Stoped');
}

function Car(){
    Vehicle.apply(this);
    this.engine = true;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

var car = new Car();

car.go(100);
car.go(50);
car.stop();
console.log (car.engine)*/

function Home(){//можно будет вызывать даже без создания объекта
}
Home.street = function (){
    var street_name = 'Pobedy';
    return street_name;
}
Home.street(); // сработает статически метод оживляем функцию без копии объекта и недоступен в копиях объекта


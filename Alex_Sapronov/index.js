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
*/

var a = [1,3,4,3,7,3];

var z = function (arr){
    var c = []; 
    arr.forEach( 
        function(elt){ 
            if (typeof elt !== 'number'){
                throw new Error('new')
            }
                c.push(elt+2);
            });
    return c;
    }
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
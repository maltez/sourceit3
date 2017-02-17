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
*/

var a=1;
var z = function()
{
a=2;
return function(){
    a=3;
 }
}
console.log(a)
var l 
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
var array=[];
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


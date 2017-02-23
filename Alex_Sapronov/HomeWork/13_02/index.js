var arr1=[], arr2=[], arr3=[];
var a_ind = true;
var a = 'a ';
var cripted;
var crypt_index = true;
var key_crypt = ' '
var key_arr = [], key = [];
var divv = {};


function int_massiv_creator(){//array 2+ dimention generator (0)=0x dimention array have up nambers (!0)=0x ramdom
  
  var ix = 0, x = 10,y = 0,z = 0;//dimentions of array
  var array = [];//new array to return it
   /* x = prompt('Dimentions(1-3)');//
    if (x==3) //thid dimention on
        {   
            x = prompt('index First array dimention');
            y = prompt('index Second array dimrntion');
            z = prompt('index Thid array dimention');
        }
    else  if (x==2) //second dimention on
    {
        x = prompt('index first array dimention');
        y = prompt('index second array dimrntion');
    }
    else// one dimention
    {
        x = prompt('index of array');
    }
   
if (y>0) 
{     
    for (var i=0; i<x; i++)//random 2 dimention A generator nambers from 0 to 99 with length and heith 
        {
            array[i]=[];
            for (var j=0; j<y; j++)
            {
                
                if (z>0) //if array have 3 dimentions
                {
                    array[i][j]=[];
                for (var s=0; s<z; s++)
                    {
                        array[i][j][s] = Math.floor(Math.random() * 100);
                    }
                }
                else //if 2 dimentions
                {   
                    array[i][j] = Math.floor(Math.random() * 100);
                }
            }
             
        }
}  
    else 
    {*/
        for (i = 0; i < x; i++)//random A generator nambers from 0 to 99 with length = A_length
        {
            if (ix==0) //if need to upnambers in array flag
            {
                array[i] = Math.floor(Math.random() * 30);//generate number
                if (array[i]< array[i-1])//if to small
                {   z = Math.floor(Math.random() * 10)//up one char namber
                    array[i] = array[i-1] + z;
                }
            }
            else array[i] = Math.floor(Math.random() * 100);// 1 dimention array new number
         }
    //}
  //  }
return array;
}  
 
function massiv_sum(array_1, array_2){//Ex.1 two arrays summ, work with first dimention of array's
    var array =[];
    array.length = (array_1.length+array_2.length); 
    var i1=0, i2=0;
    for (var i=0; i<array.length; i++)
    {
        if (array_1[i1]==array_2[i2])
        {
            array[i]=array_1[i1]; 
            array[i+1]=array_2[i2];
            i1++;
            i2++;
            i++;
            continue;
        } 
        else if (array_1[i1]<array_2[i2])
        {
            array[i]=array_1[i1]; 
            i1++;
            continue;
        }
        else if (array_1[i1]>array_2[i2])
        {
           array[i]=array_2[i2]; 
           i2++; 
           continue;
        }
        else if (array_1[i1]) 
        {
            array[i]=array_1[i1];
            i1++;
            continue;
        }
        else
        {
            array[i]=array_2[i2]; 
            i2++; 
            continue;          
        }
        
 
    }
    return array;
}
 
function crypt(str) {//Функция кодирует вводимый текст любой длинны а также дополняет ключевой массив новыми записями если в ключе не наудены соответствия
    var code_ind = key.length; //индекс нового символа следующий за последним индексом в существующем массиве
    var string = str.split('');//бъем кодируемое слово на массив символов
    for (i = 0; i < string.length; i++)// берем по очереди символы из массива кодируемого слова
    {
        for (j = 0; j < key_arr.length; j++) //перебираем ключ в поисках нужного символа
        {
            if (string[i] == key_arr[j][0]) //символ найден
            {
                if (key_arr[j][1] > 1) //проверяем вхождений больше 1
                {
                    if (key_arr[j][2] == 0)//если символ проверяеться впервые
                    {
                        key_arr[j][2] = 1; //пишем в масив что брали 1 
                        string[i] = key_arr[j][3]; //добавляем индекс первого вхождения
                        break;
                    }
                    else //если проверка не первая
                    {
                        if (key_arr[j][1] > key_arr[j][2]) //количество проверок меньше количества индексов 
                        {
                            key_arr[j][2]++;//увеличиваем индекс использования символа;
                            string[i] = key_arr[j][(key_arr[j][2] + 2)]; //берем следующий индекс
                            break;
                        }
                        else //количество проверок равно количеству индексов так как больше быть не может
                        {
                            key_arr[j][2] = 1;//делаем снова 1 использование
                            string[i] = key_arr[j][3];// пишем первый индеск
                            break;
                        }
                    }
                }
                else //входжение одно
                    {
                        string[i] = key_arr[j][3];
                        break;
                    }
            }
            else //вхождение в ключе не найдено
            {
                if (key_arr.length == (j+1))//проверяем все ли ключи проверены
                {
                   key_arr.push([string[i], 1, 0, code_ind])//если всепроверили то новая запись с недостающим символом индекс создаём следующий от последнего
                   string[i] = code_ind; 
                   code_ind++;
                   break;
                }
                else continue;//не все ключи проверены
            }
        }
    }
    return string;
}
 
function decrypt(arr){// функция декодирувет зашифрованный масив обратно в строку
  for (var i=0; i < arr.length; i++)
   {
     for ( var j=0; j < key_arr.length; j++)
      {
        for (var x=0; x < key_arr[j][1]; x++)
          {
            if (arr[i] == key_arr[j][x+3])
              {
                 arr[i] = key_arr[j][0];
              }
             else continue;
          }
      }
   }
return arr.join('');
}
 
function keygen(){//функция создания криптографигеского ключ
    var id_count = [];
    key_arr= [];
    key = key_crypt.split('');
    for (var i=0; i<key.length; i++)//перебираем буквы по очереди
    {   
        if (id_count.indexOf(key[i]) == -1 )// символа нет в массиве 
        {   
            id_count.push(key[i]);
            key_arr.push([key[i],1,0,i]);
            if (key_crypt.indexOf(key[i]) != key_crypt.lastIndexOf(key[i]))//Вхождение не одно
            {
                var x = (key_arr.length-1);
                for (var j=(i+1); j<key.length; j++)//ищем все вхождения c последнего добавления и создаём таблицу
                {
                    if (key_arr[x][0]==key[j])//если есть задаём вхождения +1 в id вхождения в след ячейку
                    {
                        key_arr[x].push(j);
                        key_arr[x][1]++;
                    }
                    else continue;                       
                }
            }
            else continue;
        }
        else continue; //есть в таблице пропускаем
    }
return;  
}

function a_plus(){//cirkle functoin a+
     divv = document.body.children[7];
    function plus_one(){// Sub Function add +a our string
        divv.innerText  += ' + a ';//update text string
        a += '+ a '
        console.log(a);
    return;
    }
    if (a_ind)//first run marker
    {   
        a_ind=false;//change marker
        divv.innerText = a;
        console.log(a);
    }
    else
    {
        plus_one();//run sub function
    }
return;
}
 
 
 
function one(f) 
{
divv = document.body.children[1];
arr1 = int_massiv_creator(f);
console.log(divv);
divv.innerText = 'Первый массив : '+  arr1 ;
arr2 = int_massiv_creator(f);
divv = document.body.children[2];
console.log(divv);
divv.innerText = 'Второй массив : '+  arr2 ;
return;

}
 
function two()
{
divv = document.body.children[4];
arr3 = massiv_sum(arr1,arr2);
divv.innerText = 'Сумма 1 и 2 массивов : '+ arr3;
console.log(divv);
return;
}
 
function tre()
{
a_plus();
return;
}
 
function foor()
{ 
    if (document.body.children[9].children[0].value) key_crypt = document.body.children[9].children[0].value;
    var string_to_cript = document.body.children[10].children[0].value;
    if (crypt_index)
    {      
        if (string_to_cript != '')
        { 
            divv = document.body.children[8]
            keygen();
            crypt_index= false;
           //divv.innerText = 'Decript';
            divv = document.body.children[11];
            cripted = crypt(string_to_cript); 
            divv.innerText = 'Шифровка - ' + cripted;
        }
        else {
            alert ('Слово для шифрования обязательно!');
            return;
        }
    }
    else
    {   
        divv = document.body.children[12]
        crypt_index=true;
        string_to_cript = decrypt(cripted);
        divv.innerText  = ' Дешефровка - ' + string_to_cript;     
    }
return;
}
//var divv =  document.body.children[4];
//console.log(divv);
//divv.children[0].innerText = "Пиписька друг человека";


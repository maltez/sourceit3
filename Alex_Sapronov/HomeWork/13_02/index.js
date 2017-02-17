var arr1=[], arr2=[], arr3=[];
var a_ind=true;
var a='a';
var crypt_index = 0;
var key_crypt = 'It was in July, 1805, and the speaker was the well-known Anna Pavlovna Scherer, maid of honor and favorite of the Empress Marya Fedorovna. With these words she greeted Prince Vasili Kuragin, a man of high rank and importance, who was the first to arrive at her reception. Anna Pavlovna had had a cough for some days. She was, as she said, suffering from la grippe; grippe being then a new word inSt. Petersburg, used only by the elite. '
function int_massiv_creator(ix)//array 2+ dimention generator (0)=0x dimention array have up nambers (!0)=0x ramdom
{ 
  var x=0,y=0,z=0;//dimentions of array
  var array = [];//new array to return it

 //  x = prompt('Dimentions(1-3)');//
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
    for (var i=0; i<x; i++)//random 2 dimention A generator nambers from 0 to 99 with leigth and heith 
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
    {
        for (i = 0; i < x; i++)//random A generator nambers from 0 to 99 with leigth = A_leigth
        {
            if (ix==0) //if need to upnambers in array flag
            {
                array[i] = Math.floor(Math.random() * 100);//generate number
                if (array[i]< array[i-1])//if to small
                {   z = Math.floor(Math.random() * 10)//up one char namber
                    array[i] = array[i-1] + z;
                }
            }
            else array[i] = Math.floor(Math.random() * 100);// 1 dimention array new number
         }
    }
return array;
}  

function massiv_sum(array_1, array_2)//Ex.1 two arrays summ, work with first dimention of array's
{
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

function code()
{
string= prompt('string'); 

var sa=[];
crypt_index = 0 ? 1:0;
sa = keygen();
console.log (sa);
}

function keygen()
{
    var key_arr=[], key = key_crypt.split('');
    for (var i=0; i<key.length; i++)//перебираем буквы по очереди
    {
        key_arr[i]=[];
        if (i<0)// если не первая
            {
            if (key_arr.indexOf(key[i] == -1))// нет еще в таблице
               {
                if (key.indexOf(key_arr[i][0]) != key_crypt.lastIndexOf(key_arr[i][0]))//Вхождение  не одно
                    {
                        var x=1;
                        for (var j=0; j<key_arr.length; j++)//ищем все вхождения и создаём таблицу
                         {
                            if (key_arr[i][0]==key[j])//если есть задаём вхождения +1 b id вхождения в след ячейку
                            {  
                                key_arr[i][1] += x;
                                key_arr[i][2]=0;
                                key_arr[i][(key_arr[i][x+2])] = j;
                            }
                             else
                             {
                                 continue;
                             }
                       
                        }
                    }
                else //вхождение одно
                    {
                        
                          key_arr[i][1]=1;
                          key_arr[i][2]=0;
                          key_arr[i][3]=i;
                          key_arr[i][0]=key[i];
                    }
                }
        else continue; //есть в таблице пропускаем
        }
        else//если первая
        {   
             key_arr=[i][i]=key[i];
             key_arr[i][++i]=1;
             key_arr[i][++i]=0;
        }
    }
        return key_arr;
}




/*string= prompt('string'); 
key= key_crypt;
var sa=[];
crypt_index = 0 ? 1:0;


for (var i=0;i<string.length;i++)//номер симвода в сообщении
{
    for (var j=0; j<key.length; j++)//перебираем ключ 
    { 
        if (string.charAt(i)==key.charAt(j))//нашёл вхождение
        {
            sa[i]=key.charAt(j);// отлично запишем id в массив шифровку и прерваем цикл

            if(key.indexOf(sa[i]) == key.lastIndexOf(sa[i]))//вхождение единственное?.
            {
                break; //прерываемся
            }

            else// вхождение не единственное;
                // проводилась ли индексация вхождений
                for (var id = 0; id<key.length; id++)//индексируем входжения в массив 0 строка - символ, 2 строка - колво-вхождений, 3 текущее вхождение в формате[3+номер] 3+ вхождени;
                   {
                    if (sa[i]=)
                } // выясняем сколько кхождений и их id
            {
                for (var x=key.indexOf(sa[i]); x<key.length; x++)//ищу следующее вхождение символа в ключе
                {
                    if (key.indexOf(sa[x]) == key.lastIndexOf(sa[i])
                }
 
        }
        else
        {

        }
    }
}
return;
}*/

function a_plus()//cirkle functoin a+
{
    function plus_one()// Sub Function add +a our string
    {
        a = (a + '+a');
        console.log(a);
        return;
    }
    if (a_ind)//first run marker
    {   
        console.log(a);
        a_ind=false;//change marker
    }
    else
    {
        plus_one();//run sub function
    }
return;
}



function one(f) 
{
arr1 = int_massiv_creator(f);
console.log(arr1);
arr2 = int_massiv_creator(f);
console.log(arr2);
return;
}

function two()
{
arr3 = massiv_sum(arr1,arr2);
console.log(arr3);
return;
}

function tre()
{
a_plus();
return;
}

function foor()
{
keygen();
return;
}





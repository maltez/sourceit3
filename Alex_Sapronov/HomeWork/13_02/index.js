var arr1=[], arr2=[], arr3=[];//arrays 
var a_ind = true;//lebel to a+ function
var a = 'a '; // start string to a+ function
var cripted;//crypted array;
var crypt_index = true;//to select crypt or decrypt one one button
var key_crypt = ' '//keyword to crypt
var key_arr = [], key = [];//key in array and keyword array
var divv = {};//objekt to write on the page


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
    for (var i=0; i<array.length; i++)//loking for smaler namber and push it first
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
 
function crypt(str) {//Function encodes the input text of any length and adds an array of key new records if the key is not matching Naude
    var code_ind = key.length; //Index of the new character following the last index in an existing array
    var string = str.split('');//Divide the encoded word to an array of characters
    for (i = 0; i < string.length; i++)// take turns symbols from the encoded word
    {
        for (j = 0; j < key_arr.length; j++) //iterate the key to find the right character
        {
            if (string[i] == key_arr[j][0]) //char finded
            {
                if (key_arr[j][1] > 1) //how mach time char have in key
                {
                    if (key_arr[j][2] == 0)//if first inspection
                    {
                        key_arr[j][2] = 1; //write to array wtat we take char onse 
                        string[i] = key_arr[j][3]; //take first inddex to coded string
                        break;
                    }
                    else //if second inspection
                    {
                        if (key_arr[j][1] > key_arr[j][2]) //taked > all indexes
                        {
                            key_arr[j][2]++;//taked ++;
                            string[i] = key_arr[j][(key_arr[j][2] + 2)]; //take next index
                            break;
                        }
                        else //take == all indexes
                        {
                            key_arr[j][2] = 1;//taken = 1
                            string[i] = key_arr[j][3];// write first index
                            break;
                        }
                    }
                }
                else //char in key onetime
                    {
                        string[i] = key_arr[j][3];//string take only one index
                        break;
                    }
            }
            else //there is no match in the key, create a match
            {
                if (key_arr.length == (j+1))//if all char cheked
                {
                   key_arr.push([string[i], 1, 0, code_ind])//new char add in key array
                   string[i] = code_ind; //new index in coded strind
                   code_ind++;//code index ++
                   break;
                }
                else continue;//not all cheked
            }
        }
    }
    return string;
}
 
function decrypt(arr){//decrypts the encrypted string in an array
  for (var i=0; i < arr.length; i++)//chek all numbers in array
   {
     for ( var j=0; j < key_arr.length; j++)//chek string in key array
      {
        for (var x=0; x < key_arr[j][1]; x++)//chek all id's in key array
          {
            if (arr[i] == key_arr[j][x+3])//if matched then take char
              {
                 arr[i] = key_arr[j][0];
              }
             else continue;
          }
      }
   }
return arr.join(''); //join aaray to a string
}
 
function keygen(){//Creating a cryptographic key to encrypt and decrypt
    var id_count = [];//take 2 way string
    divv= document.body.children[13];
    key_arr= [];//zero out
    key = key_crypt.split('');//split key word to array
    for (var i=0; i<key.length; i++)//iterate over the characters in succession
    {   
        if (id_count.indexOf(key[i]) == -1 )//no in array 
        {   
            id_count.push(key[i]);//nake new char in 2 way array
            key_arr.push([key[i],1,0,i]);//nake new char fieldin key array
            if (key_crypt.indexOf(key[i]) != key_crypt.lastIndexOf(key[i]))//the character repeated in keyword 
            {
                var x = (key_arr.length-1);
                for (var j=(i+1); j<key.length; j++)//take all id's of character
                {
                    if (key_arr[x][0]==key[j])//and + one id and + 1 entening in character field if findind new index
                    {
                        key_arr[x].push(j);
                        key_arr[x][1]++;
                    }
                    else continue;                       
                }
            }
            else continue;
        }
        else continue; //have in array
    }
divv.innerText ='Кодовый массив' + key_arr;//write to page the array
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


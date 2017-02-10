function average(number_1,number_2,number_3,number_4,number_5)//avarege from 5 numbers.
{
    var num_arr = [number_1,number_2,number_3,number_4,number_5,0];//define an array of the parameters passed and 5-th parameter for result
    console.log('функция получила такие значения - '+num_arr[0]+', '+num_arr[1]+', '+num_arr[2]+', '+num_arr[3]+', '+num_arr[4]);
    for (var i=0; i < 5; i++) //check that the number entered
    {
        if ( isNaN(num_arr[i]) || num_arr[i]=='' )//if is not a number or '' (empty string)
        {
            console.log('Параметр под номером '+(i+1)+' не является числом, функция прерывает свою работу.');// output in the console parameter that is not a number
            return; //break function
        }
        else
        {
            num_arr[5] +=parseInt(num_arr[i]);//add up the numbers
        }
    }
    num_arr[5] /= 5;
    return (num_arr[5]);//Return the average arithmetic 
}

function even_before_number(number)//calculate the even before the job number
{    
    console.log('функция получила такoе значениe - '+number);
    if ( isNaN(number) || number ==''|| number<=1 )//if is not a number or '' (empty string) or too small
        {
            console.log('Параметр не являетcя числом или же меньше 2, функция прерывает свою работу.');// output in the console parameter that is not a number
            return; //break function
        }
    for(var i=2; i<=number; i+=2) //write to console even numbers to the user number
    {
        console.log(i);
    }
    return;
}
function hello_writer(number)//Write Hello+ in console
{
    var hello_line='Hello ';//string that we write to console
    console.log('функция получила такoе значениe - '+number);
    if ( isNaN(number) || number ==''|| number<=0 )//if is not a number or '' (empty string) or too smal
     {
            console.log('Параметр не являетcя числом или же меньше 1, функция прерывает свою работу.');// output in the console parameter that is not a number
            return; //break function
     }
    for (var i=1; i<=number; i++ )//repeat while we reach the user number or 100
    {
        if (i==100) return;//if we reached 100. it's interrupt function
        console.log(hello_line);//Write Hello Hello... to console
        hello_line += 'Hello ';// add one more Hello to the string
    }
return;
}

function basic_before_number(number)//finding the basic numbers from 1 to user number
{
    var num_arr=[], ind=0, ind_2;
    console.log('функция получила такoе значениe - '+number);
    if ( isNaN(number) || number ==''|| number<=0 )//if is not a number or '' (empty string) or too smal
     {
            console.log('Параметр не являетcя числом или же меньше 1, функция прерывает свою работу.');// output in the console parameter that is not a number
            return; //break function
     }
    if (number==1)// only 1 is basic
     {
         console.log('Натуральные числа - 1');
         return;
     }
    if (number==2)// only 1 and 2 is basic
     {
         console.log('Натуральные числа - 1,2');
         return;
     }
     if (number>2) //user number is bigest then 2
     {
         num_arr[0]=1;
         num_arr[1]=2;
         ind_2=2;
        for (var i=2; i<=number; i++)// going up to user number
        {
            for (var j=2; j<i; j++)//chek it is divided evenly on the numbers from 2 to UserNamber-1
            {
                if (i%j==0) //if divided then break
                {
                ind=0;
                break;
                }
                ind=1; //if not divided we chek the basic index
            }
            if (ind==0)//goin to next number
            {
            continue;
            }
            else// add the basic number in to array and index=0
            {
            num_arr[ind_2]=i;
            ind_2++;
            ind=0;
            }
        }
    console.log('Натуральные числа - '+num_arr);// write to consol all findede natural numbers
    }
return;
}

var number_array = [], avarege_result, hello_num;//define array to the user numbers, variable to save avarege result, line counter to write hello
console.log ('Ведите 5 чисел');
for (var i=0; i < 5; i++)//enter 5 numbers
    {
       number_array[i] = prompt('Ведите '+(i + 1)+' число из 5');
    }
avarege_result = average(number_array[0],number_array[1],number_array[2],number_array[3],number_array[4]); //use avarege function on user entred numbers
if (isNaN(avarege_result)) //if function not take avarege write to console this
    {
        console.log('Не возможно вычеслить среднее арифметическое')
    }
else //write to console avarege result
    {
        console.log('Среднее арифметическое от введённых вами чисел = '+ avarege_result );
    }
console.log ('Для работы функции вывода чётных чисел до заданного, введите число');
even_before_number(prompt('Ведите число'));//fidding even from 1 to user number
console.log ('Для работы функции вывода линий Hello, введите число');
hello_writer(prompt('Ведите число'));//write hello line in to consol 
console.log ('Для работы функции вывода натуральных чисел до заданного, введите число');
basic_before_number(prompt('Ведите число'));//finding the basic numbers from 1 to user number
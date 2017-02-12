
var array = [], array_2demention = [], array_leigth = 0, str;
var person = {
    age : 25,
    name: 'Dan',
    work_status: true,
    last_name: 'Libovsky',
    profesion: 'Ingenner',
    id: 243
};

function determinant(array_2_dimention)//Ex.1
{


}

function polindrom(string)//Ex.2 check text polindrom
{   
    if (string == undefined)
    {
        console.log ('String undefined');
        return false;
    }
    else if (string.length > 1)
    {
        var arr = string.split('');//stlit string to char array
        for (var i=0; i < arr.length; i++)//probeloy removed, commas, periods, exclamation and question marks. reduced insensitive
        {
            if (arr[i] == ' '||arr[i] == ','||arr[i] == '.'||arr[i] == '?'||arr[i] == '!')//looking for " " "," "." "!" "?"
            {
                for ( var j=i; j<(arr.length-1); j++)//delete a character from an array and shift characters
                {
                    arr[j]=arr[j+1];
                }
                arr.length--;
                i--;
            }
            arr[i] = arr[i].toLowerCase();//do lower case all character
        }
        for (i=0; i < (arr.length/2); i++)//iterate through an array of character at a time until the middle because polindrom a mirror text about the middle
        {
            if (arr[i] != arr[arr.length-(i+1)])//if the characters are not the same interrupt function, and we return false
            {
                return false;
            }     
        }
        return true; //i check all text and return true
    }
    else {
        console.log('String to small')
        return false;
    }
}

function sum_even_values(arr)//Ex.3 the sum of the even index values
{   
    var sum = 0;
    for (var i = 0; i < arr.length; i++ ) //iterate over the array Index
    {
        if (i%2 != true)//if index even i add it value to summ
        {
            sum += arr[i];
        }
    }
    return sum;
}

function max_value(arr)//Ex.4 searching and return max value from array
{   
    var max_index=0;
    for (var i = 0; i < arr.length; i++ ) //iterate over the array Index
    {
        if (arr[max_index]<arr[i])//if value is bigger i take new index
        {
            max_index=i;
        }
    }
    return arr[max_index];
}
function delete_string_key(obj)//Ex.5 removes from object all of string parameters
{
    for (key in obj)// iterate over all the keys of the object
    {
        if (typeof obj[key] == 'string')//if type of object key is string then delet key
        {
            delete obj[key];
        } 
        else continue;
    }
    return obj;
}
function not_even_key(arr)//Ex.6 take array and return new array with only not even index
{
    var arr_new = [], j = 0;
    for (var i = 1; i < arr.length; i++ ) // check all key in array
    {
        if (i%2 == true)// if not even save to new array
        {
            arr_new[j] = arr[i];
            j++;
        }
     }
    return arr_new;
}

array_leigth = +prompt('enter array leigth');  

for (var i = 0; i < array_leigth; i++)//random 2 dimention array generator nambers from 0 to 99 with leigth = array_leigth heith = array_leigth
{
    array_2demention[i]=[];
    for (var j = 0; j < array_leigth; j++)
    {
        array_2demention[i][j] = Math.floor(Math.random() * 100);
    }
}

for (i = 0; i < array_leigth; i++)//random array generator nambers from 0 to 99 with leigth = array_leigth
{
    array[i] = Math.floor(Math.random() * 100);
}

console.log('Not even keys in array - '+not_even_key(array));
console.log('summ of the even key values = '+sum_even_values(array));
str = prompt('enter the string to check whether it polindrom');
polindrom(str) ? console.log('string - "'+str+'" is polindrom') : console.log('string - "'+str+'" is not polindrom');
console.log('Maximum value in array = '+max_value(array));
person = delete_string_key(person);
console.log('object with out string key - ')+ console.log(person);


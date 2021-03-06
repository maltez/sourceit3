
var A = [], A_2demention = [], A_leigth = 0, str;
var person = {
    age : 25,
    name: 'Dan',
    work_status: true,
    last_name: 'Libovsky',
    profesion: 'Ingenner',
    id: 243
};

function determinant(A)//Ex.1 Determinant NxN matrix
{   
    var N = A.length, subA = [], detA = 0, B = [], denom = 1, exchanges = 0, determin;
    if (N == 0) return 0;
    if (N == 1) return determin = A[0][0];//1x1 matrix determinant formula
    if (N == 2) return determin = (A[0][0]*aA[1][1]) - (A[0][1]*A[1][0]);// 2x2 matrix determinant formula
    if (N == 3) return determin = (A[0][0]*A[1][1]*A[2][2]) + (A[0][1]*A[1][2]*A[2][0]) + (A[0][2]*A[1][0]*A[2][1]) - (A[0][2]*A[1][1]*A[2][1]) - (A[0][0]*A[1][2]*A[2][1]) - (A[0][1]*A[1][0]*A[2][2]);
    if (N >= 4) 
    {
        for (var i = 0; i < N; ++i) 
        {
            B[i] = [];
            for (var j = 0; j < N; ++j) B[i][j] = A[i][j];
        }
        for (var i = 0; i < N - 1; ++i) 
        {
            var maxN = i, maxValue = Math.abs(B[i][i]);
            for (var j = i + 1; j < N; ++j) 
            {
                var value = Math.abs(B[j][i]);
                if (value > maxValue) 
                {
                    maxN = j; maxValue = value;
                }
            }
            if (maxN > i) 
            {
                var temp = B[i]; B[i] = B[maxN]; B[maxN] = temp;
                ++exchanges;
            }
            else 
            { 
                if (maxValue == 0) return maxValue; 
            }
            var value1 = B[i][i];
            for (var j = i + 1; j < N; ++j)
            {
                var value2 = B[j][i];
                B[j][i] = 0;
                for (var k = i + 1; k < N; ++k) B[j][k] = (B[j][k] * value1 - B[i][k] * value2) / denom;
            }
                denom = value1;
        }                                         
        if (exchanges % 2) return -B[N - 1][N - 1];
        else return B[N - 1][N - 1];
    }
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
        var arr = string.split('');//stlit string to char A
        for (var i=0; i < arr.length; i++)//probeloy removed, commas, periods, exclamation and question marks. reduced insensitive
        {
            if (arr[i] == ' '||arr[i] == ','||arr[i] == '.'||arr[i] == '?'||arr[i] == '!')//looking for " " "," "." "!" "?"
            {
                for ( var j=i; j<(arr.length-1); j++)//delete a character from an A and shift characters
                {
                    arr[j]=arr[j+1];
                }
                arr.length--;
                i--;
            }
            arr[i] = arr[i].toLowerCase();//do lower case all character
        }
        for (i=0; i < (arr.length/2); i++)//iterate through an A of character at a time until the middle because polindrom a mirror text about the middle
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
    for (var i = 0; i < arr.length; i++ ) //iterate over the A Index
    {
        if (i%2 != true)//if index even i add it value to summ
        {
            sum += arr[i];
        }
    }
    return sum;
}

function max_value(arr)//Ex.4 searching and return max value from A
{   
    var max_index=0;
    for (var i = 0; i < arr.length; i++ ) //iterate over the A Index
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
function not_even_key(arr)//Ex.6 take A and return new A with only not even index
{
    var arr_new = [], j = 0;
    for (var i = 1; i < arr.length; i++ ) // check all key in A
    {
        if (i%2 == true)// if not even save to new A
        {
            arr_new[j] = arr[i];
            j++;
        }
     }
    return arr_new;
}

A_leigth = +prompt('enter A leigth');  

for (var i = 0; i < A_leigth; i++)//random 2 dimention A generator nambers from 0 to 99 with leigth = A_leigth heith = A_leigth
{
    A_2demention[i]=[];
    for (var j = 0; j < A_leigth; j++)
    {
        A_2demention[i][j] = Math.floor(Math.random() * 100);
    }
}

for (i = 0; i < A_leigth; i++)//random A generator nambers from 0 to 99 with leigth = A_leigth
{
    A[i] = Math.floor(Math.random() * 100);
}

console.log('Not even keys in A - '+not_even_key(A));
console.log('summ of the even key values = '+sum_even_values(A));
str = prompt('enter the string to check whether it polindrom');
polindrom(str) ? console.log('string - "'+str+'" is polindrom') : console.log('string - "'+str+'" is not polindrom');
console.log('Maximum value in A = '+max_value(A));
person = delete_string_key(person);
console.log('object with out string key - ')+ console.log(person);
console.log('Determinant of ' + A_2demention.length+'x' + A_2demention.length + ' matrix ' + A_2demention + ' = ' + determinant(A_2demention) );

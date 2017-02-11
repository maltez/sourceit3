var array = [], array_2demention = [];

function not_even_key(arr)//Ex.6
{
    var arr_new = [], j = 0;
    for (var i = 1; i < arr.length; i += 2) 
    {
        arr_new[j] = arr[i];
        j++;
    }
    return arr_new;
}

for (var i = 0; i < 10; i++)//налолним массив рандомными целыми числами от 0 до 100
{
    array_2demention[i]=[];
    for (var j = 0; j < 10; j++)
    {
        array_2demention[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
    }
}

for (i = 0; i < 10; i++)//налолним массив рандомными целыми числами от 0 до 100
{
    array[i] = Math.floor(Math.random() * (100 - 1) + 1);
}

console.log(not_even_key(array));
console.log(array_2demention);

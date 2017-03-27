var even = function (arr)//Ex.6 take A and return new A with only even number
{
    var arr_new = [];
    if (arr == undefined) {
        throw new Error('Array undefined');
    }

    for (var i = 0; i < arr.length; i++) // check array by index
    {
        if (typeof arr[i] !== 'number') {
            throw new Error('Uninspected charakter');
        }

        if (arr[i] < 0) {
            throw new Error('Number must be zero or less');
        }

        if (parseInt(arr[i])==arr[i]) {
            if (arr[i] % 2 == false) {
                arr_new.push(arr[i]);
            }
        }
        else {
            throw new Error('Number must be integer');
            }
    }
    return arr_new;
}
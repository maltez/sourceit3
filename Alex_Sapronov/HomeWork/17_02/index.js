var array = [];
var vowel_symbols = ['a','e','y','u','i','o'];//arra with Vowel symbols
function plus_one(array){//Task one, add 1 to each array index if it's has namber value
   var out_message = document.body.children[3]
   for (var i=0; i<array.length ; i++ ){
        try {
            if (isNaN(array[i]))//generate error if NaN or undefined
            {
            throw new Error('Non A Nabber');
            }
        }
        catch (err){
            out_message.innerText = 'Error in ( ' + i + ' ) array ID, it\'s = '+ array[i];//Write error on WebPage
            console.log(out_message.innerText);
            return; 
        }
        array[i]++;//Add one to value of array[i]
    }
out_message.innerText = 'Array = ' + array;//Write array on WebPage
console.log('Array = ' + array);
return;
}

function symbols_delete(text, mask){//Task 2 remove symbols from string take mask array 
    //work with array of chars of string as first argument
    var string = text, string_out=[];//take value of input (string)
    for (var c=0; c<string.length; c++){//iterate over the characters in succession
         if ( mask.indexOf(string[c]) == -1 ){//if there is not a mask 
            string_out.push(string[c]);//copy character to new string
            }
            else {//it there is a mask 
            continue;
           }
        }
    string_out = string_out.join('');//convert our array to string 
    string = document.body.children[6];
    string.innerText = 'Text = ' + string_out;//write string to web page
    console.log('Text = ' + string_out);
    return;
}

function take_only_polindrom(string_arr){//Task 3, chek user text for polindrom words
    /* я немного изменил данное условие функция принимает не массив со строками а пользовательский
     текст и разбивает его на массив слов, для удобства проверки работоспособности
     тоесть проверяет не строки на полиндром, а слова,  но и с массивом строк тоже будет работать
     если удалить .split(' ') из 49 строки*/
var string_out =[];
var str = string_arr.split(' ');//split user text to array with words 
for (var i=0; i<str.length; i++){
    if ( polindrom(str[i]) ){//chek word and return boolean 
        string_out.push(str[i]);//if word is polindrom copy to new array
    }
    else continue;//next word
}
str = document.body.children[9];
str.innerText = 'Polyndroms = ' + string_out;//Write array on WebPage
console.log('Polyndroms = ' + string_out);
return string_out;
}

function select_words(string_arr,x,y){//Task 4 select only string with x<=length<=y
    /* я немного изменил данное условие функция принимает не массив со строками а пользовательский
     текст и разбивает его на массив слов, для удобства проверки работоспособности
     тоесть проверяет не строки на длинну, а слова,  но и с массивом строк тоже будет работать
     если удалить .split(' ') из 67 строки*/
     var z=document.body.children[12];
     var string_out =[];
     var str = string_arr.split(' ');//split user text to array with words
    for (var i=0; i<str.length; i++){//iterate over the array elements
       if (x <= str[i].length && str[i].length <= y){//check the length of the array element
           string_out.push(str[i])//add to new array new element
       }
       else continue;
    }
    z.innerText ='Words = '+string_out;//write to web page result
    console.log('Words = '+string_out);
    return string_out;
}

function arifmetic(x,involution,y){
    var z=document.body.children[17];
    if (typeof involution !== 'function'){
       console.log('Non a function');
        return;
    }
     if (isNaN(x)){
        console.log('First argument is not a namber');
        return;
    }
    if (isNaN(y)){
        console.log('Second argument is not a namber');
        return;
    }
    z.innerText = 'Result = '+ involution(x,y); 
    return involution(x,y);
}
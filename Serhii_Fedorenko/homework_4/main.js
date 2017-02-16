// combine arrays
function task_1(){
var arr = [1,2,3,4];
var arr2 = [5,6];
    function array_join(arr, arr2){
       return arr.concat(arr2);
    }

console.log(array_join(arr, arr2));
}

// print fifty 'a' through closing
function task_2(){
var a = '';
var i = 50;
    function print_AAA(){
       return a += 'a';
    }
    do{
        console.log(print_AAA());
        i--;
    } while(i > 0);
}

// Encode and decode words through poems 
function task_3(){
var poem = "В чём смысл жизни — риторический вопрос, Который каждый мыслящий с собою нёс. А смысл в том — чтоб смысл обрести. Себя, спасая — мир спасти";
var word = prompt('Введите слово которое нужно зашифровать');
var code = [];
    function encrypt(poem, word){
        var index_arr;
        word = word.split('');
        for(var i = 0; i < word.length; i++){ 
            index_arr = poem.indexOf(word[i]);
            if(code.indexOf(index_arr) > -1){   // check the index replay
                code.push(poem.indexOf(word[i], ++index_arr));  // in an array 'code' record next indexes letters
            } else {
                code.push(index_arr);   // in an array 'code' record indexes letters
            }
        }
    return code;
    }

    function decrypt(poem, code){
        var decode = '';
        for(var i = 0; i < code.length; i++){
            if(code[i] == -1){  // if in the poem, there is no predetermined letter, then change it to X
                decode += 'X';
            } else {
                decode += poem[code[i]];
            }
        }
    return decode;
    }
console.log(encrypt(poem, word));
console.log(decrypt(poem, code));
}
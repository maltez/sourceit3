var array = [];
var vowel_symbols = ['a','e','y','u','i','o'];//arra with Vovel symbols
var z; 
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
console.log(array);
return;
}

function symbols_delete(mask){//Task 2 remove symbols from string take mask array
    var string = document.body.children[4].children[0].value, string_out=[];//take value of input (string)
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
    console.log(string_out);
    return;
}

function take_only_polindrom(){//Task 3, chek user text for polindrom words
var inner_text = document.body.children[7].children[0].value, string_out =[];
var str = inner_text.split(' ');//split user text to array with words
for (var i=0; i<str.length; i++){
    if ( polindrom(str[i]) ){//chek word and return boolean 
        string_out.push(str[i]);//if word is polindrom copy to new array
    }
    else continue;//next word
}
str = document.body.children[9];
str.innerText = 'Polyndroms = ' + string_out;
return string_out;
}

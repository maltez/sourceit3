function array_generator(){//generate 10 indexes rumdom number arra with Randomly NaN , Undefined and string values
  var z =  document.body.children[1], x=10 ;//Length if array
  array = [];//new array to return it
        for (i = 0; i < x; i++)//random A generator nambers from 0 to 99 with
        {
           array[i] = Math.floor(Math.random() * 100);//generate number
        if (array[i]%17==0){ //to random generate NaN value
            array[i] = 'e' / 3;
        }   
        if (array[i]%19==0){  //to random generate Undefined value
            delete array[i];
         }
        if (array[i]%21==0){  //to random generate string value
            array[i] = 'any_text';
         }
    }
z.innerText = ' Array = '+ array;//write array in to a Web page
console.log(array);
return array;
}  

function polindrom(string){
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
        return true; //check all text and return true
    }
    else {
        console.log('String to small')
        return false;
    }
}
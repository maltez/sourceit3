function array_generator(){//generate 10 indexes rumdom number arra with Randomly NaN , Undefined and string values
  var z =  document.body.children[1], x=10 ;//Length if array
  array = [];//new array to return it
        for (i = 0; i < x; i++)//random A generator nambers from 0 to 99 with
        {
           array[i] = Math.floor(Math.random() * 30);//generate number
        if (array[i]%11==0){ //to random generate NaN value
            array[i] = 'e' / 3;
        }   
        if (array[i]%9==0){  //to random generate Undefined value
            delete array[i];
         }
        if (array[i]%12==0){  //to random generate string value
            array[i] = 'any_text';
         }
    }
z.innerText = ' Array = '+ array;//write array in to a Web page
console.log(array);
return array;

}  
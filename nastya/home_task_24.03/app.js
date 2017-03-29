var arr = [1,2,3];

var getEvenNumbers = function(arr){
   var arrEvenNumbers = [];
    for(var i = 0; i <= arr.length-1; i++){
        if (typeof arr[i] === 'number'){ //check type of array's elements
            if(arr[i] > 0){ //check if array consist of numbers > 0
                if(parseInt(arr[i]) === arr[i]){ // Numbers must be integers

                     if (arr[i]%2 === 0){
                         arrEvenNumbers.push(arr[i]); // add to array all even numbers
                         return arrEvenNumbers;
                     }   
                }
              else throw new Error ('Numbers must be integers' )     
                 
            }
             else throw new Error ('The array must consist of numbers > 0' )
        }
        else throw new Error ('The array must consist of numbers' )
    }
    
}





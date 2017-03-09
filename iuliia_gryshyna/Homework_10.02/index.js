//determinant of matrix
function determinant(){
 var matrix=[
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,16]
 ];
 var result;

    function getDet(matrix){
        result = matrix[0][0]*(matrix[1][1]*(matrix[2][2]*matrix[3][3] - matrix[2][3]*matrix[3][2]) - matrix[1][2]*(matrix[2][1]*matrix[3][3] - matrix[3][1]*matrix[2][3]) + matrix[1][3]*(matrix[2][1]*matrix[3][2] - matrix[2][2]*matrix[3][1]))
        -matrix[0][1]*(matrix[1][0]*(matrix[2][2]*matrix[3][3] - matrix[2][3]*matrix[3][2]) - matrix[1][2]*(matrix[2][0]*matrix[3][3] - matrix[2][3]*matrix[3][0])+ matrix[1][3]*(matrix[2][0]*matrix[3][2]-matrix[2][2]*matrix[3][0]))
        + matrix[0][2]*(matrix[1][0]*(matrix[2][1]*matrix[3][3] - matrix[2][3]*matrix[3][1]) - matrix[1][1]*(matrix[2][0]*matrix[3][3] - matrix[2][3]*matrix[3][0])+matrix[1][3]*(matrix[2][0]*matrix[3][1] - matrix[2][1]*matrix[3][0]))
        - matrix[0][3]*(matrix[1][0]*(matrix[2][1]*matrix[3][2] - matrix[2][2]*matrix[3][1])- matrix[1][1]*(matrix[2][0]*matrix[3][2] - matrix[2][2]*matrix[3][0]) + matrix[1][2]*(matrix[2][0]*matrix[3][1] - matrix[2][1]*matrix[3][0]));//formula for finding determinant of the matrix
            return result;
    }
 console.log(getDet(matrix));
}


//function that show does string palindrome
 function isPalindrome(){
     var str=prompt('Enter sentense');
     var arr=[];

    function checkSentense(){
    arr=str.split('').reverse().join('');//create new array from string  
         return arr==str; //if string are the same return true 
    }
console.log(checkSentense());
}

//function for sum even elementa of the array

var arr=[10,11,12,13,14,15,16];
var result=0;
 function sumEven(){
     for (var i=0;i<arr.length;i++){
        if (i%2==0){ //check even numbers
            result += arr[i];//sum even numbers
        }  
    }
    return result;
 }
console.log(sumEven());

//function that display greatest number from array
function maxNum(arr){
    var arr=[26,13,49,163,63];
    
    function compareNum(a,b){
        if (a>b) return 1;
        if (a<b) return -1;
    }
    arr.sort(compareNum);//sorting aaray from min to max
    console.log(arr[arr.length-1]);//display last one
}

// function that deleted all values except for string

function displayString(){
    var object={a:30,b:'Hello,',c:true,d:' friend!'}
    for (var key in object){
        if (typeof(object[key])!=='string'){
            delete object[key];
        }
        else continue;
    }
    return object;
}
console.log(displayString());
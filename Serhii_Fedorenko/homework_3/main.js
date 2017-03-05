// print all elements with odd indices
function task_1(){
var mass = [1,2,3,4,5,6,7,8,9];
    function av(mass){
        var mass2 = []; 
        var j = 0;
        for(var i = 1; i < mass.length; i += 2){
            mass2.push(mass[i]);
                console.log(mass2[j]);
                j++;
            }
    }

av(mass);
}

// The sum of all the even elements
function task_2(){
var mass = [1,2,3,4,5,6,7,8,9];
var sum = 0;
    function sumEven(mass){
        for(var i = 0; i < mass.length; i++){
            if(mass[i] % 2 === 0){
                sum += mass[i];
            }
        }
    return sum;
    }
console.log(sumEven(mass));
}

// check on palindrome 
function task_3(){
var palindrome = prompt('Enter palindrome');
var reverse_P = [];
palindrome = palindrome.split('');
    for(var i = 0; i < palindrome.length; i++){
        reverse_P.unshift(palindrome[i]);
    };

    if(reverse_P.join(', ') == palindrome.join(', ')){
        console.log("palindrome");
    } else {
        console.log("not palindrome");
    }
}

/* 
Determinant of the matrix
I don't know how to automate. 
P.S. 
Написал формулу для 3х3, потому что для 4х4 было лень, 
ибо с моим подходом вышло бы в пять раз больше строк, 
а я думаю, что итак понял какого это вручную прописывать индексы...
*/
function task_4(){
var matrix = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
    function determinant(matrix){
    var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, result = 0;
    a1 = matrix[0][0]*matrix[1][1]*matrix[2][2];
    a2 = matrix[0][1]*matrix[1][2]*matrix[2][0];
    a3 = matrix[0][2]*matrix[1][0]*matrix[2][1];
    a4 = matrix[0][2]*matrix[1][1]*matrix[2][0];
    a5 = matrix[0][0]*matrix[1][2]*matrix[2][1];
    a6 = matrix[0][1]*matrix[1][0]*matrix[2][2];
    return result = a1+a2+a3-a4-a5-a6;
    }
console.log(determinant(matrix));
}

// print the maximum element of the array
function task_5(){
var mass = [1,2,3,4,5,6,7,8,9];
var max = 0;
    function maxInMass(mass){
        for (i = 0; i < mass.length; ++i) {
            if (mass[i] > max) max = mass[i];
        }
    return max;
    }
console.log(maxInMass(mass));
}

// delete all non string fields in the object
function task_6(){
var basil = {
	name: 'Vasia',
	lastName: 'Ivanov',
	age: 24,
	nickName: 'Bridge',
    islord: true
    }
    function inStr(obj){
        for (var key in obj){         
            if(typeof obj[key] !== "string") delete obj[key];				
        }
    return(obj);
    }

console.log(inStr(basil));
}
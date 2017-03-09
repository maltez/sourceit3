//function for two arrays that return this [1,5,6,3,4] concatenatenation 
var arr1=[1,2,3,4];
var arr2=[5,6];
function fusedArr(){
     arr1.splice(1,1,arr2[0],arr2[1]);//remove element(2) from position 1, insert on this place elements from second array
     return arr1;
}
console.log(fusedArr());


//function that displays a  like this ‘aa’ ’aaa’ ’aaaa’ 50 times in closure.

var z=function(){
var str='a';
return function(){
    return str+='a';
}
}
var x=z();
for(i=1;i<=50;i++){//loop for display no more than 50 times
    console.log(x());
}

//function for average sum of five numbers
var num,A,sum,i;
i=0;
sum=0;
num=0;
while(i<5) {
    num=+prompt('Enter a number');
    i++;
    sum+=num; //sum 5 numbers
}
function average(){
    A=sum/5; //average number
    return A;
}
alert('Average sum= '+(average())+'!');


//function for even numbers incl.
function getNumber() {
    for (var i=0;i<=num;i++) {
        if (i % 2 !== 0) { //parity check
        continue;
    }
        else {
            console.log(i);
        }
    }
}   
var num=+prompt('Enter a number');
getNumber();


//function for concatenation of string by entering number

var string,x,y;
string='Hello';
function getString(){
    x=string;  
    for (var i=1;i<y; i++){
        string=string + x; //concatenation of string
    } return string;
}

var y=+prompt('Enter a number < 100');
if (y<1){
    alert('Number ' + y + ' is wrong');
} else {
    alert(getString()); //if entering number is in range call function
}

/* Declaration function of create new arr with odd valumes*/
function CreareArr(){
	var arr = [0,1,2,3,4,5];
	var arr1 = [];
	var i;
function createNewArr(arr){
			if (i%2!=0){      // if index of array is odd     
				arr1.push(i); //push value in new array
			}
			return arr1;
		}
	

		for (i = 0; i < arr.length; i++) { // for each index of array

			createNewArr(arr);				// call function for create new array
		
	}
	console.log(arr1);
}

/*  declaration function for find determinant*/
function Determinant(){
	var arr =[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];
	var result;
	getDetermine (arr);
	
	function getDetermine (arr){
		result = arr[0][0]+arr[1][1]+arr[2][2]+arr[3][3]+
		arr[0][3]+arr[1][2]+arr[2][1]+arr[3][0];          // determinant calculation
		return result;									// assignment variable	
	} 
console.log(result)
}



/*declaration function for check enter string if it's palindrome or not*/
function Palindrome(){
	var str = prompt("Enter the string");  // assignment variable	
	
function chekPalindrome (str){
      var arr = str.split(''); //create array from enter string
      var newArr = [];
	   var index;
for (var j = 0; j < arr.length; j++) { //temove all space between enter string
	if (arr[j]==" ")
		arr.splice(j,1);

	}
	var newText = arr.join(''); // assignment new string without space 

for (var i = arr.length; i>0; i--) {  //revers array
		index = arr.length - i;
    newArr[i]= arr[index];
	
	}
	var newStr = newArr.join('');   //assigment new revers string


 return newStr == newText;   // return boolean if revers string equal enter string
}

console.log( chekPalindrome (str))	

}

/*Declaration function for get sum of even indexes of array*/

function SumEven(){
	var arr = [1,2,3,4,5,6,7,8,9,10];
	var result = 0;

	getSumEven(arr);

	function getSumEven(arr){
		for (var i = 0; i < arr.length; i++) {  // loop for all indexes in array
			if (i%2 == 0) {						// if index is even sum value with result variable
				result+=arr[i];
			}


		}
		return result;
	}
console.log(result);
} 

/* declaration function of find max value of array*/
function maxElem (){
	var arr = [2,45,6,14,13,5,4];

	var maxElem = getMaxElem(arr);

	function getMaxElem(arr){
		function compareNumeric(a, b) {  //declaration function of compare two numbers
  if (a > b) return 1;
  if (a < b) return -1;
}
	arr.sort(compareNumeric); // sort array from min to max value
	return arr
	}
	console.log (maxElem[maxElem.length - 1]); // ounput value last index of sort array
}


/*declaration function for return object without string properties*/

function strObj(){
	var phone ={ color:"black", weight:250, os: "android", type:"smartphone"};
	getStrObj(phone);


	function getStrObj(obj){
		for (var key in obj){             // iterate all of properties
			if(typeof obj[key]== "string"){  //if property of obgect is string
				delete obj[key];				// remove prpperty from object
				
							
			}
			else{
				continue;
			}
		}
			return(obj);      


		}
		
	
	console.log(phone);
}






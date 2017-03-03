//task 1

var vowel = function () {    					//declares function whose delete vowel
	var message = prompt('Write your message'); 			//get message
	function	getOnlyConsonants (sense) {					//declares func which take array and do
		sense = sense.split('').filter(function(litters) {  //transfers string => array
			return 'aeuioy'.indexOf(litters)<0;             //filters  array for vowel and delete vowel litters
		}).join(' '); 										//reverse array => string 
			return sense;									//return our string
		}
		return  getOnlyConsonants(message);					//return result
	};

//for russains
var vowelRus = function  () {									//Объявляем функцию
	var text = prompt('Введите Ваш тектс');						//Запрашиваем предложение
	function  deleteRusVowel(message) {							//Объявляем функцию,с помощью методов преобразует
		message = message.split('').filter(function(litters){ 	//Принимает строку и преобразуем её в массив
			return 'уеаоэяию'.indexOf(litters)<0;				//Возращаем массим без гласных
		}).join(' ');											// Проводим обратную трансформацию из массива в строку	
		return message;											
	}
	return deleteRusVowel(text);
}
// Palindroms
var arr = ['eve','deed','level','alosha'];								//Array wiht words
	function findPalindrom(array) {										//function wiht methods 
	 return array.filter(function(words){ 								//filter elements of array
	 	return words.split('').reverse().join('')===words;				//to transform array to string,change order,and check (stinrg===reverse string)
	 });
	};
//Палиндром
var polindroms = function getWords() {									//Declerate func
	var a = prompt('Введите слова через запятую');						//takes words
	function findPalindrom(array) {										//Func find palidrom
		var array=array.split(',');										// Transform string=>array
		return array.filter(function(words){							//Makes filter which transforms elements to liters
			return words.split('').reverse().join('')===words;			//after change order and check result
		})}
	return findPalindrom(a);
	 };

//Sort						
var small=function (array){												//Declerate func
	var finish = [];													//Create new empty array
array=array.filter(function(litters){									//Check array words for strring and not empty
	return typeof(litters)==='string' && array.length > 0;				
}).map(function(litters){												//Create new array wiht >= 2 and <= length
	if(litters.length >=2 && litters.length <=4) {						
		return finish.push(litters);									//use method for push element in our empty array
	};

});
return finish;
};

var chek_mail = document.getElementById('valid_mail');
var chek_phone = document.getElementById('valid_phone');
var chek_name = document.getElementById('person_object');
var summ_result = document.getElementById('summ_result');
var tts_result = document.getElementById('ten_to_16_result');

function this_is_phone(nam) {//Task 1 chek string to valid phone namber
    var re =/^[\+\d\(][\d\(\)\-]{4,20}\d$/;//filter
    var valid = re.test(nam);//take boolean above chek string
    if (valid) chek_phone.innerText = 'Valid';
    else chek_phone.innerText = 'Not valid';
    return valid;//return boolean
}  

function person_from_string(str) {//Task 2 fing name lasname and age and add to object
   var person = {};
   var r_a = /\d[0-9]{0,2}/g //find number 1-3 digits
   var r_n = /^[A-Z][a-z]+/;//Take first word Xxxx 
   var r_ln = /([A-Z][a-z]+)/g;//Take second word Xxxx
   try {
   person.age = str.match(r_a)[0];//take age
   person.name = str.match(r_n)[0];//Take first name
   person.last_name = str.match(r_ln)[1];//take last name
}
catch(err){
    chek_name.innerText = 'Please enter valid string';
    return;
}
if (!person.last_name){
    chek_name.innerText = 'Please enter valid string';
    return;
}
   chek_name.innerText = 'Name - '+ person.name+', Lastname - '+person.last_name+', Age - '+person.age;
   return person;
}

function this_is_email(mail) {//Task 3 chek string to valid e-mail adress
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;//filter
    var valid = re.test(mail);
    if (valid) chek_mail.innerText = 'Valid';
    else chek_mail.innerText = 'Not valid';
    return valid;//return boolean
}

function summa(str) {//Task 4 summ of all digits in the string
    var result = 0;
    var dig_arr = [];
    dig_arr = str.split(' ');//split string to array
    for (var i=0; i<dig_arr.length; i++)
    {
        result += +dig_arr[i];//add to all summ
    }
    if (isNaN(result)){
        summ_result.innerText = 'Enter numbers only !';
        return;
    }
    summ_result.innerText = 'Result = ' + result;
    return result
    }

function Number_16to10(str) {//Task 5 chek string to 16x namber and convert to 10x
var result;
var re =/[a-f0-9]+/i ;
result = parseInt(str.match(re), 16);
if (result){
tts_result.innerText = 'Result = '+ result;
return result;}
else{ 
    tts_result.innerText = 'do Not find Hex namber';
    return ;
    }
}
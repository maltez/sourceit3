var greeting = function()
{   
   var name, gender_answer;//variable 'name' for the user name and 'gender_answer' to determine the user's gender
   name = prompt('enter youre name'); //ask for the user name
   if (gender_answer = confirm('Press OK if you are MAN, CANCEL if you are WOMAN','gender question')) gender_answer='mr.';
   else gender_answer='ms.'; // ask the gender of the user, so the yes = prefix mr., no = prefix ms.
  console.log('Welcome '+gender_answer+name);// Welcome Mr.(Ms.) User to console
}

var promise = function(i){
	return new Promise(
		function(resolve, reject){
   			setTimeout(function(){
    		console.log(i);
   			}, i*1000)
  
  })
}
for (var i = 0; i < 4; i++ ){
       promise(i)

}




for (var j = 0; j<4; j++){


    setTimeout(fun.bind(null, j), 3000)}

function fun(j){
    console.log (j)
}
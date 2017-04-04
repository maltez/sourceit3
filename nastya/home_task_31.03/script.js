'use strict'
/*decision with promises method
 */
function promiseMethodCode() {
	var promise = function (i) {
		return new Promise(
			function (resolve, reject) {
				setTimeout(function () {
					console.log(i);
				}, i * 1000)
				resolve()
			})
	}
	for (var i = 0; i < 4; i++) {
		promise(i);

	}
}

/*decision with bind method
 */

function bindMethodCode() {
	for (var j = 0; j < 4; j++) {


		setTimeout(fun.bind(null, j)(), 3000)
	}

	function fun(j) {
		console.log(j);
	}
}


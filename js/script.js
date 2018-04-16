document.getElementById('calculate-button').onclick = function() {
	
	/* Collects the content of both elements elem-1 and elem-2 */
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	/* Collects the value content of both elements elem-1 and elem-2 */
	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);


	/* Verifies if any of the values val1 or val2 are NaN and shows up an alert. Gives focus to the first element (if both are NaN or just itself) 
	or on the second one */
	if (isNaN (val1)) {
		treatingNan();
		document.getElementById('elem-1').focus();
	} else if (isNaN (val2)) {
		treatingNan();
		document.getElementById('elem-2').focus();
	}

	/* Identifies which radio button is selected and gives its value to the operation variable */
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;

	/* Stores the getResult function return into the operationResult variable*/
	let operationResult = getResult(val1, val2, operation);

	/* Relates the resultElement variable to the "result" element and the operationResults to it*/
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;

	/* Checks which radion button is selected and calculates the relative result, showing it up on the inner Text of the result id */
	function getResult(val1, val2, operation) {
		if (operation === '+') {
			return val1 + val2;
		} else if (operation === '-') {
			return val1 - val2;
		} else if (operation === '*') {
			return val1 * val2;
		} else {
			return val1 / val2;	
		} 

	}

	/* Fuction that display an alert and throws up an error (stoping the following code lines) */
	function treatingNan () {
		alert('Digite um número válido!')
		error();
	}	


}
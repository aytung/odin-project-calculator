	function add(a, b) {
		return a + b;
	}

	function subtract(a, b) {
		return a - b;

	}


	function multiply (a, b) {
		return a * b;

	}

	function divide(a, b) {
		return a / b;

	}
	function convertToList(expression) {

		return expression.trim().split(' ');
	}

	let precedence = {'+' : 0, '-' : 0, '*' : 1, '/' : 1};
	let operatorList = ['+', '-', '/', '*'];



	function operate(operator, a, b) {
		switch (operator) {
			case '+':
				return add(a, b);
				break;
			case '-':
				return subtract(a, b);
				break;
			case '*':
				return multiply(a, b);
				break;
			case '/':
				return divide(a, b);
			break;

		}
	}

	// pseudocode:
	// create a stack and list for elements
	// iterate over the list
	// whenever the element happens to be a character
	// we add it to the postFixList
	// otherwise, we check precedence
	// when the precedence of the current character is less
	// than that before (or equal), pop off until something greater
	// shows up, otherwise just add it to the stack
	function convertToPostfix(expressionList) {
		let stack = []

		let postFixList = []
		// iterate over the list
		for (let i = 0; i < expressionList.length; i++) {


			let char = expressionList[i];

			// just add values to the list
			if (!operatorList.includes(char)) {
				postFixList.push(char);
			} else {
				// when the precedence is greater than or equal to, evaluate previous
				if (stack.length > 0) {
				let prevOperator = stack[stack.length - 1];
					if (precedence[prevOperator] >= precedence[char]) {
						postFixList.push(stack.pop());
					}
				}

				stack.push(char);
			}
		}

		while (stack.length > 0) {
			postFixList.push(stack.pop());
		}

		return postFixList;


	}

	function evaluatePostfix (expressionList) {
		let stack = []

		for (let i = 0; i < expressionList.length; i++) {
			let char = expressionList[i];
			if (!operatorList.includes(char)) {
				stack.push(Number(char))
			} else {
				stack = stack.concat(operate(char, stack.pop(), stack.pop()));

			}
		}


		return String(stack[0]);

	}

// 	module.exports = {
// 	convertToList,
// 	convertToPostfix,
// 	evaluatePostfix,
// }

$(document).ready(function(){

    var theParent = document.querySelector("#calculator");
	theParent.addEventListener("click", getButton, false);
	var equation = []
    //var input = document.getElementById("screen");
     
    function getButton(e) {
        if (e.target !== e.currentTarget) {           
            
			//get value for clicked button
			var btnID = e.target.id;
            var btnValue = e.target.value; 
            //var total = checkInput(clickedValue);
			//create variable to hold screen input
			var screenInput = document.getElementById('screen');
			e.stopPropagation();
			var operators = ['+', '-', '*', '/','**','%'];	
			var lastChar = screenInput.value.substring(screenInput.value.length - 1);
			var operatorFound = false;
			equation.push(btnValue);
			//console.log(equation);
			
			switch (btnValue){
				case 'CE':
					screenInput.value = '';
					break;
				case 'C':
					screenInput.value = '';
					break;
				case 'backspace':
					screenInput.value = btnValue.slice(0, -1);
					break;
				case '=':
					// Final thing left to do is checking the last characters of the equation. If it is an operator or a decimal, remove it
					// Get the last character from the equation
					//var lastChar = screenInput[inputVal.length - 1];
					//var equation = btnValue; 
					//var lastChar = screenInput.value.substring(screenInput.value.length - 1);               
					//if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
						//screenInput.value = screenInput.value.slice(0, -1);
					//}
						//screenInput.value = screenInput.value.slice(0, -1);
					if(screenInput.value.length === 0) {
						if(btnValue === '=') {
							//= sign not allowed as first value
							equation.pop();
							break;
						}
					}
							
					if(equation) {
						screenInput.value = eval(screenInput.value);
					}     
				break;
				default:			
						//--------------------
						//Check for operators
						//--------------------					
						for(i = 0; i < operators.length; i++){
							if(btnValue === operators[i]){
								operatorFound = true;
							}
	
						}
						//----------------------------------------------------------------------------------------------------------------
						//Add button input to screen if it is empty and the input is not an operator with the exceptin being a minu symbol
						//----------------------------------------------------------------------------------------------------------------
						if(screenInput.value.length === 0) {
								if(btnValue === '-'){
									//add if minus found
									screenInput.value += btnValue;
									//equation.push(btnValue);
									break;
								}
								else if(operatorFound === false){
									//add if no other operators found
									screenInput.value += btnValue;
									//equation.push(btnValue);
									break;
								}else {
									//an operator is found so pop off value of our array
									equation.pop();
									break;
								}														
												
						}
						//-------------------------------------------------------------------------------
						// if more than one value, do not allow entries for operators or '.' to be added consecutively
						//-------------------------------------------------------------------------------
						if(equation.length > 1){
							var indexLast = equation.length - 1;
							var indexBeforeLast = equation.length - 2;
							if(equation[indexLast] === equation[indexBeforeLast] && equation[indexLast] === '.') {
								//two consecutive dots not allowed
								equation.pop();
								break;
							}
							if(equation[indexLast] === equation[indexBeforeLast] && operatorFound == true) {
								//two consecutive operators not allowed
								equation.pop();
								break;
							}else {
								//no rules broken so add value
								screenInput.value += btnValue;
								break;
							}
						}	
					}  
            
        }
        
    }

    function checkInput(btnValue) {
        // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
        
        var screenInput = document.getElementById('screen');
		var operators = ['+', '-', '*', '/','**','%'];	
		var lastChar = screenInput.value.substring(screenInput.value.length - 1);
		var operatorFound = false;
		var equation = []
        
        switch (btnValue){
            case 'CE':
                screenInput.value = '';
                break;
            case 'C':
                screenInput.value = '';
                break;
            case 'backspace':
                screenInput.value = btnValue.slice(0, -1);
                break;
            case '=':
                // Final thing left to do is checking the last characters of the equation. If it is an operator or a decimal, remove it
                // Get the last character from the equation
                //var lastChar = screenInput[inputVal.length - 1];
                //var equation = btnValue; 
                var lastChar = screenInput.value.substring(screenInput.value.length - 1);               
				if(operators.indexOf(lastChar) > -1 || lastChar == '.'){
                    screenInput.value = screenInput.value.slice(0, -1);
                }
                    //screenInput.value = screenInput.value.slice(0, -1);
                        
                if(equation) {
                	screenInput.value = eval(screenInput.value);
				}     
            break;
			default:			
					//--------------------
					//Check for operators
					//--------------------					
					for(i = 0; i < operators.length; i++){
						if(btnValue === operators[i]){
							operatorFound = true;
						}

					}
					//----------------------------------------------------------------------------------------------------------------
					//Add button input to screen if it is empty and the input is not an operator with the exceptin being a minu symbol
					//----------------------------------------------------------------------------------------------------------------
					if(screenInput.value.length === 0) {
							if(btnValue === '-'){
								//add if minus found
								screenInput.value += btnValue;
								equation.push(btnValue);
								break;
							}
							else if(operatorFound === false){
								//add if no other operators found
								screenInput.value += btnValue;
								equation.push(btnValue);
								console.log(equation);
								break;
							}														
											
					}
					//-------------------------------------------------------------------------------
					// do not allow entries except operators and '.' added consecutively
					//-------------------------------------------------------------------------------
					screenInput.value += btnValue;
					equation.push(btnValue);
					console.log(equation);

				}
        }//end check input  
})
					// Only add operator if the input is not empty and there is no operator at the last
					//if(screenInput.value != '' && operators.indexOf(lastChar) == -1) {
						//screenInput.value += btnValue;
					//}
					
					// Only add operator if input is not empty and there is no operator at the last
					//if(screenInput.value != '' && operators.indexOf(lastChar) == -1) {
						//screenInput.value += btnValue;
					//}
					// Allow minus if the string is empty
					//else if(screenInput.value == '' && btnValue == '-') {
						//screenInput.value += btnValue;
					//}
					// Replace the last operator (if exists) with the newly pressed operator
					//if(operators.indexOf(lastChar) > -1 && screenInput.value.length > 1) {
						// Here, '.' matches any character while $ denotes the end of string, so anything 
						//(will be an operator in this case) at the end of string will get replaced by new operator
						//screenInput.value = screenInput.replace(/.$/, btnValue);
					//}							

/*
// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}
*/





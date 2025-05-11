
//let userExpression = "";

// function initializeUserExpression() {
//   userExpression = "";
// }

// function updateExpressionDisplay() {
//   document.getElementById("expression").innerText = userExpression;
// }

// function getuserExpression(input) {
//   const lastCharacter = userExpression.slice(-1);

//   if (isOperator(lastCharacter) && isOperator(input)) {
//     userExpression = userExpression.slice(0,-1) + input
//   } else if (userExpression == "" && isOperator(input)) {
//     return 
//   } else {
//     userExpression += input;
//   }
//   updateExpressionDisplay();
// }

// function isOperator(input) {
//   const operators = ["+", "-", "×", "÷"];

//   return operators.includes(input)
// }

// function removeLastCharacter() {
//   userExpression = userExpression.slice(0, -1);
//   updateExpressionDisplay();
// }

// function clearAll() {
//   initializeUserExpression()
//   updateExpressionDisplay();
//   document.getElementById("result").innerText = "0";
// }

// function calculateResult() {
//   const lastCharacter = userExpression.slice(-1)
//   if (isOperator(lastCharacter)) {
//     return alert("수식이 완성되지 않았습니다.");
//   }

//   if (userExpression === "") {
//     return document.getElementById("result").innerText = "0"
//   }

//   let expressionArray = userExpression
//     .replace(/×/g, "*")
//     .replace(/÷/g, "/")
//     .split(/([+\-*/])/);

//   document.getElementById("result").innerText =
//     convertToPostfix(expressionArray);
// }

// function convertToPostfix(expressionArray) {
//   let operators = []; 
//   let result = [];

//   expressionArray.reduce((acc, element) => {
//     if (!isNaN(element)) {
//       result.push(element);
//     } else {
//       while (isOperatorsEmpty(operators) && isHigherPriority(operators[operators.length - 1], element)) {
//         pushToPostfix(operators, result)
//       }
//       operators.push(element);
//     }
//   }, null);

//   while (isOperatorsEmpty(operators)) {
//     pushToPostfix(operators, result)
//   }

//   return calculatePostfix(result);
// }

// function isOperatorsEmpty(operators) {
//   return operators.length > 0
// }

// function isHigherPriority(operator1, operator2) {
//   const priority = { "+": 1, "-": 1, "*": 2, "/": 2 };
//   return priority[operator1] > priority[operator2];
// }

// function pushToPostfix(operators, result) {
//   result.push(operators.pop())
// }

// function calculatePostfix(input) {
//   let operandStack = [];
//   input.forEach((element) => {
//     if (!isNaN(element)) {
//       operandStack.push(parseFloat(element));
//     } else {
//       const temp2 = operandStack.pop();
//       const temp1 = operandStack.pop();
//       operandStack.push(performOperation
//       (temp1, temp2, element));
//     }
//   });
//   let result = operandStack[0];
//   return result.toString();
// }

// function performOperation(operand1, operand2, operator) {
//   switch (operator) {
//     case "+":
//       return add(operand1, operand2)
//     case "-":
//       return minus(operand1, operand2)
//     case "*":
//       return multiply(operand1, operand2)
//     case "/":
//       return devide(operand1, operand2)
//   }
// }

// function add(operand1, operand2) {
//   return operand1 + operand2;
// }

// function minus(operand1, operand2) {
//   return operand1 - operand2;
// }

// function multiply(operand1, operand2) {
//   return operand1 * operand2;
// }

// function devide(operand1, operand2) {
//   if (operand2 === 0) {
//     return alert("0으로 나눌 수 없습니다!")
//   }
//   return operand1 / operand2;
// }

// document.addEventListener("keydown", (event) => {
//   const eventKey = event.key;

//   if (!isNaN(eventKey) || eventKey === "." || isOperator(eventKey)) {
//     getuserExpression(eventKey);
//   } else if (eventKey === "Enter") {
//     calculateResult();
//   } else if (eventKey === "Backspace") {
//     removeLastCharacter();
//   } else if (eventKey === "Delete") {
//     clearAll();
//   }
// });

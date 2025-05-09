let userInput = "";

function updateDisplay() {
  document.getElementById("expression").innerText = userInput;
}

function getUserInput(input) {
  userInput += input;
  updateDisplay();
}

function eraseNumber() {
  userInput = userInput.slice(0, -1);
  updateDisplay();
}

function allClear() {
  userInput = "";
  updateDisplay();
  document.getElementById("result").innerText = "0";
}

// oper1의 우선순위가 oper2보다 높으면 true 반환
function operatorPriority(operator1, operator2) {
  const priority = { "+": 1, "-": 1, "*": 2, "/": 2 };
  return priority[operator1] > priority[operator2];
}

function getResult() {
  let resultArray = userInput
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .split(/([+\-*/])/);

  // return getBackwardLotation(resultArray);

  document.getElementById("result").innerText =
    getBackwardLotation(resultArray);
}

function getBackwardLotation(resultArray) {
  let operator = []; // 연산자
  let result = [];

  resultArray.forEach((element) => {
    if (!isNaN(element)) {
      result.push(element);
    } else {
      while (
        operator.length > 0 &&
        !operatorPriority(element, operator[operator.length - 1])
      ) {
        result.push(operator.pop());
      }
      operator.push(element);
    }
  });

  while (operator.length > 0) {
    result.push(operator.pop());
  }

  return backwardCaculator(result);
}

function calculator(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
  }
}

function backwardCaculator(input) {
  let stack = [];
  let temp1 = "";
  let temp2 = "";
  input.forEach((element) => {
    if (!isNaN(element)) {
      stack.push(parseFloat(element));
    } else {
      temp2 = stack.pop();
      temp1 = stack.pop();
      stack.push(calculator(temp1, temp2, element));
    }
  });
  let result = stack[0];
  return result.toString();
}

document.addEventListener("keydown", (event) => {
  const buttonKey = event.key;
  const caculatorlist = ["+", "-", "*", "/"];

  if (!isNaN(buttonKey) || buttonKey === ".") {
    getUserInput(buttonKey);
  } else if (caculatorlist.includes(buttonKey)) {
    getUserInput(buttonKey);
  } else if (buttonKey === "Enter") {
    getResult();
  } else if (buttonKey === "Backspace") {
    eraseNumber();
  } else if (buttonKey === "Delete") {
    allClear();
  }
});

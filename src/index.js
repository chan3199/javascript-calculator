import { isOperator } from "./js/utils.js";
import { calculateResult } from "./js/calculator.js";

let userExpression = "";

function initializeUserExpression() {
  userExpression = "";
}

function updateExpressionDisplay() {
  document.getElementById("expression").innerText = userExpression;
}

function removeLastCharacter() {
  userExpression = userExpression.slice(0, -1);
  updateExpressionDisplay();
}

function clearAll() {
  initializeUserExpression();
  updateExpressionDisplay();
  document.getElementById("result").innerText = "0";
}

function handleInput(input) {
  if (!isNaN(input) || input === "." || isOperator(input)) {
    getuserExpression(input);
  } else if (input === "Enter" || input === "=") {
    calculateResult();
  } else if (input === "Backspace" || input === ">") {
    removeLastCharacter();
  } else if (input === "Delete" || input === "AC") {
    clearAll();
  }
}

function getuserExpression(input) {
  const lastCharacter = userExpression.slice(-1);

  if (isOperator(lastCharacter) && isOperator(input)) {
    userExpression = userExpression.slice(0, -1) + input;
  } else if (userExpression == "" && isOperator(input)) {
    return;
  } else {
    userExpression += input;
  }
  updateExpressionDisplay();
}

function convertInput(input) {
  if (input === "*") return "×";
  if (input === "/") return "÷";
  return input;
}

document.addEventListener("keydown", (event) => {
  let eventKey = convertInput(event.key);

  handleInput(eventKey);
});

document.addEventListener("click", (event) => {
  const eventInput = event.target.innerText;
  console.log(eventInput);
  handleInput(eventInput);
});

export { userExpression };

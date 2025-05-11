import {isOperator} from './utils.js'

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
    initializeUserExpression()
    updateExpressionDisplay();
    document.getElementById("result").innerText = "0";
}

function getuserExpression(input) {
    const lastCharacter = userExpression.slice(-1);
  
    if (isOperator(lastCharacter) && isOperator(input)) {
      userExpression = userExpression.slice(0,-1) + input
    } else if (userExpression == "" && isOperator(input)) {
      return 
    } else {
      userExpression += input;
    }
    updateExpressionDisplay();
}

document.addEventListener("keydown", (event) => {
  const eventKey = event.key;

  if (!isNaN(eventKey) || eventKey === "." || isOperator(eventKey)) {
    getuserExpression(eventKey);
  } else if (eventKey === "Enter") {
    calculateResult();
  } else if (eventKey === "Backspace") {
    removeLastCharacter();
  } else if (eventKey === "Delete") {
    clearAll();
  }
});
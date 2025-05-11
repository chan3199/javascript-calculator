import { isOperator, isOperatorsEmpty, isHigherPriority } from "./utils.js";
import { operationalCalculate } from "./operator.js";
import { userExpression } from "../index.js";

export function calculateResult() {
  const lastCharacter = userExpression.slice(-1);
  if (isOperator(lastCharacter)) {
    return alert("수식이 완성되지 않았습니다.");
  }

  if (userExpression === "") {
    return (document.getElementById("result").innerText = "0");
  }

  let expressionArray = convertExpression(userExpression);

  document.getElementById("result").innerText = getResult(expressionArray);
}

function convertExpression(inputArray) {
  return inputArray
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .split(/([+\-*/])/);
}

export function getResult(expressionArray) {
  const postFixArray = convertToPostfix(expressionArray);
  return calculatePostfix(postFixArray);
}

function convertToPostfix(expressionArray) {
  let operators = [];
  let result = [];

  expressionArray.reduce((acc, element) => {
    if (!isNaN(element)) {
      result.push(element);
    } else {
      while (
        isOperatorsEmpty(operators) &&
        isHigherPriority(operators[operators.length - 1], element)
      ) {
        pushToPostfix(operators, result);
      }
      operators.push(element);
    }
  }, null);

  while (isOperatorsEmpty(operators)) {
    pushToPostfix(operators, result);
  }

  return result;
}

function pushToPostfix(operators, result) {
  result.push(operators.pop());
}

function calculatePostfix(input) {
  let operandStack = [];
  input.forEach((element) => {
    if (!isNaN(element)) {
      operandStack.push(parseFloat(element));
    } else {
      const temp2 = operandStack.pop();
      const temp1 = operandStack.pop();
      operandStack.push(operationalCalculate(temp1, temp2, element));
    }
  });
  let result = operandStack[0];
  return result.toString();
}

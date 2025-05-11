function operationalCalculate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return minus(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return devide(operand1, operand2);
  }
}

function add(operand1, operand2) {
  return operand1 + operand2;
}

function minus(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function devide(operand1, operand2) {
  if (operand2 === 0) {
    return alert("0으로 나눌 수 없습니다!");
  }
  return operand1 / operand2;
}

export { operationalCalculate };

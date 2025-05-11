function isOperator(input) {
  const operators = ["+", "-", "×", "÷"];

  return operators.includes(input);
}

function isOperatorsEmpty(operators) {
  return operators.length > 0;
}

function isHigherPriority(operator1, operator2) {
  const priority = { "+": 1, "-": 1, "*": 2, "/": 2 };
  return priority[operator1] > priority[operator2];
}

export { isOperator, isOperatorsEmpty, isHigherPriority };

let userInput = ""

function updateDisplay() {
    document.getElementById("expression").innerText = userInput
}

function getUserInput(input) {
    userInput += input
    updateDisplay()
}

function eraseNumber() {
    userInput = userInput.slice(0, -1)
    updateDisplay()
}

function allClear() {
    userInput = ""
    updateDisplay()
    document.getElementById("result").innerText = "0"
}

function getResult() {
    let resultArray = userInput.replace(/×/g,"*").replace(/÷/g, "/")
    getBackwardLotation(resultArray)
    //document.getElementById("result").innerText = resultArray
}

function getBackwardLotation(resultArray) {
    let operator = []  // 연산자
    let result = []

    resultArray.forEach(element => {
        if (!isNaN(element)){ 
            result.push(element)
        } else {
            while (operator.length > 0 && !operatorPriority(element, operator[operator.length - 1])) {
                result.push(operator.pop());
            }
            operator.push(element)
        }
    });

    while (operator.length > 0) {
        result.push(operator.pop());
    }

    return result
}

function caculator() {

}

// oper1의 우선순위가 oper2보다 높으면 true 반환
function operatorPriority(operator1, operator2){
    const priority = {'+': 1, '-': 1, '*': 2, '/': 2}
    return priority[operator1] > priority[operator2]
}

console.log(getBackwardLotation("9*3+1-3/3".split("")))
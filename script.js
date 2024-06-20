function Add(array) {
    let sum = array.reduce((total, currentValue) => total + currentValue)
    return sum;
}

function Subtract(array) {
    let subtract = array.reduce((total, currentValue) => total - currentValue)
    return subtract;
}

function Multiply(array) {
    let product = array.reduce((total, currentValue) => total * currentValue)
    return product;
}

function Divide(array) {
    let result = array.reduce((total, currentValue) => total / currentValue)
    return result;
}

let num1 = 0
let operator = ""
let num2 = 0

function Operate(operator, num1, num2) {
   let arr = [parseInt(num1), parseInt(num2)]
    if (operator === "+") {
        return Add(arr)
    }
    
    if (operator === "*") {
        return Multiply(arr)
    }
    
    if (operator === "-") {
        return Subtract(arr)
    }
    
    if (operator === "/") {
        return Divide(arr)
    }
}

//calculator interactions
let viewer = document.querySelector(".viewer");


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnPeriod = document.querySelector("#btnPeriod");

const btnAdd = document.querySelector(".add")
const btnSubtract = document.querySelector(".subtract")
const btnMultiply = document.querySelector(".multiply")
const btnDivide = document.querySelector(".divide")

const btnEqual = document.querySelector(".equal")
const btnAC = document.querySelector(".clear")

viewer.textContent = ""

let inputSplit = viewer.textContent.split("")

btn1.addEventListener("click", () => {
    viewer.textContent += 1
    inputSplit.push(1)
})
btn2.addEventListener("click", () => {
    viewer.textContent += 2
    inputSplit.push(2)
})

btn3.addEventListener("click", () => {
    viewer.textContent += 3
    inputSplit.push(3)
})

btn4.addEventListener("click", () => {
    viewer.textContent += 4
    inputSplit.push(4)
})

btn5.addEventListener("click", () => {
    viewer.textContent += 5
    inputSplit.push(5)
})

btn6.addEventListener("click", () => {
    viewer.textContent += 6
    inputSplit.push(6)
})

btn7.addEventListener("click", () => {
    viewer.textContent += 7
    inputSplit.push(7)
})

btn8.addEventListener("click", () => {
    viewer.textContent += 8
    inputSplit.push(8)
})

btn9.addEventListener("click", () => {
    viewer.textContent += 9
    inputSplit.push(9)
})

btn0.addEventListener("click", () => {
    viewer.textContent += 0
    inputSplit.push(0)
})

btnAdd.addEventListener("click", () => {
    viewer.textContent += "+"
    inputSplit.push("+")
})

btnSubtract.addEventListener("click", () => {
    viewer.textContent += "-"
    inputSplit.push("-")
})

btnMultiply.addEventListener("click", () => {
    viewer.textContent += "x"
    inputSplit.push("*")
})

btnDivide.addEventListener("click", () => {
    viewer.textContent += "/"
    inputSplit.push("/")
})

btnAC.addEventListener("click", () => {
    viewer.textContent = ""
    num1 = 0
    operator = ""
    num2 = 0
})

btnEqual.addEventListener("click", () => {
    for (let i = 0; i < inputSplit.length; i++) {
        if ((inputSplit[i] === "+") || (inputSplit[i] === "-") || (inputSplit[i] === "*") || (inputSplit[i] === "/")) {
            operator = inputSplit[i]
            break;
        }
    }
    stringedInput = inputSplit.toString()
    let numList = stringedInput.split(`,${operator},`)
    for (let i = 0; i < numList.length; i++) {
        if (i === 0) {
            num1 = numList[i]
        }

        if (i === 1) {
            num2 = numList[i]
        }
    }
    let result = Operate(operator, num1, num2)
    viewer.textContent = result
    num1 = result
    operator = ""
    num2 = 0
    
})


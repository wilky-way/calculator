const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    switch (operator) {
        case "+":
            return add(parseInt(a), parseInt(b));
        case "-":
            return subtract(parseInt(a), parseInt(b));
        case "*":
            return multiply(parseInt(a), parseInt(b));
        case "/":
            return divide(parseInt(a), parseInt(b));
        default:
            console.log("operation not valid");
    }
};

const updateDisplay = (newValue) => {
    if (newValue === "") {
        return;
    }
    if (newValue === "clear") {
        display.textContent = "";
        return;
    }
    if (operating === "first") {
        firstValue += newValue;
        display.textContent = firstValue;
    } else if (operating === "second") {
        secondValue += newValue;
        display.textContent = secondValue;
    } else if (operating === "equals") {
        display.textContent = newValue;
    }
};

const calculate = () => {
    if (firstValue === "" || secondValue === "" || operand === "") {
        console.log("missing values or operand");
        return;
    }
    operating = "equals";
    ans = operate(operand, firstValue, secondValue);
    updateDisplay(ans);
    operand = "";
    firstValue = ans;
    secondValue = "";
    operating = "first";
};

const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const addEl = document.querySelector(".add");
const subtractEl = document.querySelector(".subtract");
const multiplyEl = document.querySelector(".multiply");
const divideEl = document.querySelector(".divide");
let firstValue = "";
let secondValue = "";
let operating = "first";
let operand = "";
let ans;

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        updateDisplay(number.innerText);
    });
});

equals.addEventListener("click", calculate);

addEl.addEventListener("click", () => {
    operand = "+";
    operating = "second";
    updateDisplay("clear");
});
subtractEl.addEventListener("click", () => {
    operand = "-";
    operating = "second";
    updateDisplay("clear");
});
multiplyEl.addEventListener("click", () => {
    operand = "*";
    operating = "second";
    updateDisplay("clear");
});
divideEl.addEventListener("click", () => {
    operand = "/";
    operating = "second";
    updateDisplay("clear");
});

clear.addEventListener("click", () => {
    updateDisplay("clear");
    firstValue = "";
    secondValue = "";
    operating = "first";
    operand = "";
});

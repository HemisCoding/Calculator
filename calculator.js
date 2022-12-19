let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".btn.equal");
    let decimal = document.querySelector(".btn.decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previousValue.textContent = previousValue + "" + operator;
        currentScreen.textContent = currentValue;
    })) 

    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        calculate()
        previousScreen.textContent = "";
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5){
        currentValue += num;
    }
}

function addDecimal() {
    if (!currentValue.includes(".")){
        currentValue += ".";
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue); //converting them into numbers (not strings anymore)
    currentValue = Number(currentValue);

    if (operator === "+"){
        previousValue += currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "x"){
        previousValue *= currentValue;
    } else if (operator === "/"){
        previousValue /= currentValue;
    }

    console.log(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}
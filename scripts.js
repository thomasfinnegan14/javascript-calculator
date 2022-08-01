let num1 = 1;
let num2 = 2;
let operator = "+";
let currentdisplay = "0";

function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function operate(operator, num1, num2) 
{
    if (operator == "+")
    {
        return add(num1, num2);
    }
    else if (operator == "-")
    {
        return subtract(num1, num2);
    }
    else if (operator == "*")
    {
        return multiply(num1, num2);
    }
    else if (operator == "/")
    {
        return divide(num1, num2);
    }
}

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

// Clear current display
clear.addEventListener("click", function(event)
{
    currentdisplay = "0";
    display.textContent = currentdisplay;
});


// Update Display with numbers
function displayNumber(num)
{
    if (currentdisplay == "0")
    {
        currentdisplay = num;
        display.textContent = currentdisplay;
    }
    else
    {
        currentdisplay += num;
        display.textContent = currentdisplay;
    }
}

seven.addEventListener("click", function(event)
{
    displayNumber("7");
});
eight.addEventListener("click", function(event)
{
    displayNumber("8");
});
nine.addEventListener("click", function(event)
{
    displayNumber("9");
});
four.addEventListener("click", function(event)
{
    displayNumber("4");
});
five.addEventListener("click", function(event)
{
    displayNumber("5");
});
six.addEventListener("click", function(event)
{
    displayNumber("6");
});
one.addEventListener("click", function(event)
{
    displayNumber("1");
});
two.addEventListener("click", function(event)
{
    displayNumber("2");
});
three.addEventListener("click", function(event)
{
    displayNumber("3");
});
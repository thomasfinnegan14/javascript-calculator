let num1 = 0;
let num2 = 0;
let operator = "+";
let currentdisplay = "0";
let predisplay = "";
let checkoperator = false;
let checkdecimal = false;

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

// Display
const display = document.querySelector("#display");

// Clear button
const clear = document.querySelector("#clear");

// Number buttons
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const zero = document.querySelector("#zero");

// Math operators
const plus = document.querySelector("#add");
const minus = document.querySelector("#subtract");
const equal = document.querySelector("#equal");
const mult = document.querySelector("#multiply");
const division = document.querySelector("#divide");
const decimal = document.querySelector("#decimal");

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
zero.addEventListener("click", function(event)
{
    displayNumber("0");
})

// Add ability
plus.addEventListener("click", function(event)
{
    if (checkoperator == false)
    {
        num1 = Number(currentdisplay);
        operator = "+";
        currentdisplay += operator;
        predisplay = currentdisplay;
        display.textContent = currentdisplay;
        checkoperator = true;
        checkdecimal = false;
    }
    else
    {
        equalFunc();
    }
});

// Subtract ability
minus.addEventListener("click", function(event)
{
    if (checkoperator == false)
    {
        num1 = Number(currentdisplay);
        operator = "-";
        currentdisplay += operator;
        predisplay = currentdisplay;
        display.textContent = currentdisplay;
        checkoperator = true;
        checkdecimal = false;
    }
    else
    {
        equalFunc();
    }
});

// Multiply ability
mult.addEventListener("click", function(event)
{
    if (checkoperator == false)
    {
        num1 = Number(currentdisplay);
        operator = "*";
        currentdisplay += operator;
        predisplay = currentdisplay;
        display.textContent = currentdisplay;
        checkoperator = true;
        checkdecimal = false;
    }
    else
    {
        equalFunc();
    }
});

// Divide ability
division.addEventListener("click", function(event)
{
    if (checkoperator == false)
    {
        num1 = Number(currentdisplay);
        operator = "/";
        currentdisplay += operator;
        predisplay = currentdisplay;
        display.textContent = currentdisplay;
        checkoperator = true;
        checkdecimal = false;
    }
    else
    {
        equalFunc();
    }
});

// Decimal ability
decimal.addEventListener("click", function(event)
{
    if (checkoperator == false && currentdisplay % 1 == 0 && checkdecimal == false)
    {
        currentdisplay += ".";
        display.textContent = currentdisplay;
        checkdecimal = true;
    }
});

// Equal ability

function equalFunc()
{
    num2 = Number(currentdisplay.replace(predisplay, ''));
    if (operator == "/" && num2 == 0)
    {
        alert("Cannot divide by zero!");
        num2 = 1;
    }
    display.textContent = Math.round(operate(operator, num1, num2) * 100) / 100;
    currentdisplay = operate(operator, num1, num2);
    checkoperator = false;
    checkdecimal = false;
}
equal.addEventListener("click", function(event)
{
    equalFunc();
});
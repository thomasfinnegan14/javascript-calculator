let num1 = 1;
let num2 = 2;
let operator = "+";

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
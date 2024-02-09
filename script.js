document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let result = '';

    function updateDisplay() {
        display.value = result || firstOperand + operator + secondOperand;
    }

    function clear() {
        firstOperand = '';
        operator = '';
        secondOperand = '';
        result = '';
        updateDisplay();
    }

    function calculate() {
        if (operator && secondOperand) {
            result = operate(operator, parseFloat(firstOperand), parseFloat(secondOperand));
            updateDisplay();
            firstOperand = result;
            operator = '';
            secondOperand = '';
        }
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return "Error";
        }
        return a / b;
    }

    function operate(operator, a, b) {
        switch (operator) {
            case '+':
                return add(a, b);
            case '-':
                return subtract(a, b);
            case '*':
                return multiply(a, b);
            case '/':
                return divide(a, b);
            default:
                return "Error";
        }
    }

    document.querySelectorAll('.digit, .operator').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            if (value === '.') {
                if (!secondOperand.includes('.')) {
                    secondOperand += '.';
                }
            } else if (value === '+' || value === '-' || value === '*' || value === '/') {
                operator = value;
            } else {
                if (!operator) {
                    firstOperand += value;
                } else {
                    secondOperand += value;
                }
            }
            updateDisplay();
        });
    });

    document.getElementById('equals').addEventListener('click', calculate);
    document.getElementById('clear').addEventListener('click', clear);
});

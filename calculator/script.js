let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = '';
    previousInput = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        display.innerText = currentInput;
        return;
    }
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    display.innerText = result;
}
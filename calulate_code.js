const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      inputNumber(button.textContent);
    } else if (button.classList.contains('decimal')) {
      inputDecimal();
    } else if (button.classList.contains('operator')) {
      handleOperator(button.textContent);
    } else if (button.classList.contains('equals')) {
      calculate();
    } else if (button.classList.contains('clear')) {
      clearAll();
    }
  });
});

function inputNumber(number) {
  if (waitingForSecondOperand) {
    display.value = number;
    waitingForSecondOperand = false;
  } else {
    const currentValue = display.value;
    display.value = currentValue === '0' ? number : currentValue + number;
  }
}

function inputDecimal() {
  if (waitingForSecondOperand) {
    display.value = '0.';
    waitingForSecondOperand = false;
  } else if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function handleOperator(nextOperator) {
  const inputValue = parseFloat(display.value);
  if (operator && waitingForSecondOperand) {
    operator = nextOperator;
    return;
  }
  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    display.value = parseFloat(result.toFixed(7)).toString();
    firstOperand = result;
  }
  waitingForSecondOperand = true;
  operator = nextOperator;
}

function calculate() {
  const inputValue = parseFloat(display.value);
  if (firstOperand === null || waitingForSecondOperand) {
    return;
  }
  const result = calculate(firstOperand, inputValue, operator);
  display.value = parseFloat(result.toFixed(7)).toString();
  firstOperand = result;
  waitingForSecondOperand = true;
  operator = null;
}

function clearAll() {
  display.value = '0';
  firstOperand = null;
  waitingForSecondOperand = false;
  operator = null;
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

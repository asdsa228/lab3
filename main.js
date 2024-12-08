const display = document.getElementById("display");
const result = document.getElementById("result");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  if (!["+", "-", "*", "/"].includes(lastChar)) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = "";
  result.value = "0";
}

function calculate() {
  try {
    const expression = display.value;
    const calculatedResult = eval(expression);
    result.value = calculatedResult;
  } catch {
    result.value = "Помилка";
  }
}

let result = document.querySelector(".result");
let button = document.querySelectorAll("button");
let groupButton = document.querySelector(".calculator-group");
let resultNumbers = "";
let firstDigits = "";
let secondDigits = "";
let operator = "";
//lets declare and assign all everything I'm going to use
//lets hard code everything first
//then we can refactor.
//if you click 7 result becomes 7

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    if (i === 0) {
      buttonClear();
    } else if (i === 1 || i === 6 || i === 10) {
      return;
    } else if (i === 2) {
      divider();
    } else if (i === 16) {
      doCalculation();
    } else if (i === 14) {
      addition();
    } else {
      buttonPressed(i);
    }
  });
}

function buttonClear() {
  resultNumbers = "";
  firstDigits = "";
  secondDigits = "";
  result.innerHTML = 0;
}

function addition() {
  result.innerHTML = 0;
  firstDigits = resultNumbers;
  resultNumbers = "";
  operator = "+";
}

function subtraction() {}

function divider() {
  result.innerHTML = 0;
  firstDigits = resultNumbers;
  resultNumbers = "";
  operator = "/";
}

function buttonPressed(i) {
  resultNumbers += button[i].innerHTML;
  result.style.fontSize = "5rem";
  result.style.paddingRight = "20px";
  result.innerHTML = resultNumbers;
}

function doCalculation() {
  secondDigits = resultNumbers;
  if (operator === "/") {
    result.innerHTML = Math.round(+firstDigits / +secondDigits);
  } else if (operator === "+") {
    result.innerHTML = Math.round(+firstDigits + +secondDigits);
  }
}

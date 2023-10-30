let result = document.querySelector(".result");
let button = document.querySelectorAll("button");
let groupButton = document.querySelector(".calculator-group");
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
      buttonC();
    } else if (i === 1 || i === 6 || i === 10 || i === 14 || i === 16) {
      return;
    } else if (i === 2) {
      result.innerHTML = 0;
    } else {
      console.log(button[i].innerHTML);
      firstDigits += button[i].innerHTML;
      result.style.fontSize = "5rem";
      result.style.paddingRight = "20px";

      result.innerHTML = +firstDigits;
    }
  });
}

function buttonC() {
  firstDigits = "";
  secondDigits = "";
  result.innerHTML = 0;
}

let input = document.querySelector(".input-to-copy");

let para = document.querySelector(".p-to-input");

input.addEventListener("keyup", function () {
  para.innerHTML = input.value;
});

let inputText = document.querySelectorAll(".scoreboard-letter");
let loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;

async function init() {
  let currentGuess = "";

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    inputText[currentGuess.length - 1].innerText = letter;
  }

  document.addEventListener("keydown", function handleKeypress(event) {
    const action = event.key;
    console.log(action);

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backSpace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      //do nothing
    }
  });
}

init();

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

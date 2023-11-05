let inputText = document.querySelectorAll(".scoreboard-letter");
let loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;

async function init() {
  let currentGuess = "";
  let currentRow = 0;

  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const resobj = await res.json();
  const word = resobj.word.toUpperCase();
  const wordParts = word.split("");
  console.log(word);
  setLoading(false);

  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }
    inputText[ANSWER_LENGTH * currentRow + currentGuess.length - 1].innerText =
      letter;
  }

  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      return;
    }
    //TODO validate the word

    //TODO do all the marking
    const map = makeMap(wordParts);
    const guessParts = currentGuess.split("");

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      //mark as correct
      if (guessParts[i] === wordParts[i]) {
        inputText[currentRow * ANSWER_LENGTH + i].classList.add("correct");
        map[guessParts[i]]--;
      }
    }

    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] === wordParts[i]) {
        //do nothing
      } else if (wordParts.includes(guessParts[i]) && map[guessparts[i]] > 0) {
        inputText[currentRow * ANSWER_LENGTH + i].classList.add("close");
        map[guessParts[i]]--;
      } else {
        inputText[currentRow * ANSWER_LENGTH + i].classList.add("wrong");
      }
    }
    //TODO did they win or lose?

    currentRow++;
    currentGuess = "";
  }

  function backSpace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    inputText[ANSWER_LENGTH * currentRow + currentGuess.length].innerText = "";
  }

  document.addEventListener("keydown", function handleKeypress(event) {
    const action = event.key;

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

function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    const letter = array[i];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
    return obj;
  }
}

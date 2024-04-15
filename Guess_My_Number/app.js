const input = document.querySelector("#number");
const btnCheck = document.querySelector(".btn-check");
const guessNum = document.querySelector(".guess-number");
const resultOutcome = document.querySelector(".result-outcome");
const scoreNum = document.querySelector(".score span");
const highScore = document.querySelector(".highScore span");
const btnAgain = document.querySelector(".btn-again");

let randomNum = Math.trunc(Math.random() * 20) + 1;
console.log(randomNum);
let score = 20;
let highScores = 0;

const scoreChecker = function (message) {
  if (score > 1) {
    score--;
    resultOutcome.textContent = message;
    scoreNum.textContent = score;
  } else {
    resultOutcome.textContent = "💥 You lost the Game";
    scoreNum.textContent = 0;
    btnCheck.classList.add("disabled");
  }
};

const matchGuessNum = function () {
  const value = +input.value;

  if (value === 0 || value <= 0 || value > 20) {
    resultOutcome.textContent = "⛔ Enter a valid Number";

  } else if (value < randomNum) {

    scoreChecker("📉 Too low");

  } else if (value > randomNum) {

    scoreChecker("📈 Too high");

  } else if (value === randomNum) {
    resultOutcome.textContent = "🎉 Match Found";
    guessNum.textContent = value;

    if (score > highScores) {
      highScores=score
      highScore.textContent = highScores;
    }

    document.body.classList.add("green-color");
    btnCheck.classList.add("disabled");
  }
};

const resetGame = function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNum);
  guessNum.textContent = "?";
  score = 20;
  scoreNum.textContent = score;
  resultOutcome.textContent = "Start guessing...";
  input.value = "";
  document.body.classList.remove("green-color");
  btnCheck.classList.remove("disabled");
};

btnCheck.addEventListener("click", matchGuessNum);
btnAgain.addEventListener("click", resetGame);

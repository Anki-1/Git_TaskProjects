const newGame = document.querySelector(".new-game");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const diceImg = document.querySelector(".dice-img");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player1_total = document.querySelector("#score-0");
const player2_total = document.querySelector("#score-1");
const player1_current = document.querySelector("#point-0");
const player2_current = document.querySelector("#point-1");

let current_count = 0;
const total_count = [0, 0];
let activePlayer = 0;
let isPlaying = true;

const switchPlayer = function () {
  // SET PREVIOUS ACTIVE PLAYER CURRENT SCORE TO ZERO
  current_count = 0;
  document.querySelector(`#point-${activePlayer}`).textContent = 0;

  // TOGGLE ACTIVE PLAYER
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelectorAll(".player")
    .forEach((player) => player.classList.remove("player-active"));
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player-active");
};

const generatePoints = function () {
  // GENERATE RANDOM NUMBER
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  if (isPlaying) {
    // DISPLAY DICE IMAGE
    diceImg.classList.remove("hidden");
    diceImg.setAttribute(
      "src",
      `https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/07-Pig-Game/starter/dice-${randomNum}.png?raw=true`
    );

    // DISPLAY CURRENT SCORE
    if (randomNum !== 1) {
      current_count += randomNum;
      document.querySelector(`#point-${activePlayer}`).textContent =
        current_count;
    } else {
      // TOTAL SCORE
      total_count[activePlayer] += current_count;
      document.querySelector(`#score-${activePlayer}`).textContent =
        total_count[activePlayer];
      switchPlayer();
    }
  }
};

const totalScore = function () {
  if (isPlaying) {
    // TOTAL SCORE
    total_count[activePlayer] += current_count;
    document.querySelector(`#score-${activePlayer}`).textContent =
      total_count[activePlayer];

    // POINT CHECK 100
    if (total_count[activePlayer] >= 100) {
      isPlaying = false;
      diceImg.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player-winner");
    } else {
      switchPlayer();
    }
  }
};

const resetGame = function () {
  isPlaying = true;
  player1_total.textContent = 0;
  player2_total.textContent = 0;
  player1_current.textContent = 0;
  player2_current.textContent = 0;
  activePlayer = 0;
  total_count[0] = 0;
  total_count[1] = 0;
  current_count = 0;

  // REMOVE ACTIVE CLASS
  player1.classList.remove("player-active");

    // ADD ACTIVE CLASS TO PLAYER 1
  player0.classList.add("player-active");

    // REMOVE WINNER CLASS
  player0.classList.remove("player-winner");
  player1.classList.remove("player-winner");
};

rollDice.addEventListener("click", generatePoints);
hold.addEventListener("click", totalScore);
newGame.addEventListener("click", resetGame);

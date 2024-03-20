const whacMoleContainer = document.querySelector(".whacMoleContainer");
const score = document.querySelector("#score");
const time = document.querySelector("#time");
const boxes = document.querySelectorAll(".box");

let point = 0;
let timer = 60;
let isGameOver = false;
let lastMoleClicked = null;

const generateRandomMole = function () {
  const intervalID = setInterval(() => {
    if (isGameOver) {
      clearInterval(intervalID);
      return;
    }
    const randomNum = Math.trunc(Math.random() * boxes.length);
    boxes.forEach((box) => box.classList.remove("mole"));
    boxes[randomNum].classList.add("mole");
  }, 1000);
};

const countDown = function () {
  const timerID = setInterval(() => {
    timer--;
    time.textContent = timer;
    if (timer === 0) {
      clearInterval(timerID);
      time.classList.add('over');
      time.textContent = 'Game Over';
      isGameOver = true;
      whacMoleContainer.removeEventListener("click", handleMoleClick);
    }
  }, 1000);
};

const handleMoleClick = function (e) {
  if (e.target.classList.contains("box")) {
    if (isGameOver) return;
    if (e.target === lastMoleClicked) return;
    if (e.target.classList.contains("mole")) {
      point++;
      score.textContent = point;
      lastMoleClicked = e.target;
    }
  }
};

generateRandomMole();
countDown();
whacMoleContainer.addEventListener("click", handleMoleClick);

const cardArray = [
  {
    name: "fries",
    img: "https://github.com/kubowania/memory-game/blob/master/images/fries.png?raw=true",
  },
  {
    name: "cheeseburger",
    img: "https://github.com/kubowania/memory-game/blob/master/images/cheeseburger.png?raw=true",
  },
  {
    name: "ice-cream",
    img: "https://github.com/kubowania/memory-game/blob/master/images/ice-cream.png?raw=true",
  },
  {
    name: "pizza",
    img: "https://github.com/kubowania/memory-game/blob/master/images/pizza.png?raw=true",
  },
  {
    name: "milkshake",
    img: "https://github.com/kubowania/memory-game/blob/master/images/milkshake.png?raw=true",
  },
  {
    name: "hotdog",
    img: "https://github.com/kubowania/memory-game/blob/master/images/hotdog.png?raw=true",
  },
  {
    name: "fries",
    img: "https://github.com/kubowania/memory-game/blob/master/images/fries.png?raw=true",
  },
  {
    name: "cheeseburger",
    img: "https://github.com/kubowania/memory-game/blob/master/images/cheeseburger.png?raw=true",
  },
  {
    name: "ice-cream",
    img: "https://github.com/kubowania/memory-game/blob/master/images/ice-cream.png?raw=true",
  },
  {
    name: "pizza",
    img: "https://github.com/kubowania/memory-game/blob/master/images/pizza.png?raw=true",
  },
  {
    name: "milkshake",
    img: "https://github.com/kubowania/memory-game/blob/master/images/milkshake.png?raw=true",
  },
  {
    name: "hotdog",
    img: "https://github.com/kubowania/memory-game/blob/master/images/hotdog.png?raw=true",
  },
];

const result = document.querySelector("#result");
const gameContainer = document.querySelector(".gameContainer");

let cardArr = [];
let cardIDArr = [];
let count = 0
cardArray.sort(() => 0.5 - Math.random());

const mapCardArray = function (data) {
  const displayCard = data
    .map((item, i) => {
      return `<img src = "https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true" alt=${item.name} class='cardImg' data-id=${i}>`;
    })
    .join("");

  gameContainer.innerHTML = displayCard;
};

mapCardArray(cardArray);

const checkMatch = function () {
  const cards = document.querySelectorAll(".cardImg");
  if (cardIDArr[0] == cardIDArr[1]) {
    console.log("YOu clicked same card");
    cards[cardIDArr[0]].setAttribute(
      "src",
      "https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true"
    );
  }

  else if (cardArr[0] == cardArr[1]) {
    console.log("Its a match");
    cards[cardIDArr[0]].setAttribute(
      "src",
      "https://github.com/kubowania/memory-game/blob/master/images/white.png?raw=true"
    );
    cards[cardIDArr[1]].setAttribute(
      "src",
      "https://github.com/kubowania/memory-game/blob/master/images/white.png?raw=true"
    );
    
    cards[cardIDArr[0]].classList.add('pointer');
    cards[cardIDArr[1]].classList.add('pointer');
  } else {
    cards[cardIDArr[0]].setAttribute(
      "src",
      "https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true"
    );
    cards[cardIDArr[1]].setAttribute(
      "src",
      "https://github.com/kubowania/memory-game/blob/master/images/blank.png?raw=true"
    );
    
  }

  cardArr = [];
  cardIDArr = [];
  count++;
  result.textContent = count
};

const flipCard = function (e) {
  if (e.target.classList.contains("cardImg")) {
    const dataAlt = e.target.getAttribute("alt");
    const dataID = e.target.dataset.id;
    e.target.setAttribute(
      "src",
      `https://github.com/kubowania/memory-game/blob/master/images/${dataAlt}.png?raw=true`
    );

    cardIDArr.push(dataID);
    cardArr.push(dataAlt);
    
    if (cardArr.length === 2) {
      setTimeout(checkMatch, 1500);
    }
  }
};

gameContainer.addEventListener("click", flipCard);

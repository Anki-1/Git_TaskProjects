const data = [
  {
    img: '<i class="fas fa-utensils"></i>',
    count: 400,
    info: "Meals Delivered",
  },
  {
    img: '<i class="far fa-smile"></i>',
    count: 340,
    info: "Happy Customers",
  },
  {
    img: '<i class="fas fa-grip-lines"></i>',
    count: 225,
    info: "Menu Items",
  },
  {
    img: '<i class="fas fa-star"></i>',
    count: 280,
    info: "Five Stars",
  },
];

const boxContainer = document.querySelector(".boxContainer");

const mapCountBox = function (Items) {
  const displayItem = Items.map((item) => {
    const { img, count, info } = item;
    return `
    <article class="box">
    <p class="logo">${img}</p>
    <h3 class="count">${count}</h3>
    <p class="info">${info}</p>
    </article>
    `;
  }).join("");

  boxContainer.innerHTML = displayItem;
};

mapCountBox(data);

const countVal = document.querySelectorAll(".box .count");

const matchCount = function () {
  countVal.forEach((count) => {
    const initialValue = +count.textContent;

    let time = 0;

    const increment = setInterval(() => {
      time++;

      count.textContent = time;

      if (time === initialValue) clearInterval(increment);

    }, 50);

  });
};


window.addEventListener('load', matchCount);

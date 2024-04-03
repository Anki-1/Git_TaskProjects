const input = document.querySelector("#text");
const searchBtn = document.querySelector(".btn-search");
const recipeInfo = document.querySelector(".recipeInfo");

const html = function (data, measure) {
  let measureItem = "";

  measure.forEach((meas) => {
    measureItem += `<li>${meas}</li>`;
  });

  return `
    <article class="recipeInfo">
      <div class="recipeBox">
        <img src=${data.strMealThumb} alt=${data.strMeal} />
        <div class="itemInfo">
          <p class="title">${data.strMeal}</p>
          <p class="country">${data.strArea}</p>
        </div>
      </div>
      <ul class="recipeList">${measureItem}</ul>
    </article>
    <button class="btn-recipe">View Recipe</button>
    `;
};

const mapRecipe = async function () {
  try {
    const value = input.value;
    if (!value) return;
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    if (!res.ok)
      throw new Error(`${value} is invalid recipe name Status: ${res.status}`);
    const data = await res.json();
    const [foodItem] = data.meals;
    console.log(foodItem);

    const strMeasures = Object.entries(foodItem)
      .filter(
        ([key, value]) => key.startsWith("strMeasure") && value.trim() !== ""
      )
      .map(([key, value]) => value);

    recipeInfo.innerHTML = html(foodItem, strMeasures);
  } catch (err) {
    console.log(err);
  }
};

searchBtn.addEventListener("click", mapRecipe);

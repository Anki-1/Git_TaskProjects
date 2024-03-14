const countryCont = document.querySelector('.countryCont');
const input = document.querySelector('#text');
const btnSearch = document.querySelector('.btn-search');
const loader = document.querySelector('.loader');


const addHTML = function (item) {
    return `
            <div class="countryContent">
                <div class="countryData">
                    <img src=${item.flag} alt=${item.name} class="countryFlag">
                    <p class="countryName">${item.name}</p>
                </div>
                <div class="info">
                    <p class="capital">Capital: <span>${item.capital}</span></p>
                    <p class="continent">Continent: <span>${item.region}</span></p>
                    <p class="population">Population: <span>${item.population}</span></p>
                    <p class="currency">Currency: <span>${item.currencies[0].name}</span></p>
                    <p class="lang">Languages: <span>${item.languages.map(lang => lang.name).join(', ')}</span></p>
                </div>
            </div>`
}

const countryGuide = async function () {
    try {
        const value = input.value;

        if (!value) return;

        loader.style.display = 'block';

        const url = `https://restcountries.com/v2/name/${value}`

        const res = await fetch(url);

        if (!res.ok) throw new Error(`${value} is invalid country name Status: ${res.status}`);

        const [data] = await res.json();

        countryCont.innerHTML = addHTML(data);

    } catch (err) {

        countryCont.innerHTML = err.message;

    } finally {

        loader.style.display = 'none';

        input.value = '';
    }

}

btnSearch.addEventListener('click', countryGuide);
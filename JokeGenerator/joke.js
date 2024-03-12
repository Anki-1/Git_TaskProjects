const jokeCont = document.querySelector('.jokeCont');
const btnGenerate = document.querySelector('.btn-generate');
const loader = document.querySelector('.loader');

const displayJoke = async function (link) {
    try {
        loader.style.display = 'block'; // Show loader
        const res = await fetch(link);
        if (!res.ok) throw new Error(`Issue with Joke API Status: ${res.status}`);
        const data = await res.json();
        const { joke } = data;
        jokeCont.innerHTML = joke;
    } catch (err) {
        jokeCont.innerHTML = `<p>${err.message}</p>`;
    } finally {
        loader.style.display = 'none'; // Hide loader regardless of fetch success or failure
    }
}

btnGenerate.addEventListener('click', function () {
    displayJoke('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single')
});

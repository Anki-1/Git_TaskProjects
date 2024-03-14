const btnSearch = document.querySelector('.btn-search');
const dictContent = document.querySelector('.dictionaryContent');
const input = document.querySelector('.form #text');
const meaning = document.querySelector('.meaning');
const description = document.querySelector('.example');
const word = document.querySelector('.word');
const audio = document.querySelector('.audioDef audio');
const pronounce = document.querySelector('.pronunciation');
const partOfSpeech = document.querySelector('.partOfSpeech');
const spelled = document.querySelector('.spelled')
const playBtn = document.querySelector('.audioDef .fa-volume-up');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

const dictionaryApp = async function () {

    try {

        const value = input.value;

        if (!value) return;

        loader.style.display = 'block';

        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);

        if (!res.ok) throw new Error(`${value} doesn't exist Status: ${res.status}`);

        const [data] = await res.json();

        dictContent.classList.remove('hidden');

        const dictWord = data.word

        if (dictWord) word.innerHTML = dictWord;

        const dictPartOfSpeech = `${data.meanings[0].partOfSpeech}`;

        const dictSpell = data.phonetics.find(txt => txt.text !== undefined);

        if (dictPartOfSpeech) partOfSpeech.innerHTML = dictPartOfSpeech

        if (dictSpell) spelled.innerHTML = dictSpell.text;

        const dictMeaning = data.meanings[0].definitions[0].definition;

        if (dictMeaning) meaning.innerHTML = dictMeaning;

        const dictAudio = data.phonetics.find(aud => aud.audio !== '');

        if (dictAudio) {

            audio.setAttribute('src', dictAudio.audio);

            if (dictAudio.audio) {

                playBtn.addEventListener('click', () => {
                    audio.play();
                })

                playBtn.style.display = "block";
            }
        } else {
            playBtn.style.display = "none";
        }

        dictContent.style.display = "block";
        error.style.display = "none";

    } catch (err) {
        dictContent.style.display = "none";
        error.style.display = "block";
        error.textContent = err.message;
    } finally {
        loader.style.display = 'none'; // Hide loader regardless of fetch success or failure
        input.value = '';
    }
}

btnSearch.addEventListener('click', dictionaryApp);

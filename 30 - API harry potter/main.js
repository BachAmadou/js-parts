/*
1. Get the characters of Harry Potter displayed from the API
2. Create search to filter characters by name
*/

const url = "http://hp-api.herokuapp.com/api/characters";
const charactersList = document.querySelector("#charactersList");
let hpCharacters = [];

const loadCharacters = async () => {
    try {
        const response = await fetch(url);
        hpCharacters = await response.json();
        showCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}

function showCharacters(characters) {
    const words = characters.map((character) => {
        return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>`
    }).join("");
    charactersList.innerHTML = words;
}

loadCharacters();
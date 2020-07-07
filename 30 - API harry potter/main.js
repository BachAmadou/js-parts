/*
1. Get the characters of Harry Potter displayed from the API
2. Create search to filter characters by name
*/

const url = "http://hp-api.herokuapp.com/api/characters";
const charactersList = document.querySelector("#charactersList");
const searchBar = document.querySelector("#searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
    const searchChar = e.target.value.toLowerCase();
    const filteredChar = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchChar) || character.house.toLowerCase().includes(searchChar));
    });
    showCharacters(filteredChar);
});

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
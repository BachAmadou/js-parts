const jokeBtn = document.querySelector("#jokeBtn");
const jokeText = document.querySelector("#jokeText");
const url = "https://api.icndb.com/jokes/random";

jokeBtn.addEventListener("submit", async (e) => {
    e.preventDefault();
    const response = await fetch(url);
        const data = await response.json();
        console.log(data.value.id);
        //jokeText.innerHTML = data.value.joke;

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data.value.id);
    //     jokeText.innerHTML = data.value.joke;
    // } 
    // catch(err) {
    //     console.error(err)
    // }
});
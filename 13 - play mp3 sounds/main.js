/*
This is the lesson where we're going to show you how you can play sounds MP 3 files using JavaScript.
*/

const musics = document.querySelectorAll(".music");
console.log(musics);

for( let i = 0; i < musics.length; i++) {
    musics[i].addEventListener("click", function() {
        let musicType = this.innerText;
        let lowerCaseMusic = musicType.toLowerCase();
        //console.log(lowerCaseMusic);
        makeSound(lowerCaseMusic);
        addStyle(lowerCaseMusic);
    });
}

function addStyle(name) {
    let activeEl = document.querySelector("." + name);
    console.log(activeEl);
    activeEl.classList.add("active");
    setTimeout(function(){
        activeEl.classList.remove("active");
    }, 200);
}

function makeSound(name) {
    console.log(name);
    switch(name) {
        case "7th chambers":
        let sound1 = new Audio("sounds/wutang.mp3");
        sound1.play();
        break;

        case "4th chambers":
        let sound2 = new Audio("sounds/Gza.mp3");
        sound2.play();
        break;

        case "kiz":
        let sound3 = new Audio("sounds/kiz.mp3");
        sound3.play();
        break;
    }
}








// const button = document.querySelector("button");
// const kiz = new Audio('sounds/kiz.mp3');

// button.addEventListener("click", function() {
//     let duration = kiz.duration;
//     let muted = kiz.muted;
//     kiz.play();
//     console.log(muted);
// });
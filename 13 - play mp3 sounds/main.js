/*
This is the lesson where we're going to show you how you can play sounds MP 3 files using JavaScript.
*/

myMusic = ["wutang", "Gza", "kizumba"];
//console.log(myMusic);

document.addEventListener("DOMContentLoaded", init);

function init() {
    myMusic.forEach(function(item) {
        let div = document.createElement("div");
        div.setAttribute("class", "music" + item);
        div.innerText = item.toUpperCase();
        div.addEventListener("click", function() {
          playMusic(item);
        });
        document.body.appendChild(div);
      });
}

function playMusic(name) {
    let activeEl = document.querySelector("." + name);
    //console.log(activeEl);
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
    activeEl.classList.add("active");
    setTimeout(function(){
        activeEl.classList.remove("active");
    }, 200);
}

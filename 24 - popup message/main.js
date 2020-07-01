/*
Click an element, shows modal popup message with close button.
Message contents from element attributes.
*/

const popups = document.querySelectorAll(".popup");
const pop = document.querySelector(".output");
const popMessage = document.querySelector(".message");
const closeBtn = document.querySelector("button");

for(let i = 0; i < popups.length; i++) {
    //console.log(popups);
    popups[i].addEventListener("click", function() {
        let outputText = this.getAttribute("data-message");
        //console.log(popupText);
        message(outputText);
    });
}

closeBtn.addEventListener("click", function() {
    pop.classList.add("hide");
});

function message(output) {
    pop.classList.remove("hide");
    popMessage.innerText = output;
}



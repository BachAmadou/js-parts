const mainElements = document.querySelectorAll(".main");
const contentElements = document.querySelectorAll(".content");

for(let i = 0; i < mainElements.length; i++) {
    //console.log(mainElements[i]);
    mainElements[i].addEventListener("click", function() {
        //console.log(mainElements[i].nextElementSibling);
        clearActive();
        mainElements[i].nextElementSibling.classList.toggle("active");
    });
}

function clearActive() {
    for(let i = 0; i < contentElements.length; i++) {
        contentElements[i].classList.remove("active");
    }
}
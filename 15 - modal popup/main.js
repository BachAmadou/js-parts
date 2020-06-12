
const btn = document.querySelectorAll(".modal");
const modalWrapper = document.querySelector(".modalWrapper");
const btnClose = document.querySelector(".close");
console.log(btn);

btn.forEach(function(button) {
    console.log(button);
    makeClick(button);
});

function makeClick(el) {
    el.addEventListener("click", function() {
        //console.log("clicked");
        modalWrapper.classList.add("showModal");
        btnClose.addEventListener("click", function() {
            modalWrapper.classList.remove("showModal");
        });
        modalWrapper.addEventListener("click", function() {
            modalWrapper.classList.remove("showModal");
        });
    });
}


const output = document.querySelector(".output");
const show = document.querySelector(".show");
const close = document.querySelectorAll(".close");
const images = document.querySelectorAll(".pop img");
//console.log(images);

images.forEach(function(img) {
    //console.log(img);
    img.addEventListener("click", popImage);
});

close.forEach(function(img) {
    img.addEventListener("click", function() {
        show.classList.add("hide");
    });
});

function popImage(e) {
    //console.log(this.src);
    output.querySelector("img").setAttribute("src", this.src);
    show.classList.remove("hide");
}
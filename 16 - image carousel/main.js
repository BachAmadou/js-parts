
let slideIndex = 0;
let timer;

const myImages = [
    {
        "img" : "https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com",
        "caption" : "The first images"
    },
    {
        "img" : "https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com",
        "caption" : "The second images"
    },
    {
        "img" : "https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com",
        "caption" : "The third images"
    }
];

builder();

function builder() {
    //console.log(myImages);
    for(let i = 0; i < myImages.length; i ++) {
        let slide = document.createElement("div");
        slide.setAttribute("class","mySlides fade");
        let img = document.createElement("img");
        img.setAttribute("src", myImages[i].img);
        let cap = document.createElement("div");
        cap.classList.add("caption");
        cap.innerText = myImages[i].caption;
        slide.appendChild(img);
        slide.appendChild(cap);

        document.querySelector(".slideContainer").appendChild(slide);
        let span = document.createElement("span");
        span.classList.add("dot");
        span.addEventListener("click", function() {
            moveSlides(i);
        });
        document.querySelector(".indicator").appendChild(span);
    }
    playSlides();
}

    function playSlides() {
        const slides = document.querySelectorAll(".mySlide");
        const dots =  document.querySelectorAll(".dot");
        const active = document.querySelector(".active");
        console.log(slides);
        console.log(dots);
        console.log(active);

        if(slideIndex + 1 > slides.length) {
            slideIndex = 0;
        }
        slides.forEach(function(el) {
            el.style.display = "none";
        });
        slides[slideIndex].style.display = "block";
        slideIndex++;
        console.log(slideIndex);
        timer = setTimeout(playSlides, 3000);
    }

    function moveSlides (num) {
        console.log(num);
    }

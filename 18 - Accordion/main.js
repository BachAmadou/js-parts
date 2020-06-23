const stars = document.querySelectorAll(".star");
const output = document.querySelector(".output");

for(let i = 0; i < stars.length; i++) {
    stars[i].starValue = (i + 1);
    //console.log(stars[i]);

    ["mouseover","mouseout","click"].forEach(function(e) {
        stars[i].addEventListener(e, starRate);
    });
}

function starRate(e) {
    //console.log(this.starValue);
    // console.log(e.type);
    let t = e.type;
    let starValue = this.starValue;

    stars.forEach(function(ele, indexValue) {
        //console.log(ele);
        //console.log(ind);
        if(t === "click") {
            if(starValue > 1) {
                output.innerHTML = "You rated this " + starValue + " stars";
            }
        }

        if (t === "click") {
            if(indexValue < starValue) {
                ele.classList.add("orange");
            } else {
                ele.classList.remove("orange");
            }
        }

        if (t === "mouseover") {
            if(indexValue < starValue) {
                ele.classList.add("yellow");
            } else {
                ele.classList.remove("yellow");
            }
        }

        if (t === "mouseout") {
            if(indexValue < starValue) {
                ele.classList.remove("yellow");
            }
        }
    });
}
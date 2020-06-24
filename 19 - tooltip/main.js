/*
Show popup tooltip over words when mouse is on top of element
*/

const tooltip = document.querySelectorAll(".tooltip");
const output = document.querySelector(".output");
let myTooltip;

for(let i = 0; i < tooltip.length; i++) {
    tooltip[i].addEventListener("mouseover", function(e) {
        //console.log(this);
        let holder = this.getAttribute("tooltip-content");
        //console.log(holder);
        clearInterval(myTooltip);
        //console.log(e.clientX);
        //console.log(e.clientY);
        output.style.display = "block";
        output.style.top = e.clientY + 5 + "px";
        output.style.left = e.clientX + 5 + "px";
        output.innerHTML = holder;
        myTooltip = setInterval(function() {
            output.style.display = "none";
        }, 3000);
    });
    tooltip[i].addEventListener("mouseout", function(e) {
        output.style.display = "none";        
    });
}

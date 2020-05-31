/*
Using only JavaScript, create an element that moves with key presses. Create the element when DOMContentLoaded. Write the rest of the code from the below starter 
*/

// Solution:
let box = {
    speed: 100,
    x: 100,
    y: 100
};

window.addEventListener('DOMContentLoaded', build);

document.addEventListener('keydown', function(e) {
    let key = e.keyCode;
    console.log(key);
    if(key === 37) { box.x -= box.speed; }
    if(key === 38) { box.y -= box.speed; }
    if(key === 39) { box.x += box.speed; }
    if(key === 40) { box.y += box.speed; }
    box.el.style.left = box.x + "px";
    box.el.style.top = box.y + "px";
});

function build() {
    box.el = document.createElement('div');
    box.x = 100;
    box.y = 100;
    box.el.style.position = "absolute";
    box.el.style.width = "100px";
    box.el.style.height = "100px";
    box.el.style.backgroundColor = "red";
    box.el.style.top = box.x + "px";
    box.el.style.left = box.y + "px";
    document.body.appendChild(box.el);
}

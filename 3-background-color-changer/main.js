/*
Challenge:
Add a button that change the body background color
Click button change body background
*/

// Solution - 1:
// const btnColor = document.querySelector("#changer");

// btnColor.addEventListener('click', function() {
//     //console.log("color");
//     let pageColor = "rgb("+random(255)+","+random(255)+","+random(255)+")";
//     //console.log(pageColor);
//     document.body.style.backgroundColor = pageColor;
// });


// // Define random numbers
// function random(num) {
//     return Math.floor(Math.random() * (num + 1));
// }

// Solution - 2: using 'hexdecimal format' without using the button
document.body.style.backgroundColor = randColor();

function randColor() {
    return "#" + Math.random().toString(16).substr(-6);
}

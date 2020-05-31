/*
Use Math to calculate a value
Get an input from the user and use it in the calculation.
Update the HTML to show the final value
*/

// Solution:
const btnTip = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");
//console.log(btnTip);

btnTip.addEventListener('click', function() {
    //console.log(cost.value * 0.15);
    let tip = (cost.value * 0.15).toFixed(2);
    let text = `<h1> You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = text;
});
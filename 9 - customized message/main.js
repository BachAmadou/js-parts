/*
Get input value and output to the screen a welcome message to the users name that is entered into the input field;
*/

// Solution:
const userText = document.querySelector("input");
const output = document.querySelector(".output");
const btnMessage = document.querySelector("button");

btnMessage.addEventListener('click', showMessage);

function showMessage() {
    //console.log("hi");
    output.innerHTML = `<h3> Hello whats up, ${userText.value}</h3>`;
    userText.value = " ";
}
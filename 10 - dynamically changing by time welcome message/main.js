/*
---Change the message dynamically depending on the time.
---Change the message background color
*/

const messageBtn = document.querySelector("button");
const output = document.querySelector(".output");

messageBtn.addEventListener("click", showMessage);

function showMessage() {
    console.log("clicked");
    const date = new Date();
    let currentHour = date.getHours();
    let message;

    if( currentHour > 17) {
        message = "its evening";
        output.style.backgroundColor = "black";
    } else if( currentHour > 12) {
        message = "its afternoon";
        output.style.backgroundColor = "blue";
    } else if( currentHour > 0) {
        message = "its morning";
        output.style.backgroundColor = "yellow";
    } else {
        message = "Something is wrong";
        output.style.backgroundColor = "red";
    }
    output.innerHTML = "<h1>" +message+ "</h1";
}
/*
Change the message dynamicallu depending on the time.
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
    } else if( currentHour > 12) {
        message = "its afternoon";
    } else if( currentHour > 0) {
        message = "its morning";
    } else {
        message = "Something is wrong";
    }
    output.innerHTML = "<h1>" +message+ "</h1";
}
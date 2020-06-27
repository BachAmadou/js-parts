/*
we've got an input field that we want to count how many characters are still available within the input field and how many characters are added in there.

And then if there is a limit.

If we only want 10 characters then we're going to output a message whenever we detect that the character count is above what is allocated for the input field.
*/

const output = document.querySelector(".output");
const text = document.querySelector("textarea");

["keyup", "keydown", "change"].forEach(function(e) {
    text.addEventListener(e, textCounter);
});

const maxLength = 20;
const warnLength = 7;

function textCounter(e) {
    //console.log(e);
    let count = text.value.length;

    if(count > maxLength) {
        //console.log(text.value.substring(0, maxLength));
        text.value = text.value.substring(0, maxLength);
    }
    
    if(count > warnLength) {
        output.classList.add("red");
    } else {
        output.classList.remove("red");
    }
    output.innerHTML = (maxLength - count) + " characters left ";
}
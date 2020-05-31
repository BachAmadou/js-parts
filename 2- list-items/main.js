/*
Challenge:
Show a list of items and give the ability to add new items to the list by submitting content from an input form.
Bonus: check if the input field has content with length of more than 3 characters.
*/

// Solution:
const mainList = document.querySelector("ul");
const inputElement = document.querySelector("input");
const addBtn = document.querySelector("button");

addBtn.addEventListener('click', function() {
    if (inputElement.value.length > 3) {
        let li = document.createElement("li");
        let inpText = document.createTextNode(inputElement.value);
        li.appendChild(inpText);
        mainList.appendChild(li);
    }
});
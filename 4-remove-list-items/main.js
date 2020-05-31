/*
Challenge:
--- Create to list items
--- Make existing items click and toggle line strike
--- Add (x) to item to allow for removal from list
--- Add list items without refreshing the browser
*/

// Solution:
const inputField = document.querySelector("input[name='newItem']");
const mainList = document.querySelector("ul");
const allListItems = document.querySelectorAll("li");

// Add the red color and line-through the li
for (let i = 0; i < allListItems.length; i++) {
    allListItems[i].addEventListener('click', crossedItem);
}

// Add the list items
inputField.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        makeNewItem();
    }
});

function makeNewItem() {
    let li = document.createElement("li");
    li.addEventListener('click', crossedItem);
    let textValue = inputField.value;
    inputField.value = " ";
    let nodeText = document.createTextNode(textValue);
    li.appendChild(nodeText);
    mainList.appendChild(li);
}

// remove the item if it is toggle to red
function crossedItem() {
    let change = this.classList.toggle("red");

    if (change) {
        let span = document.createElement("span");
        span.textContent = " x ";
        span.addEventListener('click', function() {
            this.parentElement.remove();
        });
        this.appendChild(span);
    } else {
        this.getElementsByTagName("span")[0].remove();
    }
}
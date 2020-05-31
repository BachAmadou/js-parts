/*
Challenge:
Create an array and randomly on page load output an item from the array on the screen.
*/

// Solution:
const arr = ["Hello", "Welcome", "Bye Bye", "Have a nice day"];
let list = randomItems(arr);
let message = document.createTextNode(list);
document.body.appendChild(message);

function randomItems(arr) {
    let randList = Math.floor(Math.random() * arr.length);
    return arr[randList];
}



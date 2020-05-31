/*
---Get Data from: https://jsonplaceholder.typicode.com/todos
--- Create elements that are green for completed and red for not complete items in the list. 
--- Populate a page div
*/

// Solution:
const url = "https://jsonplaceholder.typicode.com/todos";
const output = document.querySelector('div');
loadJSON();

function loadJSON() {
    fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            let items = document.createElement('div');
            items.style.color = data[i].completed ? "green" : "red";
            items.textContent = data[i].id + ". " + data[i].title; 
            output.appendChild(items);
        }    
    });
}

// if(data[i].completed) {
//     div.style.color = "green";
// } else {
//     div.style.color = "red";
// }
// // div.textContent = data[i].id + ". " + data[i].title;
// // output.appendChild(div);
// }
// div.textContent = data[i].id + ". " + data[i].title;
// output.appendChild(div);
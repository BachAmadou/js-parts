let myList = ["banana", "milk", "apples", "eggs", "cake"];
const btnAdd = document.querySelector("#addNew");
const output = document.querySelector(".output");
const newItem = document.querySelector("#addItem");

btnAdd.addEventListener("click", () => {
    //console.log("Clicked");
    if(newItem.value) {
        myList.push(newItem.value);
        build();
        newItem.value = "";
    }
});

window.onload = build;

function build() {
    output.innerHTML = "<h2>My List...</h2>";
    //console.log("ready");
    const table = document.createElement("table");

    for(let i = 0; i < myList.length; i++) {
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement("td");
        cell1.innerHTML = myList[i];
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click", () => {
            //console.log(myList[i]);
            let itemDelete = myList.splice(i, 1);
            //console.log(myList);
            build();
        });
        cell2.appendChild(span1);

        const span2 = document.createElement("span");
        span2.innerText = "Edit";
        span2.addEventListener("click", () => {
            row.style.backgroundColor = "Yellow";
            let tempEle = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempEle.innerText;
            newInput.focus();
            tempEle.innerHTML = "";
            tempEle.appendChild(newInput);
            newInput.addEventListener("blur", () => {
                tempEle.innerHTML = newInput.value;
                row.style.backgroundColor = "White";
                myList[i] = newInput.value;
            });
        });
        cell2.appendChild(span2);
        row.appendChild(cell2);
        table.appendChild(row);
    }
    console.log(table);
    output.appendChild(table);
}

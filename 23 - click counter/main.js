
let counter = 0;

document.addEventListener("DOMContentLoaded", function(e) {
    const body = document.querySelector("body");

    let output = document.createElement("div");
    console.log(output);
    output.innerHTML = "Click the button";
    output.style.fontSize = "2em";
    output.style.fontFamily = "fantasy";
    output.style.padding = "5px";
    output.setAttribute("class", "message");
    body.appendChild(output);

    let btn = document.createElement("button");
    btn.innerHTML = "Click here";
    btn.style.border = "1px solid #ddd";
    btn.style.padding = "25px";
    btn.style.width = "300px";
    btn.style.fontSize = "2em";
    btn.style.textAlign = "center";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", function() {
        //console.log("clicked");
        counter++;
        let mes = "You clicked this <b>" + counter + "</b> times ";
        document.querySelector(".message").innerHTML = mes;
    });
    body.appendChild(btn);
});
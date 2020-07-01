/*
Copy to clipboard and move data from a text area to another text area.
*/

const copyText = document.querySelector("textarea[name=copyText]");
const finalText = document.querySelector("textarea[name=finalText]");
const moveBtn = document.querySelector(".moveBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

moveBtn.addEventListener("click", movingTxt);
copyBtn.addEventListener("click", copyingTxt);
finalText.addEventListener("click", selAll);
copyText.addEventListener("click", selAll);

function selAll() {
    this.select();
}

function copyingTxt() {
    let txt = copyText.value;
    copytoClipBoard(txt);
}

function copytoClipBoard(words) {
    const textarea = document.createElement("textarea");
    textarea.value = words;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    output.innerHTML = "<h3> Copied content </h3>" + textarea;
    //console.log(textarea);
}

function movingTxt() {
    let text = copyText.value;
    //console.log(text);
    finalText.value = text;
}




const sel = document.querySelector("select");
const inputAll = document.querySelectorAll("input");
const myImg = document.querySelector("img");
const txtArea = document.querySelector("textarea");

sel.addEventListener("change", build);
inputAll.forEach((item) => {
    console.log(item);
    item.addEventListener("change", build);
});

function clean(str) {
    return str.replace("#","");
}

function spacers(str) {
    return str.split(" ").join("+");
}

function build(e) {
    let i = {};
    i.size = sel.value;
    i.txt = spacers(inputAll[0].value);
    i.bgClr = clean(inputAll[1].value);
    i.txtClr = clean(inputAll[2].value);
    i.path = "http://via.placeholder.com/"+i.size+"/"+i.bgClr+"/"+i.txtClr+"?text="+i.txt;
    myImg.src = i.path;
    txtArea.value = i.path;
    txtArea.select();
    txtArea.focus();
    console.log(i);
}
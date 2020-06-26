/*
Just some javascript behind the scenes and the objective here is to input a question into the input field and then get a random response being returned back via javascript and then outputting it on the page.
*/

const answerArray = ["It will work", "Maybe maybe not", "Probably not", "Highly likely", "I don't know"];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener("click", function() {
    //console.log(question.value);
    let response = Math.floor(Math.random() * answerArray.length);
    //console.log(answerArray[response]);
    message.innerText = question.value + " " + answerArray[response];
    question.value = " ";
});
/*
Just some javascript behind the scenes and the objective here is to input a question into the input field and then get a random response being returned back via javascript and then outputting it on the page.
*/

const wording = ["Do you like JavaScript as much as I do?", "Make sure you practice, because the more you do the more you know", "The reasons why coding is a must for everybody"];
const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
let startTime, endTime;

button.addEventListener("click", function() {
    //console.log(this.innerText);
    if(this.innerText == "Start") {
        playText.disabled = false;
        playGame();
    } else if(this.innerText == "Done") {
        playText.disabled = true;
        button.innerText = "Start";
        endGame();
    }
});

function endGame() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    //console.log(totalTime);
    let strText = playText.value;
    let wordCount = wordCounter(strText);
    let speed = Math.round((wordCount / totalTime) * 60);
    //console.log(speed);
    let finalMessage = "You typed at " + speed + " words per minute ";
    finalMessage += "<br>" + compareWords(message.innerText, strText);
    message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    //console.log(response);
    return response;
}

function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    words1.forEach(function(item,index) {
        if(item == words2[index]) {
            count++;
        }
    });
    return (count + " correct out of " + words1.length + "words");
}

function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    //console.log(randomNum);
    let date = new Date();
    startTime = date.getTime();
    //console.log(startTime);
    button.innerText = "Done";
}
/*
The logic: generate either "heads" or "tails" and depending on the result, we check to see if the player guessed it correctly, and if they did not then they got it wrong
If the player gets the same "selection" as the computer, then they get a point, else they get nothing and the computer will get the point.
*/

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let coinArray = ["Heads", "Tails"];
let score = [0, 0];
let output;

for( let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
    //console.log(e.target.innerText);
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random() * 2);
    //console.log(computerToss)
    let computerGuess = coinArray[computerToss];

    if(playerGuess === computerGuess) {
        output = "player wins <br>";
        score[0]++;
    } else {
        output = "computer wins <br>";
        score[1]++;
    }
    message.innerHTML += output + "<br> player " +  score[0] + "<br> computer " + score[1];
}
/*
For those of you that are unfamiliar with how the game works you got to select either rock papers or

scissors and depending on your selection there's always one that can beat that as well as a tie of course.

And then there's one that that beats so the basically if you select rock.

Then if the other person selects paper then they win because paper covers the rock.

If they select scissors then you win because the rock smashes the scissors and if they also select a rock then it's a tie.
*/

const score = document.querySelector(".score");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let winner = [0, 0];

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

    if(computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result);

    if(result == "Player") {
        result += "wins";
        winner[0]++;
    } else if(result == "Computer") {
        result = "wins";
        winner[1]++;
    } else {
        result += "result in a tie match";
    }

    score.innerHTML = "Player ["+ winner[0]+"]<br> Computer ["+winner[1]+"]";
    messager(playerSelection + " vs " + computerSelection + "<br><br>" + result + "<br>");
}

function messager(mes) {
    message.innerHTML = mes;
}

function checkWinner(player, computer) {
    if(player === computer) {
        return "Draw";
    }

    if(player === "Rock") {
        if(computer === "Paper") {
            return "Computer";
        } else {
            return "Player";
        }
    }

    if(player === "Paper") {
        if(computer === "Scissors") {
            return "Computer";
        } else {
            return "Player";
        }
    }
}


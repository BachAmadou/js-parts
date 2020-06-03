/*
The logic: generate either "heads" or "tails" and depending on the result, we check to see if the player guessed it correctly, and if they did not then they got it wrong
If the player gets the same "selection" as the computer, then they get a point, else they get nothing and the computer will get the point.
*/

const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let coinArray = ["Heads", "Tails"];
let score = [0, 0];


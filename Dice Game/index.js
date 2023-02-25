var player1 = null;
var player2 = null;

var result = null;

var dice;

function rollDice(){
var roll1 = Math.floor((Math.random() * 6)+1);
var roll2 = Math.floor((Math.random() * 6)+ 1);

var text1 = "images/dice"+roll1+".png"
var text2 = "images/dice"+roll2+".png"

player1 = text1;
player2 = text2;

const img1 = document.querySelector(".img1");
img1.src = player1;

const img2 = document.querySelector(".img2");
img2.src = player2;

// document.getElementById("img2").src = "player2"
// document.querySelector("div").getElementsByClassName("dice")[0].setAttribute("img1", player1);
// document.querySelector("div").getElementsByClassName("dice")[1].setAttribute("img2", player2);


if(roll1 > roll2){
   return document.querySelector("h1").textContent = "Player 1 Wins";
    
} else if (roll1 < roll2){
    return document.querySelector("h1").textContent = "Player 2 Wins";
    
} else if(roll1 === roll2){
    return document.querySelector("h1").textContent = "Draw";
}



}
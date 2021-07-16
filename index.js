
if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}


function rollDice () {
//Left side image changing
var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + (randomNumber1)+ ".png");

//Right side image changing
var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + (randomNumber2) + ".png");


changeTitle (randomNumber1,randomNumber2);

}


function changeTitle(num1,num2) {
//who wins, changing h1
if (num1 > num2) {
    document.querySelector("h1").innerHTML="Player 1 wins!";
} else if (num1 < num2) {
    document.querySelector("h1").innerHTML="Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML="Draw!";
}
}


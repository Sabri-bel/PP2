
/*retrieve information from the DOM */
let button = document.getElementById("start-button");
let playerScore = document.getElementById("user-score");
let choices = ["heart-eyes.png", "horse.png", "worried_.png"];

/* add event listener */
/** this listener will wait until the DOM is fully loaded */
document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", runGame)
})
/* add rungame function*/

function runGame() {
    let randomImg1 = Math.floor(Math.random() * 3);
    let randomImg2 = Math.floor(Math.random() * 3);
    let randomImg3 = Math.floor(Math.random() * 3);

    document.getElementById("card1").src = choices[randomImg1];
    document.getElementById("card2").src = choices[randomImg2];
    document.getElementById("card3").src = choices[randomImg3];
}

/* add score-calculation function */
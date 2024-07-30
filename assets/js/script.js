
/*retrieve information from the DOM */
let button = document.getElementById("start-button");
let playerScore = document.getElementById("user-score");
let choices = ["heart-eyes", "horse", "worried_"];

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

    document.getElementById("card1").src = `assets/images/${choices[randomImg1]}.png`;
    document.getElementById("card1").alt = choices[randomImg1];
    document.getElementById("card2").src = `assets/images/${choices[randomImg2]}.png`;
    document.getElementById("card2").alt = choices[randomImg2];
    document.getElementById("card3").src = `assets/images/${choices[randomImg3]}.png`;
    document.getElementById("card3").alt = choices[randomImg3];
}

/* add score-calculation function */
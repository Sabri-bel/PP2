
/*retrieve information from the DOM */
let button = document.getElementById("start-button");
let choices = ["heart-eyes", "horse", "worried_"];

/* add event listener */

/** this listener will wait until the DOM is fully loaded and activate another
 * listener for the game button
 */
document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", runGame)
})
/* add rungame function*/

/** this function will create a random number between 1 and 3 and use it 
 * for generate the images. it will modify the alt information as well
 */

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
    scoreCalculator()
}

/* add score-calculation function */

/**this fucntion calculate the final score of the customer  */

function scoreCalculator() {
    let playScore = document.getElementById("user-score").innerText;
    
}
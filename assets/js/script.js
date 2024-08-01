
/*retrieve information from the DOM */
const button = document.getElementById("start-button");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const imageLocation = "assets/images/"
const choices = ["heart-eyes", "horse", "worried_"];

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

    renderCard(card1, randomImg1);
    renderCard(card2, randomImg2);
    renderCard(card3, randomImg3);

    if (randomImg1 === randomImg2 && randomImg2 === randomImg3)  {
        scoreCalculatorAll()
    }
    else if (randomImg1 === randomImg2 || randomImg1 === randomImg3) {
        scoreCalculatorSome()
    }
    else if (randomImg2 === randomImg3) {
        scoreCalculatorSome()
    }

}

function renderCard(card, choiceIndex) {
    card.src = `${imageLocation}${choices[choiceIndex]}.png`;
    card.alt = choices[choiceIndex];
}
/* add score-calculation function */

/**this fucntion calculate the final score of the customer  */

function scoreCalculatorAll() {
    let playScore = parseInt(document.getElementById("user-score").innerText);
   document.getElementById("user-score").innerText = playScore + 10;
}

function scoreCalculatorSome() {
    let playScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = playScore + 5;
}

function showInstruction() {
    const instructionDiv = document.createElement('div')

}
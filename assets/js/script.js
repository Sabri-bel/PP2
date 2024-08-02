
/*retrieve information from the DOM  and create constant*/
const button = document.getElementById("start-button");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const imageLocation = "assets/images/"
const choices = ["heart-eyes", "horse", "worried_"];

/* add event listeners */

/** this listener will wait until the DOM is fully loaded and activate another
 * first listener for activate the game button with click and second for enter key
 */

document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", runGame)
})

/*use the enter key for staring the game instead of click*/
 document.getElementById("start-button").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            runGame();
        }
    })


/* add rungame function*/

/** this function will create a random number between 1 and 3 and use it 
 * for generate the images and score
 */

function runGame() {
    let randomImg1 = Math.floor(Math.random() * 3);
    let randomImg2 = Math.floor(Math.random() * 3);
    let randomImg3 = Math.floor(Math.random() * 3);

    renderCard(card1, randomImg1);
    renderCard(card2, randomImg2);
    renderCard(card3, randomImg3);

    if (randomImg1 === randomImg2 && randomImg2 === randomImg3)  {
        scoreCalculatorAll();
    }
    else if (randomImg1 === randomImg2 || randomImg1 === randomImg3) {
        scoreCalculatorSome();
    }
    else if (randomImg2 === randomImg3) {
        scoreCalculatorSome();
    }
    else {
        scoreReset();
    }


}

/** this function modify the img src and alt structure based on the random images
 * as a result of the previous function
 */

function renderCard(card, choiceIndex) {
    card.src = `${imageLocation}${choices[choiceIndex]}.png`;
    card.alt = choices[choiceIndex];
}

/* add score-calculation function */

/**this fucntion calculate and update the score of the user if the customer is
 * getting all the 3 images 
 */

function scoreCalculatorAll() {
    let playScore = parseInt(document.getElementById("user-score").innerText);

   document.getElementById("user-score").innerText = playScore + 10;
}

/*
  this function will calculate and update the score of the user if the user is getting
  only 2 images out of 3
 */

function scoreCalculatorSome() {
    let playScore = parseInt(document.getElementById("user-score").innerText);

    document.getElementById("user-score").innerText = playScore + 5;
}

/*reset the score when all images are different */
function scoreReset() {
    let playScore = parseInt(document.getElementById("user-score").innerText);

    document.getElementById("user-score").innerText = 0;
}


function showInstruction() {
    const instructionDiv = document.createElement('div')

}



/*retrieve information from the DOM  and create constant*/

const button = document.getElementById("start-button");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

/*const used for assign the image as random image */

const imageLocation = "assets/images/"
const choices = ["heart-eyes", "horse", "worried_"];


let playScore = parseInt(document.getElementById("user-score").innerText);


/* add event listeners */

/* listener n.1 will wait until the DOM is fully loaded. It activate another
   listener n.2 for the actual game button using the mouse click
 */

document.addEventListener("DOMContentLoaded", function() {
    button.addEventListener("click", runGame)
})

/*event listener n3 use the enter key for starting the game instead of click*/

 document.getElementById("start-button").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            runGame();
        }
    })



/* add rungame function*/

/** this function will create a random number between 1 and 3 and use it 
 * for generate the images
 */

function runGame() {
    let randomImg1 = Math.floor(Math.random() * 3);
    let randomImg2 = Math.floor(Math.random() * 3);
    let randomImg3 = Math.floor(Math.random() * 3);

    renderCard(card1, randomImg1);
    renderCard(card2, randomImg2);
    renderCard(card3, randomImg3);

    /* jackpot score */
    if (randomImg1 === randomImg2 && randomImg2 === randomImg3)  {
        scoreCalculatorAll();
       
    }

    /*accumulate point to reach 30*/
    else if (randomImg1 === randomImg2 || randomImg1 === randomImg3) {
        scoreCalculatorSome();
        
    }
    else if (randomImg2 === randomImg3) {
        scoreCalculatorSome();
    
    }

    /* reset point */
    else {
        scoreReset();
    
    }

}

/** this function modify the DOM img src and alt structure based on the 
 * random images
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
    results()
   }


/*
  this function will calculate and update the score of the user if the user is getting
  only 2 images out of 3
 */

function scoreCalculatorSome() {

    document.getElementById("user-score").innerText = playScore += 5;
    if (playScore >= 30) {
        showWins()
       }
}

/* this function reset the score when all images are different */

function scoreReset() {

    document.getElementById("user-score").innerText = 0;
    showTryAgain()
}


/* functions below add some icons in the DOM based on the results */

function showWins() {
const para = document.createElement("p");
para.setAttribute("id","win")
para.innerHTML = `<i class="fa-solid fa-star"></i> Your highest score is ${playScore}`;

// Append to another existing element:
document.getElementById("star").appendChild(para);
   
}


function showTryAgain() {

const para = document.createElement("p");
para.setAttribute("id", "lose")
para.innerHTML = `<i class="fa-solid fa-skull"></i> Oh no! You lose`;

// Append to another existing DOM element:
document.getElementById("star").appendChild(para);

const button = document.createElement("button");
button.setAttribute("id", "restart-game")
button.innerHTML = "try again"
document.getElementById("star").appendChild(button)

}

function results() {
    let result = document.createElement("div");
    result.setAttribute("class", "final-results");
    result.innerHTML = "Congratulation! Jackpot!";
    document.getElementById("star").appendChild(result)
}


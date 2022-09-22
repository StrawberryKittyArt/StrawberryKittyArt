const ROCK ="ROCK";
const PAPER ="PAPER";
const SCISSORS ="SCISSORS";

function getRandomPick(){
        // Math.random() returns a random number between 0.00 and 1.00
    let chance = Math.random();

    if (chance > 0.66) {
       // If chance is between 0.66 and 1.00, we return ROCK
      return ROCK;
    } else if (chance > 0.33) {
        // Otherwise,if chance is between 0.33 and 0.66,we return PAPER
        return PAPER;
    } else {
       // I Otherwise,chance must be between 0.00 and 0.33,so we return SCISSORS
      return SCISSORS;
    }
}

function getResultText (computerPick, playerpick) {
    const TIE = "It's a tie!";
    const WIN = "You win!";
    const LOSE = "You lose!":

    //if the computer and plaver pick the same value, then the result is a TIE
    if (computerPick == playerPick) {
        return TIE;
    }

    if (computerPick == PAPER && playerPick == ROCK) {
       return LOSE;
    }  else if (computerPick == PAPER && playerPick == SCISSORS) {
      return WIN;
    }

    if (computerPick == ROCK && playerPick == SCISSORS) {
        return LOSE;
 } else if (computerPick == ROCK && playerPick == ROCK) {
  return WIN;
 }

 if (computerPick == SCISSORS && playerPick == SCISSORS) {
    return LOSE;
} else if (computerPick == SCISSORS && playerPick == ROCK) {
return WIN;
}
}





function playgame(yourpick) {
    // use getRandomPick() to get computers pick
    let myPick = getRandomPick();

    // Access the document to get references to all the hand variations and text
    let rockleft = document.getElementById ("rockLeft") ;
    let paperLeft = document.gettlementById ("paperLeft");
    let scissorsLeft = document.getElementById("scissorsLeft");
    let rockRight = document-gettlementById("rockRight");
    let paperRight = document.getElementById ("paperRight");
    let scissorsRight = document.gettlementById("scissorsRight");
    let yourPickText = document.getElementbyId ("yourPickText" );
    let myPickText = document.getElementById ("myPickText");

    //Set the text HTML with the player pick
      yourPickText.innerHTML=yourPick;
      //I Set the 'selected' class to the matching player pick on the left side
      switch(yourPick) {
    case ROCK:
      rockleft.classList.add("selected");
      break;
    case PAPER:
      paperLeft.classList.add("selected");
      break;
    case SCISSORS:
      scissorsLeft.classList.add("selected");
      break;
   }

   //I Set the text HTML with the computer pick
   myPickText.innerHTML=myPick;
   // Set the 'selected'class to the matching computer pick on the right side
switch (myPick){
case ROCK:
rockRight.classList.add("selected");
  break;
case PAPER:
  paperRight.classList.add("selected");
break;
case SCISSORS:
  scissorsRight.classList.add("selected");
break;
}

// Access the document to get a reference to the result text element
let result = document.getElementbyId("result");
// Apply the game rules to the selected picks, and render the result text
result. innerHTML = getResultText (myPick, yourPick);
}
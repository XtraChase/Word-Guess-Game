var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = [];
var numGuesses = 0;

//HTML text fields
var guessesText = document.getElementById("guessesText");
var winsText = document.getElementById("winsText");
var guessesLeftText = document.getElementById("guessesLeftText");

//assigns a random secret letter
function randomCharacter() {
  var chars = "abcdefghijklmnopqrxtuvwxyz";
  return chars.substr(Math.floor(Math.random() * 26), 1);
}

//start a game round
function startNewRound() {
  guessesText.textContent = "";
  guessesLeft.textContent = "";
  numGuesses = 0;
  guesses = [];
  secretLetter = randomCharacter();
}

// Function to print guesses letter when onkeyup event fires.
document.onkeyup = function(event) {
  var letterGuessed = event.key;

  //gameplay
  if (letterGuessed == secretLetter) {
    //win
    wins++;
    winsText.textContent = wins;
    console.log("Wins");
    startNewRound();
  } else if (numGuesses < 7) {
    //guessing
    console.log(letterGuessed);
    guesses.push(letterGuessed); // append letter to end of array
    guessesText.textContent = guesses;
    numGuesses++;
    guessesLeft = 7 - numGuesses;
    guessesLeftText.textContent = guessesLeft;
  } else {
    // lost
    losses++;
    startNewRound();
    console.log("Loss");
  }
};

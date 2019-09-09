var wins = 0;
var losses = 0;
var numBlanks;
var guesses = [];
var answerWord = [];
var secretWord = [];

var guessesText = document.getElementById("guessesText");
var currentWord = document.getElementById("wordText");
var winsText = document.getElementById("winsText");
var guessesLeftText = document.getElementById("guessesLeftText");

//assigns a random secret letter
function randomWord() {
  var words = [
    "ahoy",
    "plank",
    "booty",
    "seadog",
    "captain",
    "buccaneer",
    "privateer",
    "arrrr",
    "marooned",
    "parley",
    "cutlass",
    "doubloon",
    "grog",
    "keelhaul",
    "scurvy",
    "barnacles",
    "ship",
    "lad",
    "matey",
    "anchor",
    "pillage",
    "scuttle"
  ];
  //picks a random word
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

function underscoreString(num) {
  // create string of underscores of length num
  var charArray = [];
  for (var i = 0; i < num; i++) {
    charArray[i] = "_";
  }
  return charArray.join(); //join converts array to string, elements separated by a space
}

//start a game round
function startNewRound() {
  //get new random word
  secretWord = randomWord();

  //reinitialize globals
  guesses = [];
  answerWord = underscoreString(secretWord.length);
  numBlanks = secretWord.length;

  //update text fields
  guessesText.textContent = "";
  currentWord.textContent = answerWord;
  winsText.textContent = "";
  guessesLeftText.textContent = "";
}

// Print guesses letter when onkeyup event fires.
document.onkeyup = function(event) {
  var letterGuessed = event.key;

  //gameplay
  if (answerWord == secretWord) {
    //win
    wins++;
    winsText.textContent = wins;
    //congratulate the player
    console.log("Good job! The answer was " + randomWord());
    startNewRound();
  } else if (guesses.length < numBlanks) {
    numBlanks = 0;
    console.log(letterGuessed);
    //Test if letterGuessed is in secretWord.
    for (var i = 0; i < secretWord.length; i++) {
      if (secretWord[i] == letterGuessed) {
        answerWord[i] = letterGuessed;
      } else if (answerWord[i] == "_") {
        numBlanks++;
      }
    }
    guesses.push(letterGuessed); // append letter to end of array
    guessesText.textContent = guesses;
    guessesLeftText.textContent = numBlanks - guesses.length;
  } else {
    // lost
    losses++;
    startNewRound();
    console.log("Loss");
  }
  currentWord.textContent = answerWord;
};

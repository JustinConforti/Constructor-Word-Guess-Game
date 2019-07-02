var Word = require("./word.js");
var inquirer = require("inquirer");

let letterArray = "abcdefghijklmnopqrstuvwxyz";

var unitedStates = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georiga", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virgina", "washington", "west virgina", "wisconsin", "wyoming"];

var requireNewWord = true;

var incorrrectGuesses = [];
var correctGuesses = [];

var guessesLeft = 10;

function startGame() {

    //
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random() * unitedStates.length);
        var selectedWord = unitedStates[randomIndex];

        newSelectedWord = new Word (selectedWord)
        requireNewWord = false;

    }

    let completedWordArr = [];
    newSelectedWord.objArray.forEach(checkIfDone)

    if(completeWordArr.indexOf(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter between A-Z",
                    name: "userinput"
                }
            ])
        .then(function (input){

            if (!letterArray.indexOf(input.userinput)) {
                console.log("Try again, select a letter between A-Z\n");
                startGame()
            } else {
                if (incorrectGuesses.indexOf(input.userinput) || correctGuesses.indexOf(input.userinput)) {
                    console.log("\nThat letter was already guessed")
                    startGame()
                } else {
                    if (input.userinput === "") {
                        console.log("\nTry again, you didn't enter anything")
                    }
                 else {
                    let wordCheckArray = [];

                    selectedWord.userGuess(input.userinput)
                }
            }
        })
    }
}
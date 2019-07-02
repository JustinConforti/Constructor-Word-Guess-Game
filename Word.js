var Letters = require("./Letter.js");

function Word(answer) {
        
        // object array that stores each character letter or underscore if not guessed yet
    this.objArray = [];

        // loop that will take each index of the answer parameter run it through the Letters constructor functions and push to objArray array.
    for (let i = 0; i < answer.length; i++) {
        let currLetter = new Letters(answer[i]);
        this.objArray.push(currLetter)
    }

    this.consoleSpacing = function () {
        spacing = "";
        for (let i = 0; i < this.objArray.length; i++) {
            spacing += this.objArray[i] + " ";
        }
        console.log(spacing + "\n")
    }

    this.userGuess = function (input) {
        for (let i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input)
        }
    }
}

module.exports = Word
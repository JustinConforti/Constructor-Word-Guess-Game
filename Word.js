var Letters = require("./letter.js");

function Word(answer) {
        
        // object array that stores each character letter or underscore if not guessed yet
    this.objArray = [];

        // loop that will take each index of the answer parameter run it through the Letters constructor functions and push to objArray array.
    for (let i = 0; i < answer.length; i++) {
        let letter = new Letters(answer[i]);
        this.objArray.push(letter)
    }

    
}
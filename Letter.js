function letters(currentLetter) {

    this.currentCharacter = currentLetter
    this.guessed = false;

    this.beenGuessed = function() {

            if (this.currentLetter === " ") {
                this.guessed = true
                return " ";
            } else {
                if(!this.guessed) {
                return "_"
            } else {
                return this.letter
            }
    }
}

    this.characterCheck = function(guess) {

        if (guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.export = letters
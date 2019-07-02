// * A string value to store the underlying character
// for the letter

//     *
//     A boolean value that stores whether that letter has been guessed yet

//     *
//     
//  A function that returns the underlying character
// if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed

//     *
//   
//  A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true
// if it was guessed correctly

var currentLetter = "d"
letters(currentLetter)

function letters(currentLetter) {

    this.currentCharacter = currentLetter
    this.guessed = false;

    this.beenGuessed = function() {

            if(this.guessed) {
                return "_"
            } else {
                return currentCharacter
            }
    }

    this.characterCheck = function() {

        if
    }
}
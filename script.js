// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
}

function generatePassword() {

    let counter = 0;
    let generatedPasswordHolder = [];

    let userInput = prompt("How many characters for your password (8-128)");
    let upperCase = confirm("Do you want UpperCase letters?");
    let passNumbers = confirm("Do you want Numbers?");
    let specialChar = confirm("Special Characters?");

    do {

        // random lower case
        let randLettLower = Math.floor(Math.random() * 25) + 0;
        let lowerAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        generatedPasswordHolder.push(lowerAlph[randLettLower]);

        if (upperCase == true) {
            //random upper case
            let randLettUpper = Math.floor(Math.random() * 25) + 0;
            let capsAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            generatedPasswordHolder.push(capsAlph[randLettUpper]);
        }

        if (passNumbers == true) {
            //random number
            let randNum = Math.floor(Math.random() * 9) + 0;
            let numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            generatedPasswordHolder.push(numbs[randNum]);
        }

        if (specialChar == true) {
            //random special character
            let randChar = Math.floor(Math.random() * 25) + 0;
            let specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];
            generatedPasswordHolder.push(specialChar[randChar]);
        }

        counter++;
    } while (counter <= userInput);

    let arrayToSring = generatedPasswordHolder.toString();

    return arrayToSring;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
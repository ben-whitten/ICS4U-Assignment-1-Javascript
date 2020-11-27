/*
* The StringBlowUp program implements an application that
* takes a string the user inputs and replaces numbers with a number of the next
* digit equal to themself.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-11-25 
*/

// Readline.
// Imports prompt
// NOTE: you must have installed prompt-sync
// (npm install prompt-sync) -> ensure you do it at the root like eslint
const prompt = require('prompt-sync')({sigint: true});

// Stating important variables for later.
var finalString = "";
var timeThrough = 1;
var position = 0;
var chosenString = "";

// Gets chosenString from user.
var chosenString = prompt('Insert a string: ', (chosenString));

for (position = 0; position < chosenString.length; position) {
    var characterDigit = parseInt(chosenString[position]) + "<br>";
    if (characterDigit >= '0' && characterDigit <= '9') {
        while (true) {
            if (typeof chosenString[position + 1] === undefined) {
                finalString = finalString + chosenString[position];
                break;
            } else {
                finalString = finalString + chosenString[position + 1];
                timeThrough = timeThrough + 1;
                if (timeThrough > chosenString[position]) {
                    timeThrough = 1;
                    position = position + 1;
                    break;
                }
            }
        }
    } else {
        finalString = finalString + chosenString[position];
        position = position + 1;
    }
}
console.log(`The blown up string is: `);
console.log(finalString);

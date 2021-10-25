console.log("Hello world!");

let userAnswer;
function computerPlay () {
    let computerChoise = getRandomNumber(1, 3);
    if (computerChoise == 1) {
        console.log("Rock");
    } else if (computerChoise == 2) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }
    
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(computerPlay());
const INVITATION = 'Let\'s play with you in the game!';
const MAKE_CHOISE = "Make your choise, rock paper or scissors?";
// function return random computer's answer
console.log(INVITATION);
console.log(MAKE_CHOISE);
let userAnswer;
let computerAnswer = '';
function computerPlay () {
    let computerChoise = getRandomNumber(1, 3);
    if (computerChoise == 1) {
        computerAnswer += "Rock";
    } else if (computerChoise == 2) {
        computerAnswer += "Paper";
    } else {
        computerAnswer += "Scissors";
    }
    console.log(computerAnswer);
    return computerAnswer;
    
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

computerPlay();



function playerSelection () {
    userAnswer = prompt ('Input your answer', '');
    console.log(userAnswer);
    return userAnswer;
    
}
playerSelection();

function game() {
    if (userAnswer == 'Rock' && computerAnswer == 'Rock') {
        console.log ("Gz you win!");
    } else if (userAnswer == 'Rock' && computerAnswer == 'Paper') {
        console.log('You lose!');
    }
    
}
game();
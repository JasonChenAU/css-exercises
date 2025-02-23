/*
Get Players input
Randomly generate a computers response
calculate who won
print who won
print the results
*/

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice;
    let rndNum = Math.floor(Math.random() * 3);
    if(rndNum === 0) {
        choice = 'scissors';
    }else if(rndNum === 1) {
        choice = 'rock';
    }else {
        choice = 'paper';
    }
    return choice;
}

function getHumanChoice(){
    let choice = prompt('Rock, Paper or Scissors?');
    choice = choice.toLowerCase();
    if (choice !== 'rock' || choice !== 'paper' || choice !== 'scissors') {
        getComputerChoice();
    }
    return choice;
}


function playRound() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        playRound();
    }

    if ((humanSelection === 'scissors' && computerSelection === 'rock')|| 
        (humanSelection === 'rock' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'scissors')) {
        computerScore++;
        return console.log(`You lose, ${computerSelection} beats ${humanSelection}`);
    } else {
        humanScore++;
        return console.log(`You win, ${humanSelection} beats ${computerSelection}`);
    }
}

function playGame(games) {
    for(let i = 0; i < games; i++){
        playRound();
        console.log(`Scores:, Human: ${humanScore} - Computer: ${computerScore}`)
    }
}

playGame(3);


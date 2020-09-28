const rockChoice = document.getElementById('rock')
const paperChoice = document.getElementById('paper');
const scissorChoice = document.getElementById("scissor");
const userScoreCard = document.getElementById('user-score');
const compScoreCard = document.getElementById('comp-score');
const result = document.getElementById('result');

let userScore = 0;
let compScore = 0;
const computerChoiceArray = ['rock','paper','scissor'];

function main() {
    rockChoice.addEventListener('click', () => {
        game('rock')
    });
    paperChoice.addEventListener('click', () => {
        game('paper');
    });
    scissorChoice.addEventListener('click', () => {
        game('scissor');
    });
}

main();

function game(userChoice) {
    let userWin = false;
    let compWin = false;
    let draw = false;
    let computerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];
    switch(userChoice) {
        case('paper') : 
            if(computerChoice === 'scissor') 
                compWin = true;
            else if(computerChoice === 'paper')
                draw = true;
            else 
                userWin = true;
            break;
        case('scissor') : 
            if(computerChoice === 'rock') 
                compWin = true;
            else if(computerChoice === 'scissor')
                draw = true;
            else 
                userWin = true;
            break;
        case('rock') : 
            if(computerChoice === 'paper') 
                compWin = true;
            else if(computerChoice === 'rock')
                draw = true;
            else 
                userWin = true;
            break;
        default : 
            userWin = false;
            compWin = false;
            draw = false;
    }   
    if(userWin) {
        userScore++;
        userScoreCard.innerHTML = userScore; 
        result.innerHTML = `
            User Choice:${userChoice}
            <br>
            Computer Choice:${computerChoice}
            <br>
            Result:User Win
        `  
    }
    else if(compWin) {
        compScore++;
        compScoreCard.innerHTML = compScore;
        result.innerHTML = `
            User Choice:${userChoice}
            <br>
            Computer Choice:${computerChoice}
            <br>
            Result:Computer Win
        `
    }
    else {
        result.innerHTML = `
            User Choice:${userChoice}
            <br>
            Computer Choice:${computerChoice}
            <br>
            Result:Draw
        `
    }
}
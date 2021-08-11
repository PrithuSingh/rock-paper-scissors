console.log("Hello World!");

let scorePlayer=0, scoreComputer=0;
let cntRound=0;

const buttons = document.querySelectorAll("button");
console.log(buttons);
const scoreboard = document.querySelector(".scoreboard");
console.log(scoreboard);
const computer = document.querySelector("#computer");
const player = document.querySelector("#player");
const display = document.querySelector(".display");

function computerPlay()
{
    let choices = ['rock', 'paper', 'scissors'];
    let computer = choices[Math.floor(Math.random()*3)];
    return computer;
}

function play(player, computer)
{
    // 0=Tie, 1=Player, 2=Computer
    if(player === computer) {
        return 0;
    }
    else if(player === 'rock' && computer === 'scissors') {
        return 1;
    }
    else if(player === 'paper' && computer === 'rock') {
        return 1;
    }
    else if(player === 'scissors' && computer === 'paper') {
        return 1;
    }
    else {
        return 2;
    }
}

function game(id) 
{
    let choices = ['rock', 'paper', 'scissors'];  
    let playerChoice = choices[parseInt(id)];
    let computerChoice = computerPlay();
    let result = play(playerChoice, computerChoice);
    console.log(result);
    if(result === 1) {
        scorePlayer++;
        player.textContent = scorePlayer;
    }
    else if(result == 2) {
        scoreComputer++;
        computer.textContent = scoreComputer;
    }
    display.textContent = `Computer chose ${computerChoice} and you chose ${playerChoice}.`;
    cntRound++;
    if(cntRound === 5) {
        const result = document.createElement('div');
        if(scorePlayer === 5) {
            result.textContent = "Congrats! You won the game";
        }
        else if(scoreComputer === 5) {
            result.textContent = "Computer overpowered you, better luck next time!";
        }
        else {
            result.textContent = "It's a draw!";
        }
        scoreboard.appendChild(result);
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});
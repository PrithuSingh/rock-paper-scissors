console.log("Hello World!");

function computerPlay()
{
    let choices = ['rock', 'paper', 'scissors'];
    let computer = choices[Math.floor(Math.random()*3)];
    return computer;
}

function checkValue(value, arr)
{
    for(let i=0; i< arr.length; i++)
    {
        if(arr[i] === value)
            return true;
    }
    return false;
}

function play(player, computer)
{
    
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

function game() 
{
    let scorePlayer=0, scoreComputer=0;
    let cntRound=0;
    let choices = ['rock', 'paper', 'scissors'];   
    while(cntRound < 5)
    {
        let computer = computerPlay();
        let player;
        try {
            player = prompt("Enter your choice:").toLowerCase();
            let check = checkValue(player, choices);
            if(!check) throw "error";
        } catch (error) {
            alert("Please enter a valid response");
            continue;
        }
        let result = play(player, computer);
        console.log(result);
        if(result === 1) scorePlayer++;
        else if(result == 2) scoreComputer++;
        cntRound++;
    }
    if(scorePlayer === 5) {
        alert("Congrats, you won the game!");
    }
    else if(scoreComputer === 5) {
        alert("Computer overpowered you, better luck next time!");
    }
    else {
        alert("It's a draw!");
    }
}

game();
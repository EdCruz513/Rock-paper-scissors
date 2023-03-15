console.log("Hello!");

const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")){
                return "Player";
            }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = winner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie";
    }
    else if(result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerInput(){
    let input = false;
    while(input == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            input = true;
            return choiceInLower;
        }
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    console.log("Welcome to the game");
    for(let i =0; i < 5; i++){
        const playerSelection = getPlayerInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(winner(playerSelection, computerSelection) == "Player"){
            userScore ++;
        }
        else if(winner(playerSelection, computerSelection) == "Computer"){
            computerScore ++;
        }
    }
    console.log("Game Over");
    if(userScore > computerScore){
        console.log("Congrats! You Win");
    }
    else if(userScore < computerScore){
        console.log("You lose! Better luck next time");
    }
    else{
        console.log("It's a tie!");
    }


}

game();
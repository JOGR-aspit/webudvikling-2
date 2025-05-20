function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // generates a random number, 0, 1 or 2.
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice: 'rock', 'paper' or 'scissors'): ");
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("Invalid choice. Please try again.");
        getPlayerChoice();
    } else {
        return playerChoice;
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

console.log(getComputerChoice());
console.log(getPlayerChoice());

console.log(playRound(getPlayerChoice(), getComputerChoice()));
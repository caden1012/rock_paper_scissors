function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const outcomes = {
    'rock': { 'rock': 0, 'paper': 2, 'scissors': 1 },
    'paper': { 'rock': 1, 'paper': 0, 'scissors': 2 },
    'scissors': { 'rock': 2, 'paper': 1, 'scissors': 0 }
};

function getWinner(playerChoice, computerChoice) {
    return outcomes[playerChoice][computerChoice];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    let resultMessage = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

    if (winner === 1) {
        resultMessage += "You win!";
    } else if (winner === 2) {
        resultMessage += "Computer wins!";
    } else {
        resultMessage += "It's a draw!";
    }

    document.getElementById('result').textContent = resultMessage;
}
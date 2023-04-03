const choices = ["Rock", "Paper", "Scissors"];

let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let userChoice_div = document.getElementById("user-choice");
let computerChoice_div = document.getElementById("computer-choice");

let userScore = 0;
let computerScore = 0;
let userChoice = "";
let computerChoice = "";
let resultText = document.querySelector(".result-text");

main();

function main() {
    const rock_div = document.getElementById("rock");
    const paper_div = document.getElementById("paper");
    const scissors_div = document.getElementById("scissor");

    rock_div.addEventListener("click", () => game("Rock"));
    paper_div.addEventListener("click", () => game("Paper"));
    scissors_div.addEventListener("click", () => game("Scissors"));
}

function game(userChoice) {
    computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    resultText.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    resultText.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
    // userChoice_div.classList.add("red-glow");
    // setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, computerChoice) {
    resultText.innerHTML = "It's a draw!";
    // userChoice_div.classList.add("gray-glow");
    // setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000);
}


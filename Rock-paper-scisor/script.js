const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let computer;
let user;
let result;
possibleChoices.forEach((x) => {
  x.addEventListener("click", function (e) {
    user = e.target.id;
    userChoiceDisplay.innerHTML = user;
    computerChoice();
    resulty();
  });
});

function computerChoice() {
  const randome = Math.floor(Math.random() * 3);
  if (randome === 1) {
    computer = "rock";
  }
  if (randome === 2) {
    computer = "scissors";
  }
  if (randome === 3) {
    computer = "paper";
  }
  computerChoiceDisplay.innerHTML = computer;
}

function resulty() {
  console.log(computer, user);
  if (computer === user) {
    result = "its a draw!";
  }
  if (computer === "rock" && user === "paper") {
    result = "you win!";
  }
  if (computer === "rock" && user === "scissors") {
    result = "you lost!";
  }
  if (computer === "paper" && user === "scissors") {
    result = "you win!";
  }
  if (computer === "paper" && user === "rock") {
    result = "you lose!";
  }
  if (computer === "scissors" && user === "rock") {
    result = "you win!";
  }
  if (computer === "scissors" && user === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}

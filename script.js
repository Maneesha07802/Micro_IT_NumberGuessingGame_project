let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");
  attempts++;

  if (guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else if (guess > secretNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "";
}

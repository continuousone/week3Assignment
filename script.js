// Declare variables
let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get DOM elements
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submit');
const hintElement = document.getElementById('hint');
const attemptsElement = document.getElementById('attempts');

// Add event listener to the submit button
submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < randomNumber) {
        hintElement.textContent = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        hintElement.textContent = 'Too high! Try again.';
    } else {
        hintElement.textContent = `Congratulations! You've guessed the number in ${attempts} tries`;
        submitButton.disabled = true; // Disable the button after a correct guess
    }

    attemptsElement.textContent = attempts;
    guessInput.value = ''; // Clear the input field
});
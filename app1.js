console.log("hello American People");

let favColor = prompt("Whats your favorite Color?: ");

if (favColor == "red white blue") {
  document.write("Welcome Brother ");
} else {
  document.body.style.background = favColor;
}

for (let i = 1; i <= numberOfAttempts; i++) {
  userAnswer = prompt("Guess a number between 1 and 100");

  while (userAnswer < 1 || userAnswer > 100) {
    userAnswer = prompt("Guess a number between 1 and 100");
  }
  if (userAnswer == correctAnswer) {
    alert(
      "You got it right. You have " + (numberOfAttempts - i) + " attempts left"
    );
    break;
  } else if (userAnswer < correctAnswer) {
    alert(
      "Your answer is to low.  Try Again! You have " +
        (numberOfAttempts - i) +
        " attempts left"
    );
  } else if (userAnswer > correctAnswer) {
    alert(
      "Your answer is to high.  Try Again! You have " +
        (numberOfAttempts - i) +
        " attempts left"
    );
  }
}

console.log("hello American People");

let favColor = prompt("Whats your favorite Color?: ");

if (favColor == "red white blue") {
  document.write("Welcome Brother ");
} else {
  document.body.style.background = favColor;
}

let loki = confirm(
  "Is this page getting you down? If so click 'OK' to be taken away from this page. Click 'Cancel' to stay and continue reading."
);

if (loki) {
  window.location.href = "https://youtu.be/dQw4w9WgXcQ";
} else {
  alert("Good, people are dying be an adult");
}

function changeToRed() {
  document.body.style.background = "red";
}

function changeToBlue() {
  document.body.style.background = "blue";
}

function changeToWhite() {
  document.body.style.background = "white";
}

function snowFlakeTest() {
  window.setInterval(changeToRed, 1000);
  window.setInterval(changeToWhite, 1500);
  window.setInterval(changeToBlue, 2000);
}

function userPrompt() {
  return prompt("How dangerous is Afghanistan today? Rate it in 1- 5 aks.");
}
function isNumberValid(value) {
  return Number.isInteger(Number(value)) && value >= 1 && value <= 5;
}

function akCounter() {
  let aks = userPrompt();
  console.log(aks);
  console.log(isNumberValid(aks));
  while (!isNumberValid(aks)) {
    aks = userPrompt();
  }
  for (let i = 0; i < aks; i++) {
    document.write(
      '<img src="https://media.istockphoto.com/photos/ak-47-picture-id177391994?s=612x612">'
    );
  }
}

akCounter();

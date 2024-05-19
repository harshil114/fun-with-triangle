const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

function sumOfSides(input) {
  const a = Number(input[0].value);
  const b = Number(input[1].value);
  const sum = a * a + b * b;
  const squreRoot = Math.sqrt(sum);
  return squreRoot.toFixed(2);
}
function showMessage(msg, color = "black") {
  output.innerText = msg;
  output.style.color = color;
}

function calculateHypotenuse() {
  const a = input[0].value;
  const b = input[1].value;

  if (a === 0 && b === 0) {
    showMessage("All fields are reqired", "red");
  } else if (a < 0 || b < 0) {
    showMessage("Negtive values are not allowed", "red");
  } else if (a > 0 && b > 0) {
    const hypotenuse = sumOfSides(input);
    showMessage("Hypotenuse is : "+ hypotenuse);
  } else {
    showMessage("All the fields must be greater than 0", "red");
  }
}

button.addEventListener("click", calculateHypotenuse);

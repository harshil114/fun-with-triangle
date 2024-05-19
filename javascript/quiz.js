const input = document.querySelector(".quiz-form");
const button = document.querySelector(".button");
const output = document.querySelector(".output");
const answer = ["equilateral", "180", "obtuse triangle"];

function quizForm() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(input);
  for (value of formResult.values()) {
    if (value === answer[index]) {
      score++;
    }
    index++;
  }
  output.innerText = "Score : " + score;
}

button.addEventListener("click", quizForm);

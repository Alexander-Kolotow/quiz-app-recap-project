// Das Toggeln des bookmark Icons funktioniert so nicht, bisher nur Erfolg mit forEach-Schleife!
const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", function () {
  bookmarkIcon.classList.toggle("greenyellow");
});

const answerButton = document.querySelector(".answer-button");
const answer = document.querySelector("p.hidden");

answerButton.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});

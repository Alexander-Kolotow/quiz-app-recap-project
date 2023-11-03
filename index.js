// funktioniert so nicht, bisher nur Erfolg mit forEach-Schleife!
const bookmarkIcon = document.querySelector('[data-js="bookmark"]');

bookmarkIcon.addEventListener("click", function () {
  bookmarkIcon.classList.toggle("greenyellow");
});

const answerButton = document.querySelector(".answer-button");
const answer = document.querySelector("p.hidden");

answerButton.addEventListener("click", function () {
  // Toggle the "hidden" class to display/hide the answer
  answer.classList.toggle("hidden");

  // Toggle the button text based on the answer's visibility
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});

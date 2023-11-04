// Das Toggeln des bookmark Icons funktioniert so nicht, bisher nur Erfolg mit forEach-Schleife!
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("highlight")) {
    bookmark.classList.remove("highlight");
  } else {
    bookmark.classList.add("highlight");
  }
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

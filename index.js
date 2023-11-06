// Toggeln des ersten bookmarks.
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("highlight")) {
    bookmark.classList.remove("highlight");
  } else {
    bookmark.classList.add("highlight");
  }
});
// toggeln des Show/Hide Buttons. Antwort wird sichtbar und textContent ändert sich beim Klicken.
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

// Toggeln / Dark Mode.

const toggleButton = document.querySelector('[data-js="toggle"]');
const bodyElement = document.querySelector("body");

toggleButton.addEventListener("click", function () {
  if (body.classList.contains("darkgrey")) {
    body.classList.remove("darkgrey");
    toggleButton.textContent = "Dark mode off";
  } else {
    body.classList.add("darkgrey");
    toggleButton.textContent = "Dark mode on";
  }
});

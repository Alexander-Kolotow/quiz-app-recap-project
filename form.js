console.clear();

const question = "In which year did the First World War end?";
const answer = "1918";
const tag = "#worldwar";

const form = document.querySelector("form");
const submitButton = document.querySelector('[data-js="submit-button"]');

// Add an event listener to the form's submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const tagInput = document.getElementById("tag");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  const newQuestion = document.createElement("article");
  newQuestion.classList.add("question-box");

  newQuestion.innerHTML = `
    <span class="bookmarks">
      <i class="fa-solid fa-bookmark" data-js="bookmark"></i>
    </span>
    <h2>${question}</h2>
    <p>${tag}</p>
    <button class="answer-button">Show answer</button>
    <p class="hidden"><b>Answer:</b>${answer}</p>
  `;

  form.append(newQuestion);

  // Clear the input fields after submit click event!
  questionInput.value = "";
  answerInput.value = "";
  tagInput.value = "";
});

// Display Characters!
// Aktuell funktioniert nur das erste textarea Feld. Ich finde keine Lösung, ohne forEach-Schleife, auch der querySelectorAll funktioniert nicht.

const textareas = document.querySelector('[data-js="characters-left"]');
const remainingCharacters = document.querySelector(
  '[data-js="remainingCharacters"]'
);
const maxLength = textareas.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  remainingCharacters.innerText = value;
};

updateAmountLeft(maxLength);

textareas.addEventListener("input", () => {
  updateAmountLeft(maxLength - textareas.value.length);
});

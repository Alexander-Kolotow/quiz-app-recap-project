const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');

toggleMode.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("highlight");
});

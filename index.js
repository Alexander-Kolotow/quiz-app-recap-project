/*const bookmark = document.querySelector('[data-js="bookmark-icon"]');*/

const toggleMode = document.querySelector('[data-js="toggle-bookmark"]');

toggleMode.addEventListener("click", () => {
  toggleMode.classList.toggle("highlight");
});

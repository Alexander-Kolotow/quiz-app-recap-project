const bookmarkIcons = document.querySelectorAll('[data-js="bookmark"]');

// Füge einen Klick-Ereignislistener zu jedem <i>-Element hinzu
bookmarkIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Toggle die Klasse ".highlight" auf dem <i>-Element
    icon.classList.toggle("highlight");
  });
});

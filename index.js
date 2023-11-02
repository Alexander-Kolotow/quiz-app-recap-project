// Es werden alle Elemente gefunden, die die Klasse "data-js="bookmark" enthalten.
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark"]');

// Fügt ein Klick Event zu jedem <i>-Element hinzu.
bookmarkIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Toggle die Klasse ".highlight" auf den icon Elementen.
    icon.classList.toggle("highlight");
  });
});

// Holen Sie sich die beiden Icon-Elemente
const toggleOff = document.getElementById("toggle-off");
const toggleOn = document.getElementById("toggle-on");

// Fügen Sie einen Klick-Ereignishandler zu jedem Icon hinzu
toggleOff.addEventListener("click", () => {
  toggleOff.style.display = "none";
  toggleOn.style.display = "inline-block";
});

toggleOn.addEventListener("click", () => {
  toggleOn.style.display = "none";
  toggleOff.style.display = "inline-block";
});

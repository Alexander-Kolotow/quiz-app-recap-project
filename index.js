// Es werden alle Elemente gefunden, die die Klasse "data-js="bookmark" enthalten.
const bookmarkIcons = document.querySelectorAll('[data-js="bookmark"]');

// Fügt ein Klick Event zu jedem <i>-Element (in der Funktion muss es ausgeschrieben werden <i> = icon) hinzu.
bookmarkIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    // Toggle die Klasse ".highlight" auf den icon Elementen.
    icon.classList.toggle("highlight");
  });
});

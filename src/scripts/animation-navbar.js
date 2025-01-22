const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");

// Funzione per aprire il menu
menuToggle.addEventListener("click", () => {
  menu.classList.remove("opacity-0", "-translate-y-full", "pointer-events-none");
  menu.classList.add("opacity-100", "translate-y-0");
  menuToggle.classList.add("hidden")
});

// Funzione per chiudere il menu
menuClose.addEventListener("click", () => {
  menu.classList.remove("opacity-100", "translate-y-0");
  menu.classList.add("opacity-0", "-translate-y-full", "pointer-events-none");
  menuToggle.classList.remove("hidden")

});


const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  menu.classList.remove("opacity-0", "-translate-y-full", "pointer-events-none");
  menu.classList.add("opacity-100", "translate-y-0");
  menuToggle.classList.add("hidden")
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("opacity-100", "translate-y-0");
  menu.classList.add("opacity-0", "-translate-y-full", "pointer-events-none");
  menuToggle.classList.remove("hidden")

});

document.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    logo.style.opacity = "0";
    logo.style.transform = "translateY(-20px)";
    logo.style.transition = "opacity 0.3s, transform 0.3s";
  } else {
    logo.style.opacity = "1";
    logo.style.transform = "translateY(0)";
  }
});
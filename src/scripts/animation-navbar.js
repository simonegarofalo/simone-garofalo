let button = document.getElementById('button')
let logo = document.getElementById('logo')
let navbar = document.getElementById('navbar')

const mediaQuery = window.matchMedia('(min-width: 768px)');

function checkDeviceType(e) {
  if (e.matches) {
    button.classList.remove("hidden");
    logo.classList.remove("hidden");
    navbar.classList.add("justify-between");
  } 
  else {
    button.classList.add("hidden");
    logo.classList.add("hidden");
    navbar.classList.remove("justify-between");
    navbar.classList.add("justify-center");
}
}

mediaQuery.addEventListener('change', checkDeviceType);

checkDeviceType(mediaQuery);
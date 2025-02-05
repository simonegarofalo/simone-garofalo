let buttonHero = document.getElementById('button-hero')
const mediaQuery = window.matchMedia('(min-width: 768px)');

function checkDeviceType(e) {
  if (e.matches) {
    buttonHero.classList.add("hidden");
  } 
  else {
    buttonHero.classList.remove("hidden");

}
}

mediaQuery.addEventListener('change', checkDeviceType);

checkDeviceType(mediaQuery);
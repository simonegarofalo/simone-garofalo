window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("banner").classList.remove("hidden");
    }, 3000);
  
    const closeBanner = document.getElementById("close-banner");
  
    if (closeBanner) {
      closeBanner.addEventListener("click", () => {
        document.getElementById("banner").classList.add("hidden");
      });
    }
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function () {
      let banner = document.createElement("div");
      banner.textContent = "Grazie per la tua richiesta! Riceverai a breve una mail di conferma.";
      banner.classList.add(
        "fixed",
        "top-[50%]",
        "left-1/2",
        "-translate-x-1/2",
        "bg-green-600",
        "text-white",
        "py-2",
        "px-6",
        "rounded-lg",
        "shadow-lg",
        "z-50",
        "text-center",
        "min-w-[300px]"
      );
      document.body.appendChild(banner);
  
      setTimeout(() => {
        banner.remove();
      }, 4000);
    });
  });
  
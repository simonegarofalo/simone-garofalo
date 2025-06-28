document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // blocca submit tradizionale
  
      // Qui puoi aggiungere eventuali validazioni extra o usare il tuo validation-form.js
  
      // Mostra banner di conferma
      let banner = document.createElement("div");
      banner.textContent = "Grazie per la tua richiesta! Riceverai a breve una mail di conferma.";
      banner.classList.add(
        "w-[94%]",
        "flex",
        "items-center",
      "fixed",
      "top-[50%]",
      "left-1/2",
      "-translate-x-1/2",
      "bg-[#228B22]",
      "text-white",
      "py-2",
      "px-6",
      "rounded-lg",
      "shadow-lg",
      "z-50",
      "text-center"
      );
      document.body.appendChild(banner);
  
      // Rimuovi banner dopo 4 secondi
      setTimeout(() => {
        banner.remove();
      }, 4000);
  
      // Invio dati via Netlify
      form.submit();
    });
  });
  
document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.querySelector("input[name='email']").value;
  
    try {
        const res = await fetch("/.netlify/functions/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await res.json();
  
        if (data.success) {
          // Mostra banner
          const banner = document.createElement("div");
          banner.textContent =
            "Grazie per la tua richiesta! Riceverai una mail di conferma.";
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
          setTimeout(() => banner.remove(), 4000);
          form.reset();
        } else {
          alert("Errore nell'invio.");
        }
      } catch (err) {
        console.error("Errore:", err);
        alert("Errore nell'invio del form.");
      }
    });
  
    
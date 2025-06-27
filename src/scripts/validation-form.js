const form = document.getElementById("contact-form");
      const email = document.getElementById("email");
      const emailError = document.getElementById("email-error");

      form.addEventListener("submit", function (e) {
        let valid = true;

        // Email validation
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(email.value.trim())) {
          email.classList.add("border-red-500");
          emailError.classList.remove("hidden");
          valid = false;
        } else {
          email.classList.remove("border-red-500");
          emailError.classList.add("hidden");
        }

        if (!valid) {
          e.preventDefault(); // blocca l'invio se ci sono errori
        }
      });
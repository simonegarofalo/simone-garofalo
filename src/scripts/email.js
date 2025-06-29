document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.querySelector("input[name='email']").value;
    const message = document.querySelector("input[name='message']").value;
  
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, message })
    });
  
    const data = await res.json();
  
    if (data.success) {
        window.location.href = "/success";

    } else {
      alert("Errore nell'invio della mail!");
      console.error("Errore nell'invio della mail:", data.error);  }
  });
  
    
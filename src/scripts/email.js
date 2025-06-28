document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.querySelector("input[name='email']").value;
  
    const res = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });
  
    const data = await res.json();
  
    if (data.success) {
      window.location.href = "/";
    } else {
      alert("Errore nell'invio della mail!");
      console.error("Errore nell'invio della mail:", data.error);  }
  });
  
    
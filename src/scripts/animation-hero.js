const textElement = document.querySelector(".dinamic-text-content");
    const texts = ["web designer", "developer", "creativo"];
    let textIndex = 0;

    function updateText() {
    textElement.textContent = texts[textIndex];
    textElement.id = `text-${textIndex}`;
    }

    updateText();

    textElement.addEventListener("animationiteration", () => {
      textIndex = (textIndex + 1) % texts.length;
      textElement.textContent = texts[textIndex];

      updateText();
    });
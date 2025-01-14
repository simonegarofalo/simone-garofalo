const textElement = document.querySelector(".dinamic-text-content");
    const texts = ["web designer", "front-end developer", "creativo"];
    let textIndex = 0;

    textElement.textContent = texts[textIndex];

    textElement.addEventListener("animationiteration", () => {
      textIndex = (textIndex + 1) % texts.length;
      textElement.textContent = texts[textIndex];
    });
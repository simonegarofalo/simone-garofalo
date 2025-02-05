const currentDate = new Date();
const options = { day: '2-digit', month: 'long', year: 'numeric' };
const dataFormatter = new Intl.DateTimeFormat('it-IT', options);
const data = dataFormatter.format(currentDate);
document.getElementById("current-date").innerHTML = data;


document.getElementById("add-button").addEventListener("click", () => {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim();
    const listContainer = document.getElementById("list-container");

  
    if (taskText && listContainer.children.length < 4) {
      const li = document.createElement("li");
      li.classList.add("flex", "justify-between", "items-center", "py-2", "border-b", "border-gray-200");
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-btn text-sm text-red-500 hover:text-red-700">Rimuovi</button>
      `;
      listContainer.appendChild(li);
      inputBox.value = "";
    }
  
    if (listContainer.children.length >= 3) {
      document.getElementById("add-button").disabled = true;
    }
  });
  
  document.getElementById("list-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      e.target.parentElement.remove();
  
      if (document.getElementById("list-container").children.length < 3) {
        document.getElementById("add-button").disabled = false;
      }
    }
  });
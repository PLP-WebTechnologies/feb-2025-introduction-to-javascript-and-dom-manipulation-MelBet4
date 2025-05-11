// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const title = document.getElementById("main-title");
    title.textContent = "You clicked the button!";
    title.style.color = "teal"; // Change text color
    title.style.fontSize = "2.5rem"; // Modify CSS via JavaScript
});

// Add/Remove an element dynamically
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
let box;

toggleBoxBtn.addEventListener("click", () => {
    if (!box) {
        box = document.createElement("div");
        box.textContent = "I'm a new element!";
        box.style.padding = "20px";
        box.style.backgroundColor = "#f0f0f0";
        box.style.marginTop = "10px";
        document.body.appendChild(box);
    } else {
        box.remove();
        box = null;
    }
});
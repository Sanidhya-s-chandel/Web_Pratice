let clickCount = 0;

function bubble() {
    const mainContainer = document.body.querySelector(".main");
    mainContainer.innerHTML = '';

    for (var i = 1; i < 120; i++) {
        var bubbles = document.createElement("div");
        var red = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);

        bubbles.textContent = Math.floor(Math.random() * 100);
        bubbles.classList.add("w-20", "h-20", "flex", "justify-center", "items-center", "rounded-full", "bg-red-500", "text-2xl");
        bubbles.style.backgroundColor = `rgb(${red},${green},${blue})`;
        mainContainer.appendChild(bubbles);

        bubbles.addEventListener("click", function() {
            clickCount++;
            alert(`Clicked ${clickCount} time(s)`);
        });
    }
}

setInterval(bubble, 3000);
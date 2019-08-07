function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const velocity = 5;
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
    if (event.which === 40) {
        top += velocity;
    }
    dinoElement.style.top = top + "px";
}

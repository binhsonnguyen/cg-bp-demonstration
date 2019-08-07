function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const velocity = 5;
    const arrowDownKeyCode = 40;
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
    if (event.which === arrowDownKeyCode) {
        top += velocity;
    }
    dinoElement.style.top = top + "px";
}

function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const velocity = 5;
    const arrowUpKeyCode = 38;
    const arrowDownKeyCode = 40;
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);

    let key = event.which;
    if (key === arrowUpKeyCode) {
        top -= velocity;
    } else if (key === arrowDownKeyCode) {
        top += velocity;
    }

    dinoElement.style.top = top + "px";
}

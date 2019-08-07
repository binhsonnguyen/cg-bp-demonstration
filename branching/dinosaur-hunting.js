function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const velocity = 5;
    const arrowLeftKeyCode = 37;
    const arrowUpKeyCode = 38;
    const arrowRightKeyCode = 39;
    const arrowDownKeyCode = 40;

    let dinoElement = document.getElementById("dinosaurs");

    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);

    let dinoElementLeft = dinoElement.style.left;
    let left = parseInt(dinoElementLeft);

    let key = event.which;
    if (key === arrowLeftKeyCode) {
        left -= velocity;
    } else if (key === arrowUpKeyCode) {
        top -= velocity;
    } else if (key === arrowRightKeyCode) {
        left += velocity;
    } else if (key === arrowDownKeyCode) {
        top += velocity;
    }

    dinoElement.style.top = top + "px";
    dinoElement.style.left = left + "px";
}

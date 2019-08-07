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
    switch (key) {
        case arrowLeftKeyCode:
            left -= velocity;
            if (left < 0) {
                left = 200;
            }
            break;
        case arrowUpKeyCode:
            top -= velocity;
            if (top < 0) {
                top = 200;
            }
            break;
        case arrowRightKeyCode:
            left += velocity;
            if (left > 200) {
                left = 0;
            }
            break;
        case arrowDownKeyCode:
            top += velocity;
            if (top > 200) {
                top = 0;
            }
            break;
    }

    dinoElement.style.top = top + "px";
    dinoElement.style.left = left + "px";
}

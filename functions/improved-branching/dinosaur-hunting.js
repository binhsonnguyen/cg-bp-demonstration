function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const velocity = 5;
    const roomSide = 200;
    const arrowLeftKeyCode = 37;
    const arrowUpKeyCode = 38;
    const arrowRightKeyCode = 39;
    const arrowDownKeyCode = 40;

    let dinoElement = document.getElementById("dinosaurs");

    let top = getTop();

    let dinoElementLeft = dinoElement.style.left;
    let left = parseInt(dinoElementLeft);

    let key = event.which;
    switch (key) {
        case arrowLeftKeyCode:
            left -= velocity;
            if (left < 0) {
                left += roomSide;
            }
            break;
        case arrowUpKeyCode:
            top -= velocity;
            if (top < 0) {
                top += roomSide;
            }
            break;
        case arrowRightKeyCode:
            left += velocity;
            if (left > roomSide) {
                left -= roomSide;
            }
            break;
        case arrowDownKeyCode:
            top += velocity;
            if (top > roomSide) {
                top -= roomSide;
            }
            break;
    }

    dinoElement.style.top = top + "px";
    dinoElement.style.left = left + "px";
}

function getTop() {
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
}

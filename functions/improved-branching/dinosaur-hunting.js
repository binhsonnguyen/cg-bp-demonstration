const dinoElement = document.getElementById("dinosaurs");
const velocity = 5;
const roomSide = 200;

function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
    const arrowLeftKeyCode = 37;
    const arrowUpKeyCode = 38;
    const arrowRightKeyCode = 39;
    const arrowDownKeyCode = 40;

    let top = getTop();
    let left = getLeft();

    let key = event.which;
    switch (key) {
        case arrowLeftKeyCode:
            left = reduce(left);
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
    return parseInt(dinoElement.style.top);
}

function getLeft() {
    return parseInt(dinoElement.style.left);
}

function reduce(position) {
    position -= velocity;
    if (position < 0) {
        position += roomSide;
    }
    return position;
}

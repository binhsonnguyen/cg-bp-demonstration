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

    let key = event.which;
    switch (key) {
        case arrowLeftKeyCode:
            moveLeft();
            break;
        case arrowUpKeyCode:
            moveUp();
            break;
        case arrowRightKeyCode:
            moveRight();
            break;
        case arrowDownKeyCode:
            moveDown();
            break;
    }
}

function getTop() {
    return parseInt(dinoElement.style.top);
}

function getLeft() {
    return parseInt(dinoElement.style.left);
}

function moveLeft() {
    let left = getLeft();
    left = reduce(left);
    dinoElement.style.left = left + "px";
}

function moveRight() {
    let left = getLeft();
    left = increase(left);
    dinoElement.style.left = left + "px";
}

function moveUp() {
    let top = getTop();
    top = reduce(top);
    dinoElement.style.top = top + "px";
}

function moveDown() {
    let top = getTop();
    top = increase(top);
    dinoElement.style.top = top + "px";
}

function reduce(position) {
    position -= velocity;
    if (position < 0) {
        position += roomSide;
    }
    return position;
}

function increase(position) {
    position += velocity;
    if (position > roomSide) {
        position -= roomSide;
    }
    return position;
}

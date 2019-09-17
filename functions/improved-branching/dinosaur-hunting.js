const dinoElement = document.getElementById("dinosaurs");
const velocity = 5;
const roomSide = 200;

const arrowLeftKeyCode = 37;
const arrowUpKeyCode = 38;
const arrowRightKeyCode = 39;
const arrowDownKeyCode = 40;

function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown(event) {
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

function setLeft(left) {
    dinoElement.style.left = left + "px";
}

function setTop(top) {
    dinoElement.style.top = top + "px";
}

function moveLeft() {
    setLeft(reduce(getLeft()));
}

function moveRight() {
    setLeft(increase(getLeft()))
}

function moveUp() {
    setTop(reduce(getTop()));
}

function moveDown() {
    setTop(increase(getTop()));
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

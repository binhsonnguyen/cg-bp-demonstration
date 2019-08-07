function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown() {
    console.log("A key has been stroke!");
    const velocity = 5;
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
    top += velocity;
    dinoElement.style.top = top + "px";
}

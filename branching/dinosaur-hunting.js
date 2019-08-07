function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown() {
    console.log("A key has been stroke!");
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
    top += 5;
    dinoElement.style.top = top + "px";
}

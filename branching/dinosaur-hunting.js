function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown() {
    console.log("A key has been stroke!");
    let dinoElement = document.getElementById("dinosaurs");
    let dinoElementTopping = dinoElement.style.top;
    let top = parseInt(dinoElementTopping);
    console.log("top", top);
}

function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown() {
    console.log("A key has been stroke!");
    let dinoElement = document.getElementById("dinosaurs");
    let top = dinoElement.style.top;
    console.log("top", top);
}

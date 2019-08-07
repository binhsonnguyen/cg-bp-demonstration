function registerKeyboardStrokeListener() {
    window.addEventListener("keydown", onKeyDown);
}

function onKeyDown() {
    console.log("A key has been stroke!");
}

function TerisPresenter(canvasId) {
    const _canvasId = canvasId;
    const _width = 100;
    const _height = 200;
    const _backgroundColor = "darkslategray";

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        gameBoardCanvas.width = _width;
        gameBoardCanvas.height = _height;
        gameBoardCanvas.style.backgroundColor = _backgroundColor;
    };
}

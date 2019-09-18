function TerisPresenter(canvasId, game) {
    const _canvasId = canvasId;
    const _game = game;
    const _pixelPerCell = 10;
    const _backgroundColor = "darkslategray";

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        gameBoardCanvas.width = _game.getCols() * _pixelPerCell;
        gameBoardCanvas.height = _game.getRows() * _pixelPerCell;
        gameBoardCanvas.style.backgroundColor = _backgroundColor;
    };
}

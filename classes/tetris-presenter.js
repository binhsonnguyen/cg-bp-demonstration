function TerisPresenter(canvasId) {
    const _canvasId = canvasId;
    const _pixelPerCell = 10;
    const _backgroundColor = "darkslategray";
    const _game = {
        rows: 20,
        cols: 10
    };

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        gameBoardCanvas.width = _game.cols * _pixelPerCell;
        gameBoardCanvas.height = _game.rows * _pixelPerCell;
        gameBoardCanvas.style.backgroundColor = _backgroundColor;
    };
}

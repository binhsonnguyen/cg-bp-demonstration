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

    this.displayCell = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        const context = gameBoardCanvas.getContext("2d");
        context.beginPath();
        context.fillStyle = "red";
        context.arc(_pixelPerCell / 2, _pixelPerCell / 2, _pixelPerCell / 2, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    this.start = () => {
        this.displayBoard();
        this.displayCell()
    }
}

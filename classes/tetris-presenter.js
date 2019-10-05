function TerisPresenter(canvasId, game) {
    const _canvasId = canvasId;
    const _game = game;
    const _pixelPerCell = 10;
    const _cellRadius = _pixelPerCell / 2;
    const _backgroundColor = "darkslategray";

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        gameBoardCanvas.width = _game.getCols() * _pixelPerCell;
        gameBoardCanvas.height = _game.getRows() * _pixelPerCell;
        gameBoardCanvas.style.backgroundColor = _backgroundColor;
    };

    this.displayCells = () => {
        for (let cell of _game.getCells()) {
            this.displayCell(cell);
        }
    };

    this.displayCell = (cell) => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        const context = gameBoardCanvas.getContext("2d");
        context.beginPath();
        context.fillStyle = cell.getColor();
        context.arc(cell.getX() * _pixelPerCell + _cellRadius, cell.getY() * _pixelPerCell + _cellRadius, _cellRadius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    this.start = () => {
        this.displayBoard();
        this.displayCells();
    }
}

function TerisPresenter(canvasId, game) {
    const _canvasId = canvasId;
    const _game = game;
    const _pixelPerCell = 10;
    const _cellRadius = _pixelPerCell / 2;
    const _backgroundColor = "darkslategray";

    const _cell = {
        color: "red",
        x: 2,
        y: 4,
    };

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
        context.fillStyle = _cell.color;
        context.arc(_cell.x * _pixelPerCell + _cellRadius, _cell.y * _pixelPerCell + _cellRadius, _cellRadius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    this.start = () => {
        this.displayBoard();
        this.displayCell()
    }
}

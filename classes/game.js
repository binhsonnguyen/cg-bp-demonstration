function Game() {
    const _colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    const _cellColor = _colors[Math.floor(Math.random() * _colors.length)];
    const _rows = 20;
    const _cols = 10;
    const _cells = [
        new Cell(_cellColor, 2, 4),
        new Cell(_cellColor, 2, 5),
        new Cell(_cellColor, 3, 5),
        new Cell(_cellColor, 3, 6),
    ];

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getCells = () => _cells;
}

function Game() {
    const _rows = 20;
    const _cols = 10;
    const _cells = [
        new Cell(2, 4),
        new Cell(2, 5),
        new Cell(3, 5),
        new Cell(3, 6),
    ];

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getCells = () => _cells;
}

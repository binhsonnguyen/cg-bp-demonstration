function Game() {
    const _rows = 20;
    const _cols = 10;
    const _cell = new Cell(2, 4);

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getCell = () => _cell;
}

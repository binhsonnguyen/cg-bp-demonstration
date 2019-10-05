function Game() {
    const _rows = 20;
    const _cols = 10;
    const _tetriminos = new Tetriminos();

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;
}

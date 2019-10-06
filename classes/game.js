function Game() {
    const _rows = 20;
    const _cols = 10;
    let _tetriminos = new Tetriminos(3, 0);

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        if (_tetriminos.getY() === _rows) {
            _tetriminos = new Tetriminos(3, 0);
        } else {
            _tetriminos.moveDown();
        }
        setTimeout(this.start, 250);
    };
}

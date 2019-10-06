function Game() {
    const _rows = 20;
    const _cols = 10;
    const createNewTetriminos = () => new Tetriminos(3, 0);
    let _tetriminos = createNewTetriminos();

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        if (_tetriminos.getY() === _rows) {
            _tetriminos = createNewTetriminos();
        } else {
            _tetriminos.moveDown();
        }
        setTimeout(this.start, 250);
    };
}

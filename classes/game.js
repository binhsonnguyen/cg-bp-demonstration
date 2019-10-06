function Game() {
    const _rows = 20;
    const _cols = 10;

    const createNewTetriminos = () => {
        if (Math.random() < 0.5) {
            return new TetriminosZ1(3, 0);
        } else {
            return new TetriminosZ2(3, 0);
        }
    };

    let _tetriminos = createNewTetriminos();
    const isTetriminosOnBase = () => _tetriminos.getY() === _rows;

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        if (isTetriminosOnBase()) {
            _tetriminos = createNewTetriminos();
        } else {
            _tetriminos.moveDown();
        }
        setTimeout(this.start, 250);
    };
}

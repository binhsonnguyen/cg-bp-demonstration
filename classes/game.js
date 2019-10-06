function Game() {
    const _rows = 20;
    const _cols = 10;
    const _tetriminosFactory = new TetriminosFactory(3, 0);

    let _tetriminos = _tetriminosFactory.createInstance();
    const isTetriminosOnBase = () => _tetriminos.getY() === _rows;

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        if (isTetriminosOnBase()) {
            _tetriminos = _tetriminosFactory.createInstance(3, 0);
        } else {
            _tetriminos.moveDown();
        }
        setTimeout(this.start, 250);
    };
}

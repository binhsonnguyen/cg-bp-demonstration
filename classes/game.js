function Game() {
    const _rows = 20;
    const _cols = 10;
    const _tetriminosFactory = new TetriminosFactory(3, 0);

    let _tetriminos = _tetriminosFactory.createInstance();

    const _cellsOnFloor = new Array(_cols);
    this.getCellsOnFloor = () => _cellsOnFloor;

    for (let i = 0; i < _cellsOnFloor.length; i++) {
        _cellsOnFloor[i] = [];
    }

    const isTetriminosOnBase = () => {
        for (let cell of _tetriminos.getCells()) {
            const cellDistanceToFloor = _rows - 1 - cell.getY();
            const columnCellOnFloor = _cellsOnFloor[cell.getX()];
            if (cellDistanceToFloor <= columnCellOnFloor.length)
                return true;
        }
        return false;
    };

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        if (isTetriminosOnBase()) {
            for (let cell of _tetriminos.getCells()) {
                const columnCellOnFloor = _cellsOnFloor[cell.getX()];
                columnCellOnFloor.push(new Cell(cell.getColor(), cell.getX(), _rows - 1 - columnCellOnFloor.length));
            }
            _tetriminos = _tetriminosFactory.createInstance(3, 0);
        } else {
            _tetriminos.moveDown();
        }
        setTimeout(this.start, 250);
    };
}

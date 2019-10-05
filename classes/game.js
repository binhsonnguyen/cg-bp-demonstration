function Game() {
    const _rows = 20;
    const _cols = 10;
    let _tetriminos = new Tetriminos(3, 5);

    this.getRows = () => _rows;
    this.getCols = () => _cols;
    this.getTetriminos = () => _tetriminos;

    this.start = () => {
        _tetriminos = new Tetriminos(_tetriminos.getX(), _tetriminos.getY() + 1);
        console.log(_tetriminos.getX(), _tetriminos.getY());
        setTimeout(this.start, 250);
    };
}

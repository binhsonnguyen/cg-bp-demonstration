function TetriminosZ2(color, x, y) {
    const _color = color;
    const _x = x;
    let _y = y;
    let _cells = [
        new Cell(_color, _x + 1, _y),
        new Cell(_color, _x, _y + 1),
        new Cell(_color, _x + 1, _y + 1),
        new Cell(_color, _x, _y + 2),
    ];

    this.getCells = () => _cells;
    this.getX = () => _x;
    this.getY = () => _y;
    this.moveDown = () => {
        _y++;
        for (let cell of _cells) cell.moveDown();
    }
}

function Tetriminos(x, y) {
    const _colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    const _color = _colors[Math.floor(Math.random() * _colors.length)];
    const _x = x;
    let _y = y;
    let _cells = [
        new Cell(_color, _x, _y),
        new Cell(_color, _x, _y + 1),
        new Cell(_color, _x + 1, _y + 1),
        new Cell(_color, _x + 1, _y + 2),
    ];

    this.getCells = () => _cells;
    this.getX = () => _x;
    this.getY = () => _y;
    this.moveDown = () => {
        _y++;
        _cells = [
            new Cell(_color, _x, _y),
            new Cell(_color, _x, _y + 1),
            new Cell(_color, _x + 1, _y + 1),
            new Cell(_color, _x + 1, _y + 2),
        ];
    }
}

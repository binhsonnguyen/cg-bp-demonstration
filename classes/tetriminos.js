function Tetriminos() {
    const _colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    const _color = _colors[Math.floor(Math.random() * _colors.length)];
    const _cells = [
        new Cell(_color, 2, 4),
        new Cell(_color, 2, 5),
        new Cell(_color, 3, 5),
        new Cell(_color, 3, 6),
    ];

    this.getCells = () => _cells;
}

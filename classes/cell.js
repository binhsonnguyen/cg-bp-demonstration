function Cell(x, y) {
    const _colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    const _color = _colors[Math.floor(Math.random() * _colors.length)];
    const _x = x;
    const _y = y;

    this.getColor = () => _color;

    this.getX = () => _x;

    this.getY = () => _y;
}

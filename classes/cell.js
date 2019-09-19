function Cell(color, x, y) {
    const _color = color;
    const _x = x;
    const _y = y;

    this.getColor = () => _color;

    this.getX = () => _x;

    this.getY = () => _y;
}

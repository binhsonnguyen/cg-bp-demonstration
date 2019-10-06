function TetriminosFactory(x, y) {
    const _x = x;
    const _y = y;
    const _colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

    this.createInstance = () => {
        const color = _colors[Math.floor(Math.random() * _colors.length)];
        if (Math.random() < 0.5) {
            return new TetriminosZ1(color, _x, _y);
        } else {
            return new TetriminosZ2(color, _x, _y);
        }
    }
}

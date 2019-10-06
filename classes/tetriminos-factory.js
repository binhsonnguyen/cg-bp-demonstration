function TetriminosFactory(x, y) {
    const _x = x;
    const _y = y;

    this.createInstance = () => {
        if (Math.random() < 0.5) {
            return new TetriminosZ1(_x, _y);
        } else {
            return new TetriminosZ2(_x, _y);
        }
    }
}

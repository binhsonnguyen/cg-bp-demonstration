function TerisPresenter(canvasId) {
    const _canvasId = canvasId;

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(_canvasId);
        gameBoardCanvas.width = 100;
        gameBoardCanvas.height = 200;
        gameBoardCanvas.style.backgroundColor = "darkslategray";
    };
}

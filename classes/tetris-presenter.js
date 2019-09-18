function TerisPresenter() {
    const canvasId = "game-board";

    this.displayBoard = () => {
        const gameBoardCanvas = document.getElementById(canvasId);
        gameBoardCanvas.width = 100;
        gameBoardCanvas.height = 200;
        gameBoardCanvas.style.backgroundColor = "darkslategray";
    };
}

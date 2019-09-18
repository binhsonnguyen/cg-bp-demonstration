const presenter = {
    canvasId: "game-board",
    displayBoard: function () {
        const gameBoardCanvas = document.getElementById(this.canvasId);
        gameBoardCanvas.width = 100;
        gameBoardCanvas.height = 200;
        gameBoardCanvas.style.backgroundColor = "darkslategray";
    }
};

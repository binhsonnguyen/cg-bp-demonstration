const devMode = true; // a configuration
if (!devMode) {
    let pinCode;
    do {
        pinCode = prompt("Input PIN Code to unlock!");
    } while (pinCode !== "1234");
}

alert("Welcome");

function addTask() {
    do {
        let taskSubject = prompt("Input your task");
        let tasksListDiv = document.getElementById("tasks-list");
        let taskListItemHtml = "<input type=\"checkbox\">" + taskSubject + "<br>";
        tasksListDiv.innerHTML += taskListItemHtml;
    } while (confirm("Input another?"));
}

function draw() {
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    let height = +document.getElementById("height").value;
    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        let width = +document.getElementById("width").value;
        for (let colIndex = 0; colIndex < width; colIndex++) {
            let dotView;
            let isOnBorder = rowIndex === 0 || rowIndex === height - 1
                || colIndex === 0 || colIndex === width - 1;
            if (isOnBorder) {
                dotView = "* ";
            } else {
                dotView = "  ";
            }
            canvas.innerText += dotView;
        }
        canvas.innerHTML += "<br/>";
    }
}

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
    for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        let width = +document.getElementById("width").value;
        for (let colIndex = 0; colIndex < width; colIndex++) {
            canvas.innerText += "*";
        }
        canvas.innerHTML += "<br/>";
    }
}

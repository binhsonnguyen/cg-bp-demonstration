const devMode = true; // a configuration
if (!devMode) {
    let pinCode;
    do {
        pinCode = prompt("Input PIN Code to unlock!");
    } while (pinCode !== "1234");
}

alert("Welcome");

function addTask() {
    let continuing;
    do {
        let taskSubject = prompt("Input your task");
        let tasksListDiv = document.getElementById("tasks-list");
        let taskListItemHtml = "<input type=\"checkbox\">" + taskSubject + "<br>";
        tasksListDiv.innerHTML += taskListItemHtml;
        continuing = confirm("Input another?");
    } while (continuing);
}

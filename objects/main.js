const remindersTable = document.getElementById("reminders-table");

const subjects = [
    "Show main display",
    "Allow add",
    "Allow delete",
    "Hide done tasks",
];

function displayAll() {
    for (let subject of subjects) {
        displayOne(subject);
    }
}

function displayOne(subject) {
    remindersTable.innerHTML += renderReminder(subject);
}

function renderReminder(subject) {
    let reminderElementView =
        "<tr>" +
        "    <td>" +
        "        <input type='checkbox'>" +
        "    </td>" +
        "    <td>" + subject + "</td>" +
        "</tr>";
    return reminderElementView;
}

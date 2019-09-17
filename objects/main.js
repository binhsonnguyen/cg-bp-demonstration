const remindersTable = document.getElementById("reminders-table");
const reminderSubject = "Show main display";

function display() {
    let reminderElementView = renderReminder(reminderSubject);
    remindersTable.innerHTML += reminderElementView;
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

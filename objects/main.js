function display() {
    let remindersTable = document.getElementById("reminders-table");
    let reminderSubject = "Show main display";
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

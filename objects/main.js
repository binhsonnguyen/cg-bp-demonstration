function display() {
    let remindersTable = document.getElementById("reminders-table");
    let reminderSubject = "Show main display";
    let reminderElementView =
        "<tr>" +
        "    <td>" +
        "        <input type='checkbox'>" +
        "    </td>" +
        "    <td>" + reminderSubject + "</td>" +
        "</tr>";
    remindersTable.innerHTML += reminderElementView;
}

function display() {
    let remindersTable = document.getElementById("reminders-table");
    let reminderElementView =
        "<tr>" +
        "    <td>" +
        "        <input type='checkbox'>" +
        "    </td>" +
        "    <td>Show main display</td>" +
        "</tr>";
    remindersTable.innerHTML += reminderElementView;
}

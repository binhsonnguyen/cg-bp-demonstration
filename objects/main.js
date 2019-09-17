const remindersTable = document.getElementById("reminders-table");

const subjects = [
    "Show main display",
    "Allow add",
    "Allow delete",
    "Hide done tasks",
];

function addAndDisplay() {
    let subject = document.getElementById("new-reminder").value;
    subjects.push(subject);
    displayAll();
    document.getElementById("new-reminder").value = null;
}

function displayAll() {
    remindersTable.innerHTML = null;
    for (let subject of subjects) {
        displayOne(subject);
    }
}

function displayOne(subject) {
    remindersTable.innerHTML += renderReminder(subject);
}

function renderReminder(subject) {
    return `<tr>
    <td>
        <input type='checkbox'>
    </td>
    <td>${subject}</td>
</tr>`;
}

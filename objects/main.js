const remindersTable = document.getElementById("reminders-table");

const dataSource = {
    subjects: [
        "Show main display",
        "Allow add",
        "Allow delete",
        "Hide done tasks",
    ],
    add: function (subject) {
        this.subjects.push(subject);
    }
};

function addAndDisplay() {
    addInputtingSubjectToDataSource();
    refreshDisplay();
    emptyReminderInput();
}

function refreshDisplay() {
    emptyTableView();
    for (let subject of dataSource.subjects) {
        displayOne(subject);
    }
}

function addInputtingSubjectToDataSource() {
    let subject = document.getElementById("new-reminder").value;
    dataSource.add(subject);
}

function emptyTableView() {
    remindersTable.innerHTML = null;
}

function emptyReminderInput() {
    document.getElementById("new-reminder").value = null;
}

function displayOne(subject) {
    remindersTable.innerHTML += renderReminder(subject);
}

function removeOne() {
    console.log("removing reminder");
}

function renderReminder(subject) {
    return `<tr>
    <td>
        <input type='checkbox'>
    </td>
    <td>${subject}</td>
    <td>
        <button onclick="removeOne()">Cancel</button>
    </td>
</tr>`;
}

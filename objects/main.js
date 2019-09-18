const remindersTable = document.getElementById("reminders-table");

let incrementId = 0;

const dataSource = {
    reminders: [
        {
            id: incrementId++,
            subject: "Show main display"
        },
        {
            id: incrementId++,
            subject: "Allow add"
        },
        {
            id: incrementId++,
            subject: "Allow delete"
        },
        {
            id: incrementId++,
            subject: "Hide done tasks"
        },
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
    for (let subject of dataSource.reminders) {
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

function removeOne(id) {
    console.log("removing reminder", `"${id}"`);
}

function renderReminder(reminder) {
    return `<tr>
    <td>
        <input type='checkbox'>
    </td>
    <td>${reminder.subject}</td>
    <td>
        <button onclick="removeOne(${reminder.id})">Cancel</button>
    </td>
</tr>`;
}

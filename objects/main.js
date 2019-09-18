const remindersTable = document.getElementById("reminders-table");

let incrementId = 0;

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

function removeOne(id) {
    console.log("removing reminder", `"${id}"`);
}

function renderReminder(subject) {
    incrementId++;
    return `<tr>
    <td>
        <input type='checkbox'>
    </td>
    <td id="${incrementId}">${subject}</td>
    <td>
        <button onclick="removeOne(${incrementId})">Cancel</button>
    </td>
</tr>`;
}

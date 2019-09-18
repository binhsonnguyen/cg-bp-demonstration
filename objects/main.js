const remindersTable = document.getElementById("reminders-table");

let incrementId = 0;

const dataSource = {
    reminders: [
        {
            id: incrementId++,
            subject: "Show main display",
            closed: false
        },
        {
            id: incrementId++,
            subject: "Allow add",
            closed: false
        },
        {
            id: incrementId++,
            subject: "Allow delete",
            closed: false
        },
        {
            id: incrementId++,
            subject: "Hide done tasks",
            closed: false
        },
    ],
    add: function (subject) {
        this.reminders.push({
            id: incrementId++,
            subject: subject
        });
    },
    remove: function (id) {
        let remainingReminders = [];
        for (let reminder of this.reminders) {
            if (id !== reminder.id) {
                remainingReminders.push(reminder);
            }
        }
        this.reminders = remainingReminders;
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
    dataSource.remove(id);
    refreshDisplay();
}

function closeOne(id) {
    for (let reminder of dataSource.reminders) {
        if (id === reminder.id) {
            reminder.closed = true;
        }
    }
}

function renderReminder(reminder) {
    return `<tr>
    <td>
        <input id="${reminder.id}" oninput="closeOne(${reminder.id})" type='checkbox'>
    </td>
    <td>
        <label for="${reminder.id}">${reminder.subject}</label>
    </td>
    <td>
        <button onclick="removeOne(${reminder.id})">Cancel</button>
    </td>
</tr>`;
}

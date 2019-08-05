function displayInputtedValue() {
    let inputValue = document.getElementById("input-value").value;
    let message = "You inputted \"" + inputValue + "\"!";
    document.getElementById("feedback").innerText = message;
}

function concatFullName() {
    let firstName = document.getElementById("concat_value-first_name").value;
    let middleName = document.getElementById("concat_value-middle_name").value;
    let lastName = document.getElementById("concat_value-last_name").value;
    let fullName = firstName + " " + middleName + " " + lastName;
    document.getElementById("concat_value-result").innerText = fullName;
}

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
    document.getElementById("concat_value-full_name").value = fullName;
}

function calcPlus() {
    let arg1 = +document.getElementById("calculator-arg_1").value;
    let arg2 = +document.getElementById("calculator-arg_2").value;
    let calculateResult = arg1 + arg2;
    document.getElementById("calculated").value = calculateResult;
}

function reuseCalculatedValue() {
    let calculatedValue = document.getElementById("calculated").value;
    document.getElementById("calculator-arg_1").value = calculatedValue;
    document.getElementById("calculator-arg_2").value = "";
    document.getElementById("calculated").value = "";
}

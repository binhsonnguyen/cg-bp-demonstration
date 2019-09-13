function displayInputtedValue() {
    let inputValue = getInputValue("input-value");
    let message = "You inputted \"" + inputValue + "\"!";
    document.getElementById("feedback").innerText = message;
}

function concatFullName() {
    let firstName = getInputValue("concat_value-first_name");
    let middleName = getInputValue("concat_value-middle_name");
    let lastName = getInputValue("concat_value-last_name");
    let fullName = firstName + " " + middleName + " " + lastName;
    document.getElementById("concat_value-full_name").value = fullName;
}

function calcPlus() {
    let arg1 = +getInputValue("calculator-arg_1");
    let arg2 = +getInputValue("calculator-arg_2");
    let calculateResult = arg1 + arg2;
    document.getElementById("calculated").value = calculateResult;
}

function reuseCalculatedValue() {
    let calculatedValue = getInputValue("calculated");
    document.getElementById("calculator-arg_1").value = calculatedValue;
    document.getElementById("calculator-arg_2").value = "";
    document.getElementById("calculated").value = "";
    document.getElementById("calculator-arg_2").focus();
}

function serialSwitchChange() {
    let switch1IsOn = isCheckBoxChecked("switch-a1");
    let switch2IsOn = isCheckBoxChecked("switch-a2");
    document.getElementById("lamp-a").checked = switch1IsOn && switch2IsOn;
}

function parallelSwitchChange() {
    let switch1IsOn = isCheckBoxChecked("switch-b1");
    let switch2IsOn = isCheckBoxChecked('switch-b2');
    document.getElementById("lamp-b").checked = switch1IsOn || switch2IsOn;
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function isCheckBoxChecked(id) {
    return document.getElementById(id).checked;
}

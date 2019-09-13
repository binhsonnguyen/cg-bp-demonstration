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
    let switch1IsOn = document.getElementById("switch-a1").checked;
    let switch2IsOn = document.getElementById("switch-a2").checked;
    document.getElementById("lamp-a").checked = switch1IsOn && switch2IsOn;
}

function parallelSwitchChange() {
    let switch1IsOn = document.getElementById("switch-b1").checked;
    let switch2IsOn = document.getElementById('switch-b2').checked;
    document.getElementById("lamp-b").checked = switch1IsOn || switch2IsOn;
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

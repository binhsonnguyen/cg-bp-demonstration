function displayInputtedValue() {
    let inputValue = getInputValue("input-value");
    let message = "You inputted \"" + inputValue + "\"!";
    getElement("feedback").innerText = message;
}

function concatFullName() {
    let firstName = getInputValue("concat_value-first_name");
    let middleName = getInputValue("concat_value-middle_name");
    let lastName = getInputValue("concat_value-last_name");
    let fullName = firstName + " " + middleName + " " + lastName;
    setInputValue("concat_value-full_name", fullName);
}

function calcPlus() {
    let arg1 = getInputValue("calculator-arg_1");
    let arg2 = getInputValue("calculator-arg_2");
    let calculateResult = arg1 + arg2;
    setInputValue("calculated", calculateResult);
}

function reuseCalculatedValue() {
    let calculatedValue = getInputValue("calculated");
    setInputValue("calculator-arg_1", calculatedValue);
    setInputValue("calculator-arg_2", "");
    setInputValue("calculated", "");
    getElement("calculator-arg_2").focus();
}

function serialSwitchChange() {
    let switch1IsOn = isCheckBoxChecked("switch-a1");
    let switch2IsOn = isCheckBoxChecked("switch-a2");
    getElement("lamp-a").checked = switch1IsOn && switch2IsOn;
}

function parallelSwitchChange() {
    let switch1IsOn = isCheckBoxChecked("switch-b1");
    let switch2IsOn = isCheckBoxChecked('switch-b2');
    getElement("lamp-b").checked = switch1IsOn || switch2IsOn;
}

function getInputValue(id) {
    let value = getElementAttribute(id, "value");
    let isNumberInput = getElementAttribute(id, "type") === "number";
    return isNumberInput ? +value : value;
}

function setInputValue(id, value) {
    getElement(id).value = value;
}

function isCheckBoxChecked(id) {
    return getElementAttribute(id, "checked");
}

function getElementAttribute(id, attr) {
    return getElement(id)[attr]
}

function getElement(id) {
    return document.getElementById(id);
}

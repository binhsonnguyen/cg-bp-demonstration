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

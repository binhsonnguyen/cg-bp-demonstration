function displayInputtedValue() {
    let inputValue = document.getElementById("input-value").value;
    let message = "You inputted \"" + inputValue + "\"!";
    document.getElementById("feedback").innerText = message;
}

function generate() {
    let size = +document.getElementById("length").value;
    let numbers = new Array(size);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }

    let numbersView = "";
    for (let i = 0; i < numbers.length; i++) {
        numbersView += numbers[i] + ", ";
    }
    document.getElementById("numbers").innerText = numbersView;
}

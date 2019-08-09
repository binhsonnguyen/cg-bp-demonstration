function generate() {
    let size = +document.getElementById("length").value;
    let numbers = new Array(size);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

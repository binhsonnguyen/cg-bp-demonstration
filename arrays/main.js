function generate() {
    let numbers = new Array(5);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}

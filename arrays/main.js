function generateLinearly() {
    let size = +document.getElementById("length").value;
    let numbers = new Array(size);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }

    document.getElementById("numbers").innerText = "[" + numbers.join(", ") + "]";
    document.getElementById("analysis-length").innerText = numbers.length;

    let minIndex;
    for (let i = 0; i < numbers.length; i++) {
        if (minIndex === undefined || numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }
    }
    document.getElementById("analysis-min").innerText = numbers[minIndex] + "@" + minIndex;
}

function generateRandomly() {
    let size = +document.getElementById("length").value;

    let maximum = +document.getElementById("maximum").value;
    if (!maximum) {
        maximum = 100;
    }

    let numbers = new Array(size);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.round(Math.random() * maximum);
    }

    document.getElementById("numbers").innerText = "[" + numbers.join(", ") + "]";
    document.getElementById("analysis-length").innerText = numbers.length;

    let minIndex;
    for (let i = 0; i < numbers.length; i++) {
        if (minIndex === undefined || numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }
    }
    document.getElementById("analysis-min").innerText = numbers[minIndex] + "@" + minIndex;
}

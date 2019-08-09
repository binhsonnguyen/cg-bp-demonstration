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

    let maxIndex;
    for (let i = 0; i < numbers.length; i++) {
        if (maxIndex === undefined || numbers[maxIndex] < numbers[i]) {
            maxIndex = i;
        }
    }
    document.getElementById("analysis-max").innerText = numbers[maxIndex] + "@" + maxIndex;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.getElementById("analysis-sum").innerText = sum;
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

    let maxIndex;
    for (let i = 0; i < numbers.length; i++) {
        if (maxIndex === undefined || numbers[maxIndex] < numbers[i]) {
            maxIndex = i;
        }
    }
    document.getElementById("analysis-max").innerText = numbers[maxIndex] + "@" + maxIndex;

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    document.getElementById("analysis-sum").innerText = sum;
}

function reverse() {
    
}

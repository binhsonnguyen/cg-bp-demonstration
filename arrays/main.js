let numbers;

function generateLinearly() {
    let size = +document.getElementById("length").value;
    numbers = new Array(size);

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

    numbers = new Array(size);

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
    let reversed = new Array(numbers.length);
    let lastIndex = numbers.length - 1;
    for (let i = 0; i < numbers.length; i++) {
        reversed[i] = numbers[lastIndex - i];
    }

    numbers = reversed;

    document.getElementById("numbers").innerText = "[" + numbers.join(", ") + "]";
    document.getElementById("analysis-length").innerText = numbers.length;

    let minIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }
    }
    document.getElementById("analysis-min").innerText = numbers[minIndex] + "@" + minIndex;

    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[maxIndex] < numbers[i]) {
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

function removeOdds() {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let isEven = number % 2 === 0;
        if (isEven) {
            evenNumbers.push(number);
        }
    }

    numbers = evenNumbers;

    document.getElementById("numbers").innerText = "[" + numbers.join(", ") + "]";
    document.getElementById("analysis-length").innerText = numbers.length;

    let minIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }
    }
    document.getElementById("analysis-min").innerText = numbers[minIndex] + "@" + minIndex;

    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[maxIndex] < numbers[i]) {
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

function removeEvens() {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        let isEven = number % 2 !== 0;
        if (isEven) {
            oddNumbers.push(number);
        }
    }

    numbers = oddNumbers;

    document.getElementById("numbers").innerText = "[" + numbers.join(", ") + "]";
    document.getElementById("analysis-length").innerText = numbers.length;

    let minIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[minIndex] > numbers[i]) {
            minIndex = i;
        }
    }
    document.getElementById("analysis-min").innerText = numbers[minIndex] + "@" + minIndex;

    let maxIndex = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[maxIndex] < numbers[i]) {
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

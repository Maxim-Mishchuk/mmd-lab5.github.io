function calculateB(inputArr) {
    let max = Math.max(...inputArr);

    let outputArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        outputArr.push(max * inputArr[i]);
    }

    return outputArr;
}

function reverseSort(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function main() {
    let n = parseInt(prompt("Enter the number of elements in the array A:"));

    let arrayA = [];

    for (let i = 0; i < n; i++) {
        let element = parseFloat(prompt(`Enter element ${i + 1} of the array A:`));
        arrayA.push(element);
    }

    let arrayB = calculateB(arrayA);

    console.log("Input array A:", arrayA);

    console.log("Output unsorted array B:", arrayB);

    console.log("Output reverse sorted array B:", reverseSort(arrayB))
}

main();
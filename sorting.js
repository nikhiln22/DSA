
// implementing the bubble sorting for changing the array in the ascending order

let arr = [12, 4, 56, 1, 90, 32, 4, 23];

function bubbleSortingAscending(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSortingAscending(arr));

// implementing the bubble sorting for making the array in the descending order

let array = [1, 24, 12, 36, 9, 80, 42];

function bubbleSortDescending(arr) {
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSortDescending(array));


// implementation of the selection sort for changing the array in the ascending order

let arr = [1, 0, 8, 3, 9, 12, 5, 4];

function selectionSortingAscending() {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSortingAscending(arr));

// implementation of the selection sort for changing the array in the descending order

let arr = [1, 0, 8, 3, 9, 12, 5, 4];

function selectionSortingDescending() {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }
        if (i !== maxIndex) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSortingDescending(arr));


// implementing the insertion sort for changing the array in the increasing order

let arr = [17, 3, 56, 12, 45, 1, 29, 5];

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

console.log(insertionSort(arr));





// implementing the bubble sorting

// given an unsorted list of the integers, sort the list in the ascending order

let arr = [12, 4, 56, 1, 90, 32, 4, 23];

function bubbleSortingAscending(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
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

// given an list of the student scores sort them on the basis of their ranks

const studentScores = [75, 82, 91, 58, 64, 73, 88];

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(studentScores));

// given a list of the employees names sort the employees names in the ascending order on the basis of the length

const employeeNames = ["Alice", "Bob", "Christopher", "Eve", "Daniel"];

function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j].length > arr[j + 1].length || 
                (arr[j].length === arr[j + 1].length && arr[j] > arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(employeeNames));


// implementing the bubble sorting for making the array in the descending order

let array = [1, 24, 12, 36, 9, 80, 42];

function bubbleSortingDescending(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

console.log(bubbleSortingDescending(array));

// implementation of the selection sort

// sort the given array of integers or list in the ascending order

let arr = [1, 0, 8, 3, 9, 12, 5, 4];

function selectionSortingAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i != minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

console.log(selectionSortingAscending(arr));

// sort an array of string alphabetically using the selection sort

const words = ['banana', 'apple', 'cherry', 'date'];

function selectionSortStrings(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].localeCompare(arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectionSortStrings(words));

// given an array of objects sort the object on basis of the increasing order of the age property

const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 19 },
    { name: 'Bob', age: 22 }
];

function selectionSortObjects(arr, key) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j][key] < arr[minIndex][key]) {
                minIndex = j;
            }
        }
       
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}


console.log(selectionSortObjects(people, 'age'));


// sorting the given list of array or integers in descending order

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


// implementing the insertion sort

// given a list of the unsorted integers sort the array in the ascending order

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


// given the grades of the student sort them to determine their ranking

const studentGrades = [88, 75, 92, 65, 80, 73, 90];

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(studentGrades));

// given a list of names sort the names alphabetically

const names = ["Charlie", "Alice", "Eve", "Bob", "Daniel"];

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort(names));


// implementing the quick sort 

// sort the given list of integers in the ascending order

let arr = [8, 20, -2, 4, -6];

function quickSortAscending(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortAscending(left), pivot, ...quickSortAscending(right)];
}

console.log(quickSortAscending(arr));


// sort the given list of integers in the decending order

let arr = [2, 3, 5, 4, 1];

function quickSortDescending(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

console.log(quickSortDescending(arr));

// sort the array of the strings alphabetically 

const names = ['John', 'Alice', 'Bob', 'Charlie'];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(names));

// sort the array of the objects in increasing order

const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 20 }
];

function quickSort(arr, key) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1][key];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, key), arr[arr.length - 1], ...quickSort(right, key)];
}

console.log(quickSort(people));

// implementing the merge sort

// given an list of the unsorted integers , sort the integers in ascending orders

let arr = [3, 1, 4, 8, 2, 5];

function mergeSortAscending(arr) {
    if (arr.length < 2) {
        return arr
    }

    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);

    return merge(mergeSortAscending(leftArray), mergeSortAscending(rightArray));
}

function merge(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray];
}

console.log(mergeSortAscending(arr));

// given an array of unsorted strings sort the array in the alphabetical order

const unsortedStrings = ["banana", "apple", "orange", "grape", "cherry"];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(unsortedStrings));

// Given an array of objects representing people, sort the array by their age property in ascending order.

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Daniel", age: 20 }
];

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i].age < right[j].age) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(people));
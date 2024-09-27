
// implementing the bubble sorting for changing the array in the ascending order
let arr = [12, 34, 2, 45, 25, 0];

function bubbleSortAscending(arr) {
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

console.log(bubbleSortAscending(arr));

// implementing the bubble sorting for making the array in the descending order

let array = [1, 24, 12, 36, 9, 80, 42];

function bubbleSortDescending(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
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








// implementing the insertion sort for changing the array in the increasing order

// let arr = [17, 3, 56, 12, 45, 1, 29, 5];

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let numberToInsert = arr[i]
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j+1] = numberToInsert;
//     }
//     return arr;
// }

// console.log(insertionSort(arr));




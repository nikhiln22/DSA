
// sorting an array in the ascending order using the heap sort

function heapify(arr, n, i) {
    let largest = i; 
    let left = 2 * i + 1; 
    let right = 2 * i + 2; 


    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }


    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }


    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; 


        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;


    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }


    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];


        heapify(arr, i, 0);
    }
}


let arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr); 

// finding the kth largest element using the heap sort

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

function findKthLargest(arr, k) {
    heapSort(arr);
    return arr[arr.length - k];
}


let arr = [3, 2, 1, 5, 6, 4];
let k = 2;
console.log(findKthLargest(arr, k)); 


// sorting an almost sorted array using the heap sort

function sortNearlySortedArray(arr, k) {
    const heap = [];
    const result = [];

    for (let i = 0; i <= k; i++) {
        heap.push(arr[i]);
    }
    heap.sort((a, b) => a - b);

    for (let i = k + 1; i < arr.length; i++) {
        result.push(heap.shift());
        heap.push(arr[i]);
        heap.sort((a, b) => a - b);
    }


    while (heap.length > 0) {
        result.push(heap.shift());
    }

    return result;
}


let arr = [6, 5, 3, 2, 8, 10, 9];
let k = 3;
console.log(sortNearlySortedArray(arr, k)); 


// sorting the array in an ascending order using the max heapify method

let arr = [13, 12, 6, 20, 5, 90];

const heapSort = (arr) => {
    const parentIndex = (i) => {
        return Math.floor((i - 1) / 2);
    }

    let index = parentIndex(arr.length - 1);
    
    for (let i = index; i >= 0; i--) {
        maxHeapify(i, arr, arr.length - 1);     // Building the maxheap
    }

    function maxHeapify(index, arr, n) {
        let leftIndex = 2 * index + 1;
        let rightIndex = 2 * index + 2;
        let endIndex = n;
        let indexToShift = index;

        // Check if left child exists and is greater than the current node
        if (leftIndex <= endIndex && arr[leftIndex] > arr[indexToShift]) {
            indexToShift = leftIndex;
        }

        // Check if right child exists and is greater than the current largest
        if (rightIndex <= endIndex && arr[rightIndex] > arr[indexToShift]) {
            indexToShift = rightIndex;
        }

        // If the largest is not the current node, swap and continue heapifying
        if (indexToShift !== index) {
            [arr[index], arr[indexToShift]] = [arr[indexToShift], arr[index]];

            // Recursive call for the affected subtree
            maxHeapify(indexToShift, arr, n);
        }
    }

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];    // Swap max element to the end
        maxHeapify(0, arr, i - 1);              // Heapify the root to restore heap property
    }
    return arr;
}

const res = heapSort(arr);

console.log(res);
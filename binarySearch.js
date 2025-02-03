
// implementing the binary search

let arr = [2, 3, 90, 99, 344];
let target = 344;

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        } else if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else if (target > arr[middleIndex]) {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, target));

// Given an sorted array of 'n' elements and a target element 't',
// if the target element is found in the array return its index else return -1
// implement this using the binary search

let arr = [-5, 2, 5, 4, 6, 10, 12];
let target = 10;

function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex < rightIndex) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 10));

// finding the first and the last position of element in an array

let array = [5, 7, 7, 8, 8, 10], target = 8

function searchRange(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let firstPos = -1;
    let lastPos = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            firstPos = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            lastPos = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [firstPos, lastPos];
}

console.log(searchRange(array,target));

// find the minimum element from an rotated sorted array

const array = [4, 5, 6, 7, 0, 1, 2];

function findMinimumInRotatedSortedArray(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] > array[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return array[left];
}

console.log(findMinimumInRotatedSortedArray(array));

// find the index of the target in the given array of strings using binary search and recursion
let arr = ['a','b','c','d'];
let target = 'd';
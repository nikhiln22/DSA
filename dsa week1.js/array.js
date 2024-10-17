// finding the sum of two numbers in an array resulting in the target
// let arr = [6, 2, 5, 7, 1, 9, 4, 0, 2];
// let target = 10;
// function result(nums, result) {
//     let pairs = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === result) {
//                 pairs.push(nums[i],nums[j])
//             }
//         }
//     }
//     return pairs
// }

// let findingPairs = result(arr,target);
// console.log('findingPairs:',findingPairs);


// moving the desired number to the end of the array
// function moveNumber(nums, number) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         if (nums[right] === number) {
//             right--;
//             continue;
//         }

//         if (nums[left] === number) {
//             [nums[left], nums[right]] = [nums[right], nums[left]];
//             right--;
//         }

//         left++;
//     }
//     console.log(nums);
// }

// let arr = [2, 5, 3, 5, 2, 5, 10];
// let num = 5;
// moveNumber(arr, num);

// finding the element with maximum occurance in an array
// let arr = ['orange', 'apple', 'guava', 'guava', 'litchi', 'banana'];

// let freq = arr.reduce((acc, curr) => {
//     if (acc[curr]) acc[curr]++;
//     else acc[curr] = 1;
//     return acc
// }, {});

// let maxValue = -Infinity;
// let maxKey = -Infinity;
// for (let elem in freq) {
//     if (freq[elem] > maxValue) {
//         maxValue = freq[elem];
//         maxKey = elem;
//     }
// }
// console.log('element with maximum occurance:', maxKey);


// checking whether all elements are unique
// let arr = [1, 2, 3, 4, 5];
// function isUnique(array){
//     for(let i=0;i<array.length-1;i++){
//         for(let j=i+1;j<array.length;j++){
//             if(array[i] === array[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(isUnique(arr));

// finding the first repeated elements
// let arr = [2, 4, 5, 6, 3, 2, 5, 7, 8];
// function firstRepeatedElement(array) {
//     let set = new Set();
//     for (let i = 0; i < array.length; i++) {
//         if (set.has(arr[i])) {
//             return arr[i]
//         } else {
//             set.add(arr[i]);
//         }
//     }
//     return null;
// }

// console.log(firstRepeatedElement(arr));

// finding the missing element from an range
// let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
// let n = 9;

// function missingElement(array, n) {
//     let expectedSum = n * (n + 1) / 2;
//     let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
//     return expectedSum - actualSum
// }

// console.log(missingElement(arr,n));


// Given a number 'n', find the first n elements of the fibonacci sequence?
// function fibonacci(n) {
//     let arr = [0, 1];
//     for (let i = 2; i < n; i++){
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     console.log(arr);
// }
// fibonacci(7)

// Given an number 'n', find the factorial of the that integer
// function findFactorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i
//     }
//     return result;
// }


// console.log(findFactorial(5));

// checking whether a number is prime or not
// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(7));

// another method for checking prime
// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(5));

// checking whether a number is power of two or not
// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2;
//     }
//     return true
// }


// console.log(isPowerOfTwo(10));


// inserting the same array elements again into the same array
// let arr = [1, 2, 3];
// function newArray(array) {
//     let double = new Array(array.length * 2);
//     let i = 0;
//     for (let j = 0; j < double.length; j++) {
//         double[j] = array[i];
//         i++;
//         if (i === array.length) {
//             i = 0;
//         }
//     }
//     return double;
// }

// console.log(newArray(arr));


// Given an sorted array of 'n' elements and a target element 't',
// if the target element is found in the array return its index else return -1
// implement this using the binary search

// let arr = [-5, 2, 5, 4, 6, 10, 12];
// let target = 10;

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex < rightIndex) {
//         middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }

//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(arr, 10));

// finding the first and the last position of element in an array

// array = [5, 7, 7, 8, 8, 10], target = 8

// function searchRange(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     let firstPos = -1;
//     let lastPos = -1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             firstPos = mid;
//             right = mid - 1;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     left = 0;
//     right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             lastPos = mid;
//             left = mid + 1;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return [firstPos, lastPos];
// }

// console.log(searchRange(array,target));

// find the second largest element from an array
// const array = [4, 5, 6, 7, 0, 1, 2];

// function findMinimumInRotatedSortedArray(array) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);

//         if (array[mid] > array[right]) {
//             left = mid + 1;
//         } else {
//             right = mid;
//         }
//     }

//     return array[left];
// }

// console.log(findMinimumInRotatedSortedArray(array));


// third maximum element from an array
// let arr = [2, 5, 3, 4, 10, 12, 34];

// function thirdMaximum(arr) {
//     let first = -Infinity;
//     let second = -Infinity;
//     let third = -Infinity;

//     for (let num of arr) {
//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second && num !== first) {
//             third = second;
//             second = num;
//         } else if (num > third && num !== second && num !== first) {
//             third = num;
//         }
//     }
//     return third === -Infinity ? null : third
// }

// console.log(thirdMaximum(arr));


// find the second largest even number in an array

// let arr = [2, 3, 4, 5, 4, 6, 10];

// function secondLargestEven(arr) {
//     let largestEven = -Infinity;
//     let secLargestEven = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             if (arr[i] > largestEven) {
//                 secLargestEven = largestEven;
//                 largestEven = arr[i];
//             } else if (arr[i] !== largestEven && arr[i] > secLargestEven) {
//                 secLargestEven = arr[i];
//             }
//         }
//     }
//     return secLargestEven;
// }

// console.log(secondLargestEven(arr));

// find the smallest and largest number in the array
// let arr = [15, 0, 2000, -1, 15];

// function findSmallestLargest() {
//     let smallest = Infinity;
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         } else if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return [smallest, largest];
// }

// console.log(findSmallestLargest(arr));

// finding the third largest number in the array
// let arr = [15, 20, 2, 56, 1, 8];

// let findLargestandSmallest = arr.reduce((acc, curr) => {
//         if (curr < acc.smallest) {
//             acc.smallest = curr;
//         } else if (curr > acc.largest) {
//             acc.largest = curr;
//         }
//     return acc;

// }, { smallest: Infinity, largest: -Infinity });

// console.log(findLargestandSmallest);


// function thirdLargestNumber(arr) {
//     let largest = -Infinity;
//     let secLargest = -Infinity;
//     let thirdLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             thirdLargest = secLargest;
//             secLargest = largest;
//             largest = arr[i];

//         } else if (arr[i] !== largest && arr[i] > secLargest) {
//             thirdLargest = secLargest;
//             secLargest = arr[i];
//         } else if (arr[i] !== largest && arr[i] !== secLargest && arr[i] > thirdLargest) {
//             thirdLargest = arr[i];
//         }
//     }
//     return thirdLargest;
// }

// console.log(thirdLargestNumber(arr));


// removing the duplicates from an array
// let arr = [2, 3, 4, 3, 5, 2, 7, 7, 1000];
// function removeDuplicates(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         for (j = i + 1; j < n; j++) {
//             if (arr[i] === arr[j]) {
//                 for (let k = j; k < n - 1; k++) {
//                     arr[k] = arr[k + 1];
//                 }
//                 n--;
//                 j--;
//             }
//         }
//     }
//     arr.length = n;
//     return arr;
// }

// console.log(removeDuplicates(arr));

// generate prime numbers in an array
// function generatePrime(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= 1) continue;
//         let count = 0;
//         for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//             if (arr[i] % j === 0) {
//                 count++;
//                 break;
//             }
//         }
//         if (count === 0) {
//             console.log(arr[i]);
//         }
//     }
// }


// generatePrime([1, 2, 3, 4, 5, 6])

// let arr = [25, 1, 3, 4, 5, 7];

// function secLargest(arr) {
//     let largest = -Infinity;
//     let secLargest = -Infinity;

//     for (let num of arr) {
//         if (num > largest) {
//             secLargest = largest;
//             largest = num;
//         } else if (num != largest && num > secLargest) {
//             secLargest = num;
//         }
//     }
//     return secLargest === -Infinity ? null : secLargest
// }

// console.log(secLargest(arr));



// implementing the binary search
// let arr = [2, 3, 90, 99, 344];
// let target = 344;

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         } else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         } else if (target > arr[middleIndex]) {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(arr, target));

// function to check whether an array is palindrome or not
// function isPalindrome(arr, start, end) {
//     while (start <= end) {
//         if (arr[start] !== arr[end]) {
//             return false
//         }
//         start++;
//         end--
//     }
//     return true;
// }

// console.log(isPalindrome([1, 2, 2, 1, 1], 0, [1, 2, 2, 1, 1].length - 1));


// reverse both the array elements and the digits within the elements

// let arr = [123, 456];

// function arrayReverse(arr) {
//     function reverseNum(num) {
//         let reversed = 0;
//         while (num > 0) {
//             reversed = reversed * 10 + (num % 10);
//             num = Math.floor(num / 10);
//         }
//         return reversed;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = reverseNum(arr[i]);
//     }

//     function reverseRecursively(arr, left = 0, right = arr.length - 1) {
//         if (left >= right) {
//             return arr;
//         }
//         [arr[left], arr[right]] = [arr[right], arr[left]];
//         return reverseRecursively(arr, left + 1, right - 1)
//     }

//     return reverseRecursively(arr);
// }

// console.log(arrayReverse(arr));


// finding the prime numbers from the below array

let array = [5, 6, 7, [7, [0, 6]], [9]];

function findPrime(arr) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            primes = primes.concat(findPrime(arr[i]));
        } else if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(findPrime(array));
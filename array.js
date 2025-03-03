// finding the sum of two numbers in an array resulting in the target

let arr = [6, 2, 5, 7, 1, 9, 4, 0, 2];
let target = 10;
function result(nums, result) {
    let pairs = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === result) {
                pairs.push(nums[i], nums[j])
            }
        }
    }
    return pairs
}

let findingPairs = result(arr, target);
console.log('findingPairs:', findingPairs);


// moving the desired number to the end of the array

function moveNumber(nums, number) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[right] === number) {
            right--;
            continue;
        }

        if (nums[left] === number) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        }

        left++;
    }
    console.log(nums);
}

let arr = [2, 5, 3, 5, 2, 5, 10];
let num = 5;
moveNumber(arr, num);

// finding the element with maximum occurance in an array

let arr = ['orange', 'apple', 'guava', 'guava', 'litchi', 'banana'];

let freq = arr.reduce((acc, curr) => {
    if (acc[curr]) acc[curr]++;
    else acc[curr] = 1;
    return acc
}, {});

let maxValue = -Infinity;
let maxKey = -Infinity;
for (let elem in freq) {
    if (freq[elem] > maxValue) {
        maxValue = freq[elem];
        maxKey = elem;
    }
}
console.log('element with maximum occurance:', maxKey);


// checking whether all elements are unique

let arr = [1, 2, 3, 4, 5];
function isUnique(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isUnique(arr));

// finding the first repeated elements

let arr = [2, 4, 5, 6, 3, 2, 5, 7, 8];
function firstRepeatedElement(array) {
    let set = new Set();
    for (let i = 0; i < array.length; i++) {
        if (set.has(arr[i])) {
            return arr[i]
        } else {
            set.add(arr[i]);
        }
    }
    return null;
}

console.log(firstRepeatedElement(arr));

// finding the missing element from an range

let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8];
let n = 9;

function missingElement(array, n) {
    let expectedSum = n * (n + 1) / 2;
    let actualSum = arr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum
}

console.log(missingElement(arr, n));


// Given a number 'n', find the first n elements of the fibonacci sequence?

function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);
}
fibonacci(7)

// Given an number 'n', find the factorial of the that integer

function findFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result;
}


console.log(findFactorial(5));

// checking whether a number is prime or not

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(7));

// another method for checking prime

function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(5));

// checking whether a number is power of two or not

function isPowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2;
    }
    return true
}


console.log(isPowerOfTwo(10));


// inserting the same array elements again into the same array

let arr = [1, 2, 3];
function newArray(array) {
    let double = new Array(array.length * 2);
    let i = 0;
    for (let j = 0; j < double.length; j++) {
        double[j] = array[i];
        i++;
        if (i === array.length) {
            i = 0;
        }
    }
    return double;
}

console.log(newArray(arr));


// Find the third maximum element from an array

let arr = [2, 5, 3, 4, 10, 12, 34];

function thirdMaximum(arr) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let num of arr) {
        if (num > first) {
            third = second;
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            third = second;
            second = num;
        } else if (num > third && num !== second && num !== first) {
            third = num;
        }
    }
    return third === -Infinity ? null : third
}

console.log(thirdMaximum(arr));


// find the second largest even number in an array

let arr = [2, 3, 4, 5, 4, 6, 10];

function secondLargestEven(arr) {
    let largestEven = -Infinity;
    let secLargestEven = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] > largestEven) {
                secLargestEven = largestEven;
                largestEven = arr[i];
            } else if (arr[i] !== largestEven && arr[i] > secLargestEven) {
                secLargestEven = arr[i];
            }
        }
    }
    return secLargestEven;
}

console.log(secondLargestEven(arr));

// find the smallest and largest number in the array

let arr = [15, 0, 2000, -1, 15];

function findSmallestLargest() {
    let smallest = Infinity;
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        } else if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return [smallest, largest];
}

console.log(findSmallestLargest(arr));


// removing the duplicates from an array

let arr = [2, 3, 4, 3, 5, 2, 7, 7, 1000];
function removeDuplicates(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (arr[i] === arr[j]) {
                for (let k = j; k < n - 1; k++) {
                    arr[k] = arr[k + 1];
                }
                n--;
                j--;
            }
        }
    }
    arr.length = n;
    return arr;
}

console.log(removeDuplicates(arr));

// generate prime numbers in an array

function generatePrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 1) continue;
        let count = 0;
        for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
            if (arr[i] % j === 0) {
                count++;
                break;
            }
        }
        if (count === 0) {
            console.log(arr[i]);
        }
    }
}

generatePrime([1, 2, 3, 4, 5, 6])


// function to check whether an array is palindrome or not

function isPalindrome(arr, start, end) {
    while (start <= end) {
        if (arr[start] !== arr[end]) {
            return false
        }
        start++;
        end--
    }
    return true;
}

console.log(isPalindrome([1, 2, 2, 1, 1], 0, [1, 2, 2, 1, 1].length - 1));


// reverse both the array elements and the digits within the elements

let arr = [123, 456];

function arrayReverse(arr) {
    function reverseNum(num) {
        let reversed = 0;
        while (num > 0) {
            reversed = reversed * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return reversed;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverseNum(arr[i]);
    }

    function reverseRecursively(arr, left = 0, right = arr.length - 1) {
        if (left >= right) {
            return arr;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
        return reverseRecursively(arr, left + 1, right - 1)
    }

    return reverseRecursively(arr);
}

console.log(arrayReverse(arr));


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

// delete the adjacent odd numbers occuring in the array

// output : [4,5,6,8,9,10]

let arr = [1, 3, 3, 4, 5, 6, 7, 7, 8, 9, 10];
let flag = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
        arr.splice(i, 1);
        i--;
        flag = true;
    } else if (flag) {
        arr.splice(i, 1);
        i--;
        flag = false;
    }
}

console.log(arr);


// reverse the array and also reverse the odd numbers in the array

let data = [1, 2, 3, 4, 5];

let reversedArray = data.reverse();

console.log("reversedArray:", reversedArray);

let oddNumbers = reversedArray.filter((val) => val % 2 !== 0).reverse();

console.log("oddNumbers:", oddNumbers);

let oddIndex = 0;

let output = reversedArray.map((val) => {
    if (val % 2 !== 0) {
        return oddNumbers[oddIndex++];
    }
    return val;
});

console.log(output);

// You are given an array of consecutive numbers:

const ab = [3, 4, 5, 6, 7, 8, 9, 10]

// Write a JavaScript program that generates an array of objects, where:

// - Each object contains key-value pairs in the format {a{index}: value}.

// - The keys start from a8 for the last element and decrease sequentially (a7, a6, etc.), 
// while the values correspond to the elements of the given array.

// - The first object contains only the last element, 
// and each subsequent object builds upon the previous one by adding the next element from the end.

// For example, the output should be:

// output = [
//     { a8: 10 },
//     { a8: 10, a7: 9 },
//     { a8: 10, a7: 9, a6: 8 },
//     { a8: 10, a7: 9, a6: 8, a5: 7 },
//     { a8: 10, a7: 9, a6: 8, a5: 7, a4: 6 },
//     { a8: 10, a7: 9, a6: 8, a5: 7, a4: 6, a3: 5 },
//     { a8: 10, a7: 9, a6: 8, a5: 7, a4: 6, a3: 5, a2: 4 },
//     { a8: 10, a7: 9, a6: 8, a5: 7, a4: 6, a3: 5, a2: 4, a1: 3 }
// ]


function convert(a) {
    let output = []
    let data = {}
    for (let i = a.length - 1; i >= 0; i--) {
        data[`a${i + 1}`] = a[i]

        output.push({ ...data })
    }
    return output
}

console.log(convert(ab))

// You are given an array of numbers:

const ab = [2, 4, 98, 3, -2];

// Write a JavaScript program that transforms this array into an array of objects, where:

// - Each object is built progressively from the smallest element to the largest (in order).
// - The keys in the objects follow the format el1, el2, el3, etc., representing their positions in the new sequence.
// - The values in the objects correspond to the elements of the sorted array in ascending order.

// The expected output should be:

// output = [
//     { el1: -2 },
//     { el1: -2, el2: 3 },
//     { el1: -2, el2: 3, el3: 98 },
//     { el1: -2, el2: 3, el3: 98, el4: 4 },
//     { el1: -2, el2: 3, el3: 98, el4: 4, el5: 2 }
// ]

const ab = [2, 4, 98, 3, -2];

let obj = {};
let output = [];

for (let i = 0; i < ab.length; i++) {
    obj[`el${i + 1}`] = ab[ab.length - i - 1];
    output.push({ ...obj })
}

console.log(output)


// - largest number from each subarray ?

let arr = [[2,3,1],[2,23,4,12],[12,4,12,3],[2,-4,12,42,14,2]]

// the expected output will be

// Number 1 from array 1: 2
// Number 2 from array 2: 23
// Number 3 from array 3: 12
// Number 4 from array 4: 42

// given an array ?

const b = [1,2,3,4,5,6,7,8,9,10];

// write a javascript program to print the numbers in the above array in the following pattern ?

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10


for(let i=0;i<b.length;i++){
    let row = '';
    for(let j=0;j<b[i];j++){
        row += b[j] + ' ';
    }
    console.log(row);
}


// recursive fibonacci series
// Given a number 'n' find the nth element of the fibonacci sequence

// function recursiveFibbonaci(n){
//     if(n<2) return n

//     return recursiveFibbonaci(n-1) + recursiveFibbonaci(n-2)
// }
// console.log(recursiveFibbonaci(3))

// generate the fibonacci series using recursion
// function fib(n) {
//     if (n < 2) return n
//     return fib(n - 1) + fib(n - 2);
// }

// function generate(num) {
//     for (let i = 0; i <= num; i++) {
//         console.log(fib(i));
//     }
// }

// generate(5);


// sum of array using recursion
// let arr = [1, 2, 3, 4, 5];

// function generateSum(arr, index) {
//     if (index === arr.length) {
//         return 0;
//     }

//     return arr[index] + generateSum(arr, index + 1);
// }

// console.log(generateSum(arr, 0));

// finding the factorial of an number using the recursion
// function findFactorial(n) {
//     if (n <= 1) return 1

//     return n * findFactorial(n - 1);
// }

// console.log(findFactorial(3));


// let str = 'nibinsha';
// let newString = '';
// let end = str.length - 1;

// function recursiveReverseString(str, end, newString) {
//     newString += str[end];
//     if (end === 0) {
//         return newString
//     }

//     return recursiveReverseString(str, end - 1, newString)
// }

// console.log(recursiveReverseString(str, end, newString));
// console.log(newString);

// checking whether a provided string is palindrome or not using recursion


// function isPalindrome(str) {
//     return isPalindromeHelper(str, 0, str.length - 1)
// }

// function isPalindromeHelper(str, start, end) {
//     if (start >= end) {
//         return true
//     }

//     if (str[start] !== str[end]) {
//         return false
//     }

//     return isPalindromeHelper(str, start + 1, end - 1)
// }

// console.log(isPalindrome('nikhil'));

// checking whether the password is correct or not
// let pass = 123
// function isCorrect(pass){
//     if(pass!==123){
//         console.log('password Incorrect.Please try again');
//     }
//     else{
//         console.log('password matches');
//     }
// }

// console.log(isCorrect(144));

// implementing the binary search using the recursion
// let arr = [1, 2, 3, 4, 5, 6, 23]; target = 15;

// function recursiveBinary(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }


// function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1;
//     }

//     let middleIndex = Math.floor((rightIndex + leftIndex) / 2);

//     if (target < arr[middleIndex]) {
//         return search(arr, target, leftIndex, middleIndex - 1)
//     } else {
//         return search(arr, target, middleIndex + 1, rightIndex);
//     }
// }

// console.log(recursiveBinary(arr, target));


// function arrReversal(arr) {
//     return arrreversalHelper(arr, 0, arr.length - 1)
// }

// function arrreversalHelper(arr, start, end) {
//     if (start >= end) {
//         return arr
//     }

//     [arr[start], arr[end]] = [arr[end], arr[start]];

//     return arrreversalHelper(arr, start + 1, end - 1)
// }

// console.log(arrReversal([1, 2, 3, 4, 5, 6,9]));


// function recursiveBinary(arr, target) {
//     return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, startIndex, lastIndex) {
//     if (startIndex > lastIndex) {
//         return -1;
//     }

//     let middleIndex = Math.floor((startIndex + lastIndex) / 2);

//     if (target === arr[middleIndex]) {
//         return middleIndex
//     }
//     if (target < arr[middleIndex]) {
//         return search(arr, target, startIndex, middleIndex - 1);
//     } else {
//         return search(arr, target, middleIndex + 1, lastIndex)
//     }
// }

// console.log(recursiveBinary([1, 2, 3, 4, 5], 5));

// let num = 123;
// console.log(Math.floor(num/10))


// finding whether elements in the array is odd or even

// function findOddOrEven(arr, index) {
//     if (index === arr.length) {
//         return arr;
//     }

//     arr[index] % 2 === 0 ? arr[index] = 'even' : arr[index] = 'odd';

//     return findOddOrEven(arr, index + 1)
// }

// console.log(findOddOrEven(arr, 0));

// checking array is palindrome or not;


// let arr = [1, 2, 3, 4, 3, 2, 1];

// function isPalindrome(arr) {
//     return isPalindromeHelper(arr, 0, arr.length - 1)
// }

// function isPalindromeHelper(arr, start, end) {
//     if (arr[start] != arr[end]) {
//         return false;
//     }

//     if (arr[start] >= arr[end]) return true;

//     return isPalindromeHelper(arr, start + 1, end - 1)
// }

// console.log(isPalindrome(arr));

// let arr = [1, 2, 3, 4, 5, 6];

// function arrayReverse(arr, start, end) {
//     if (start >= end) {
//         return arr;
//     }

//     [arr[start], arr[end]] = [arr[end], arr[start]];

//     return arrayReverse(arr, start + 1, end - 1);
// }


// console.log(arrayReverse(arr, 0, arr.length - 1));



// function stringReversal(str, end, newString) {
//     newString += str[end];

//     if (end === 0) {
//         return newString;
//     }

//     return stringReversal(str, end - 1, newString);
// }


// console.log(stringReversal('sanup', 'sanup'.length - 1, ''));


// Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position from each of them.

// let str = 'bangalore'

// let n = 4;

// console.log(str.slice(n));

// console.log(str.slice(0, n));

// function replace(str, n) {
//     n = n % str.length;
//     return str.slice(n) + str.slice(0, n);
// }

// console.log(replace(str, n));





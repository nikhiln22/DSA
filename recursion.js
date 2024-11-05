
// // Given a number 'n' find the nth element of the fibonacci sequence

function recursiveFibbonaci(n){
    if(n<2) return n

    return recursiveFibbonaci(n-1) + recursiveFibbonaci(n-2)
}
console.log(recursiveFibbonaci(3))


generate the fibonacci series using recursion
function fib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2);
}

function generate(num) {
    for (let i = 0; i <= num; i++) {
        console.log(fib(i)); 
    }   
}

generate(5);


// sum of fibonacci numbers

function fib(n) {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2);
}

function generate(num) {
    sum=0;
    for (let i = 0; i <= num; i++) {
        sum+=fib(i);
    }
    console.log(sum);
    
}

generate(30);

// find the sum of n fibonacci numbers (another method)

function fib(n) {
    if (n < 2) return n;
    
    let a = 0, b = 1, sum = 0;
    
    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    
    return b;
}

function generate(num) {
    let sum = 0;
    
    for (let i = 0; i <= num; i++) {
        sum += fib(i);  
    }
    
    console.log(sum);
}

generate(50);



//  sum of array values using recursion

let arr = [1, 2, 3, 4, 5];

function generateSum(arr, index) {
    if (index === arr.length) {
        return 0;
    }

    return arr[index] + generateSum(arr, index + 1);
}

console.log(generateSum(arr, 0));


// // finding the factorial of an number using the recursion

function findFactorial(n) {
    if (n <= 1) return 1

    return n * findFactorial(n - 1);
}

console.log(findFactorial(3));


// binary search implementation using the recursion

function recursiveBinary(arr, target) {
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, startIndex, lastIndex) {
    if (startIndex > lastIndex) {
        return -1;
    }

    let middleIndex = Math.floor((startIndex + lastIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, startIndex, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, lastIndex)
    }
}

console.log(recursiveBinary([1, 2, 3, 4, 5], 5));



// finding whether elements in the array is odd or even

function findOddOrEven(arr, index) {
    if (index === arr.length) {
        return arr;
    }

    arr[index] % 2 === 0 ? arr[index] = 'even' : arr[index] = 'odd';

    return findOddOrEven(arr, index + 1)
}

console.log(findOddOrEven(arr, 0));


// checking array is palindrome or not;

let arr = [1, 2, 3, 4, 3, 2, 1];

function isPalindrome(arr) {
    return isPalindromeHelper(arr, 0, arr.length - 1)
}

function isPalindromeHelper(arr, start, end) {
    if (arr[start] != arr[end]) {
        return false;
    }

    if (start >= end) return true;

    return isPalindromeHelper(arr, start + 1, end - 1)
}

console.log(isPalindrome(arr));


// reversing an array using the recursion

let arr = [1, 2, 3, 4, 5, 6];
function arrayReverse(arr, start, end) {
    if (start >= end) {
        return arr;
    }

    [arr[start], arr[end]] = [arr[end], arr[start]];

    return arrayReverse(arr, start + 1, end - 1);
}

console.log(arrayReverse(arr, 0, arr.length - 1));


//  reversing an string using the recursion

function stringReversal(str, end, newString) {
    newString += str[end];

    if (end === 0) {
        return newString;
    }

    return stringReversal(str, end - 1, newString);
}

console.log(stringReversal('sanup', 'sanup'.length - 1, ''));


// Deleting the character from the string using recursion

let str = 'nikhil';
let target = 'k';

function removeTarget(str, target) {
    return removeTargetHelper(str, target, 0, '');
}

function removeTargetHelper(str, target, index, newString) {

    if (index === str.length) {
        return newString;
    }

    if (str[index] !== target) {
        newString += str[index];
    }

    return removeTargetHelper(str, target, index + 1, newString);
}

console.log(removeTarget(str, target));

// checking whether the string is palindrome or not

function isPalindrome(str) {
    return isPalindromeHelper(str, 0, str.length - 1);
}

function isPalindromeHelper(str, start, end) {
    if (start >= end) return true;

    if (str[start] !== str[end]) return false;

    return isPalindromeHelper(str, start + 1, end - 1)
}

console.log(isPalindrome('mohan'));


// making the alternative alphabet uppercase in the string and then reverse the string using the recursion

let str = 'nikhil khanna';

function capitalizeAlternativeAndReverse(str, index, newString) {
    while (index < str.length) {
        if (index % 2 === 0) {
            newString += str[index].toUpperCase();
        } else {
            newString += str[index];
        }
        index++;
    }

    function reverseRecursive(newString){
        return reverseRecursiveHelper(newString, newString.length - 1, '');
    }

    function reverseRecursiveHelper(newString, end, reversed) {
        if (end < 0) {
            return reversed
        }

        reversed += newString[end];
        return reverseRecursiveHelper(newString, end - 1, reversed);
    }
    return reverseRecursive(newString);
}

console.log(capitalizeAlternativeAndReverse(str, 0, ''));


// printing prime numbers from an array using the recursion

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(n, divisor = 2) {
    if (n <= 1) return false;
    if (divisor > Math.sqrt(n)) return true;
    if (n % divisor === 0) return false;
    return isPrime(n, divisor + 1);
}

function printPrimesFromArray(arr, index = 0) {
    if (index >= arr.length) return;
    
    if (isPrime(arr[index])) {
        console.log(arr[index]);
    }
    
    printPrimesFromArray(arr, index + 1);
}


printPrimesFromArray(arr);


//  flatten the array using the recursion

let arr = [1, 2, ["hello", 3, [4, 5, "world", [7, {}],8],9], 10, {}];

function flattenArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); 
        } else {
            result.push(item); 
        }
    }
    
    return result;
}


let flattenedArray = flattenArray(arr);

console.log(flattenedArray);


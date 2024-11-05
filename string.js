// finding the length of the last word from an array

let string = 'My name is nikhil';

function lastWordLength(str){
    let stringArray = str.split(' ');
    return stringArray[stringArray.length-1].length
}

console.log(lastWordLength(string));


// checking whether a string contains all the alphabet

let string = "The quick brown fox jumps over the lazy dog";
function containsAllAlphabet(str) {
    let filtered = str.toLowerCase().replace(/[^a-z]/g, '');

    let uniqueChars = new Set(filtered);

    return uniqueChars.size === 26;
}
console.log(containsAllAlphabet(string));


// Write a function to replace each alphabet in the given string with another alphabet occurring at the n-th position 
// from each of them.

let str = 'bangalore'

let n = 4;

console.log(str.slice(n));

console.log(str.slice(0, n));

function replace(str, n) {
    n = n % str.length;
    return str.slice(n) + str.slice(0, n);
}

console.log(replace(str, n));

// checking a string is substring or not

let str1 = 'goodmorning';
let str2 = 'omg';

function subString(str1, str2) {
    let j = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[j]) {
            j++;
        }
    }
    return j === str2.length;
}

console.log(subString(str1, str2));

// checking the substring is in the series

let str1 = 'goodmorning';
let str2 = 'ood';

function isSeries(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let isMatch = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) return true
    }
    return false;
}

console.log(isSeries(str1, str2));

// reversing an provided string

function stringReversal(str, start, end, newString) {
    while (end >= start) {
        newString += str[end];
        end--;
    }
    return newString;
}

console.log(stringReversal('nikhil', 0, 'nikhil'.length - 1, ''));

// reversing an string (another method)

let string = "The quick brown fox jumps over the lazy dog";
function reverseString(str){
    let stringArray = str.split(' ');
    let start = 0;
    let end = stringArray.length-1;

    while(start<end){
        [stringArray[start],stringArray[end]] = [stringArray[end],stringArray[start]];
        start++;
        end--;
    }
    console.log(stringArray.join(' '));
}

reverseString(string);

// checking whether an string is palindrome or not

function isPalindrome(str, start, end) {
    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome('bahubai', 0, 'malayalam'.length - 1));




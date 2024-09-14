// finding the length of the last word from an array

// let string = 'My name is nikhil';

// function lastWordLength(str){
//     let stringArray = str.split(' ');
//     return stringArray[stringArray.length-1].length
// }

// console.log(lastWordLength(string));


// checking whether a string contains all the alphabet
// let string = "The quick brown fox jumps over the lazy dog";
// function containsAllAlphabet(str) {
//     let filtered = str.toLowerCase().replace(/[^a-z]/g, '');

//     let uniqueChars = new Set(filtered);

//     return uniqueChars.size === 26;
// }
// console.log(containsAllAlphabet(string));

// reversing an string...
// let string = "The quick brown fox jumps over the lazy dog";
// function reverseString(str){
//     let stringArray = str.split(' ');
//     let start = 0;
//     let end = stringArray.length-1;

//     while(start<end){
//         [stringArray[start],stringArray[end]] = [stringArray[end],stringArray[start]];
//         start++;
//         end--;
//     }
//     console.log(stringArray.join(' '));
// }

// reverseString(string);


// checking whether an string is substring or not

// function isSubstring(mainString, subString) {
//     if (mainString.length < subString.length) return false

//     if (subString.length === 0) return true

//     for (let i = 0; i <= mainString.length - subString.length; i++) {
//         let match = true;
//         for (let j = 0; j < subString.length; j++) {
//             if (mainString[i + j] !== subString[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if(match) return true
//     }
//     return false;
// }

// console.log(isSubstring('Hello World!','World'))


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
// implementing the hashtable

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}


// handling the collisions within the hash table

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// count the frequency of the elements in an array

const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function countFrequencies(arr) {
    const hashTable = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (hashTable[element]) {
            hashTable[element] += 1;  
        } else {
            hashTable[element] = 1;  
        }
    }

    return hashTable;
}

console.log(countFrequencies(numbers));

// Write a JavaScript function that checks if two strings are anagrams of each other using hashtable

let string1 = 'listen';
let string2 = 'silent';

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let hashTable = {};

    for (let char of str1) {
        hashTable[char] = (hashTable[char] || 0) + 1;
    }

   
    for (let char of str2) {
        if (!hashTable[char]) {
            return false; 
        }
        hashTable[char]--;
    }

    return true;
}

console.log(areAnagrams(string1,string2));

// find all the non - repeating characters in the string using the hash table

let string = 'racecar'

function firstNonRepeatingChar(str) {
    const hashTable = {};

    
    for (let char of str) {
        hashTable[char] = (hashTable[char] || 0) + 1;
    }

  
    for (let char of str) {
        if (hashTable[char] === 1) {
            return char;
        }
    }

    return null; 
}

console.log(firstNonRepeatingChar(string));

// find the first repeating character in an string using the hash table

let str = "swiss";

function repeating(str){
    let hashTable = {};
    for(let char of str){
        if(hashTable[char]){
            return char;
        }else{
            hashTable[char] = true;
            console.log("hashTable:",hashTable)
        }
    }
    return null
}


console.log(repeating(str))

// remove the vowels from an string using the hashtable

let str = "today is my review";

function removeVowels(str){
    let vowels = {"a":true,"e":true,"i":true,"o":true,"u":true};
    let result = "";
    
    for(let char of str){
        if(!vowels[char]){
            result+=char;
        }
    }
    
    return result
}

console.log(removeVowels(str))

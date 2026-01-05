// insert and search a word in the trie

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode();
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    if (typeof word !== "string") return false;

    if (word.length === 0) return false;

    let currentNode = this.root;
    for (let char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return currentNode.isEndOfWord;
  }
}

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));
console.log(trie.search("app"));
trie.insert("app");
console.log(trie.search("app"));

// Given an m x n board of characters and a list of words, find all the words that exist in the grid.
// Words can be constructed from letters of sequentially adjacent cells.

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
}

function findWords(board, words) {
  const result = [];
  const trie = new Trie();

  for (let word of words) {
    trie.insert(word);
  }

  const rows = board.length;
  const cols = board[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  function dfs(node, x, y, currentWord) {
    if (node.isEndOfWord) {
      result.push(currentWord);
      node.isEndOfWord = false;
    }

    if (
      x < 0 ||
      y < 0 ||
      x >= rows ||
      y >= cols ||
      visited[x][y] ||
      !node.children[board[x][y]]
    ) {
      return;
    }

    visited[x][y] = true;
    const nextNode = node.children[board[x][y]];

    dfs(nextNode, x + 1, y, currentWord + board[x][y]);
    dfs(nextNode, x - 1, y, currentWord + board[x][y]);
    dfs(nextNode, x, y + 1, currentWord + board[x][y]);
    dfs(nextNode, x, y - 1, currentWord + board[x][y]);

    visited[x][y] = false;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (trie.root.children[board[i][j]]) {
        dfs(trie.root, i, j, "");
      }
    }
  }

  return result;
}

let board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
let words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words));

// Write a function startsWith(prefix) that checks if any word in the Trie starts with the given prefix.
//  Return true if the prefix exists, otherwise return false.

class TrieNode{
    constructor(){
        this.children = {};
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    
    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char];
        }
        curr.isEnd = true;
    }
        
    startsWith(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]) return false
            curr = curr.children[char]
        }
        return true
    }
}

const trie = new Trie();

trie.insert("Apple");
trie.insert("Apricot")
trie.insert("Ant");

console.log(trie.startsWith("App"));

// Given a prefix, return all words in the Trie that start with the given prefix.(auto-completion)

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  searchPrefix(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this.getAllWords(node, prefix);
  }

  getAllWords(node, prefix) {
    let result = [];
    if (node.isEndOfWord) {
      result.push(prefix);
    }

    for (let char in node.children) {
      result = result.concat(
        this.getAllWords(node.children[char], prefix + char)
      );
    }

    return result;
  }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");

console.log(trie.searchPrefix("app")); 
console.log(trie.searchPrefix("apr")); 
console.log(trie.searchPrefix("ban"));

// find the longest common prefix from an trie

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = false;
  }

  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char];
    }
    return curr.isEnd;
  }

  longestPrefix() {
    let curr = this.root;
    let prefix = "";

    while (true) {
      const childrenKeys = Object.keys(curr.children);

      if (childrenKeys.length !== 1 || curr.isEnd) {
        break;
      }

      const char = childrenKeys[0];
      prefix += char;
      curr = curr.children[char];
    }
    if (prefix === "") {
      return "No common Prefix found";
    } else {
      return prefix;
    }
  }
}

const trie = new Trie();

trie.insert("flower");
trie.insert("floor");

console.log(trie.longestPrefix());


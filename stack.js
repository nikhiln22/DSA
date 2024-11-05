
// linked list with a tail

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    removeFromFront() {
        if (this.head === null) {
            return null;
        }
        this.head = this.head.next;
    }

    removeFromEnd() {
        if (this.head === null) {
            return null;
        } else {
            let curr = this.head;
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
        }
    }

    print() {
        if (this.head === null) {
            console.log('list is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} <==> `;
                curr = curr.next;
            }
            listValues += 'null';
            console.log('listValues:', listValues);
        }
    }
}


// implementing the stack using the linkedlist

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let value = this.top.value;
            this.top = this.top.next;
            return value;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.top.value;
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let stack = '';
            let curr = this.top;
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log(stack.peek());



// implementing the stack using the array

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items[this.items.length] = value;
    }

    pop() {
        let value = this.items[this.items.length - 1];
        this.items.length -= 1;
        return value;
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    print() {
        if (this.items.length === 0) {
            console.log('stack is empty');
        } else {
            let stack = '';
            for (let i = this.items.length - 1; i >= 0; i--) {
                stack += this.items[i] + ' ';
            }
            console.log('stack:', stack);
        }
    }
}

const stack = new Stack();


stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

stack.print();

console.log(stack.peek());


// finding a third minimum value from the stack;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    findThirdMinimum() {
        let first = Infinity;
        let second = Infinity;
        let third = Infinity;

        let curr = this.top;
        while (curr) {
            if (curr.value < first) {
                third = second;
                second = first;
                first = curr.value;
            } else if (curr.value < second && curr.value != first) {
                third = second;
                second = curr.value;
            } else if (curr.value < third && curr.value != first && curr.value != second) {
                third = curr.value;
            }
            curr = curr.next;
        }
        return third === Infinity ? null : third
    }

    print() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let curr = this.top;
            let stack = '';
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}

// finding the third maximum value from the stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    findThirdMaximum() {
        let firstMaximum = -Infinity;
        let Secondmaximum = -Infinity;
        let thirdMaximum = -Infinity;

        let curr = this.top;
        while (curr) {
            if (curr.value > firstMaximum) {
                thirdMaximum = Secondmaximum;
                Secondmaximum = firstMaximum;
                firstMaximum = curr.value
            } else if (curr.value != firstMaximum && curr.value > Secondmaximum) {
                thirdMaximum = Secondmaximum
                Secondmaximum = curr.value;
            } else if (curr.value != firstMaximum && curr.value != Secondmaximum && curr.value > thirdMaximum) {
                thirdMaximum = curr.value;
            }
            curr = curr.next;
        }
        return thirdMaximum === Infinity ? null : thirdMaximum;
    }

    print() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let stack = '';
            let curr = this.top;
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.print();

console.log(stack.findThirdMaximum());

// reversing the stack using normal method

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    reverse() {
        let curr = this.top;
        let next = null;
        let prev = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.top = prev;
    }


    print() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let stack = '';
            let curr = this.top;
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}

// stack reversing using the recursion

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top === null;
    }

    push(value) {
        let node = new Node(value);
        node.next = this.top;
        this.top = node;
    }

    reverseRecursively(){
        this.top = this.reverseRecursivelyHelper(this.top);
    }

    reverseRecursivelyHelper(top){
        if(top.next === null){
            return top;
        }

        let newTop = this.reverseRecursivelyHelper(top.next);
        top.next.next = top;
        top.next = null;
        return newTop;
    }


    print() {
        if (this.isEmpty()) {
            console.log('stack is empty');
        } else {
            let stack = '';
            let curr = this.top;
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}


// implementing the prioriy stack in the ascending order 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        if (this.top === null || value < this.top.value) {
            node.next = this.top;
            this.top = node;
        } else {
            let curr = this.top;
            while (curr.next !== null && value >= curr.next.value) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }
    }

    print() {
        if (this.top === null) {
            console.log('stack is empty');
        } else {
            let curr = this.top;
            let stack = '';
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:',stack);
        }
    }
}

let stack = new Stack()

stack.push(150);
stack.push(20);
stack.push(303);
stack.push(23);

stack.print()

// implementing the priority stack in descending order

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let node = new Node(value);
        if (this.top === null || value > this.top.value) {
            node.next = this.top;
            this.top = node;
        } else {
            let curr = this.top;
            while (curr.next !== null && value <= curr.next.value) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }
    }

    pop() {
        let value = this.top.value;
        this.top = this.top.next;
        return value
    }

    print() {
        if (this.top === null) {
            console.log('stack is empty');
        } else {
            let stack = '';
            let curr = this.top;
            while (curr) {
                stack += `${curr.value} `;
                curr = curr.next;
            }
            console.log('stack:', stack);
        }
    }
}

let stack = new Stack();

stack.push(3);
stack.push(3000);
stack.push(1);
stack.push(5600);

stack.print();

console.log(stack.pop());

stack.print()


// reverse an string using an stack

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

  
    pop() {
        return this.items.pop();
    }

  
    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    const stack = new Stack();

   
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = '';
   
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}


console.log(reverseString('world')); 


// check for the balanced paranthasis using the stack data structure

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isBalanced(str) {
    const stack = new Stack();
    const openBrackets = ['(', '{', '['];
    const closeBrackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char); 
        } else if (closeBrackets[char]) {
            if (stack.isEmpty() || stack.pop() !== closeBrackets[char]) {
                return false; 
            }
        }
    }

    return stack.isEmpty(); 
}


console.log(isBalanced('({[]})')); 

// implement the browser forward and backward functionality using the two stacks

class BrowserNavigation {
    constructor() {
        this.backStack = [];
        this.forwardStack = [];
        this.currentPage = null;
    }

    visit(page) {
        if (this.currentPage) {
            this.backStack.push(this.currentPage); 
        }
        this.currentPage = page;
        this.forwardStack = [];
        console.log(`Visiting: ${page}`);
    }

    back() {
        if (this.backStack.length === 0) {
            console.log('No pages to go back to.');
            return;
        }
        this.forwardStack.push(this.currentPage); 
        this.currentPage = this.backStack.pop();  
        console.log(`Going back to: ${this.currentPage}`);
    }

    forward() {
        if (this.forwardStack.length === 0) {
            console.log('No pages to go forward to.');
            return;
        }
        this.backStack.push(this.currentPage); 
        this.currentPage = this.forwardStack.pop(); 
        console.log(`Going forward to: ${this.currentPage}`);
    }

    getCurrentPage() {
        return this.currentPage;
    }
}


const browser = new BrowserNavigation();

browser.visit('google.com');
browser.visit('youtube.com');
browser.visit('github.com');
browser.back();  
browser.back();  
browser.forward(); 
browser.visit('stackoverflow.com'); 
browser.back();  




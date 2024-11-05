
// imoplementing the doubly linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // adding node at the end of the list
    append(value) {
        let node = new Node(value);
        if (this.head === null) {
            // if the list is empty both the tail and the head point to the new node
            this.head = node;
            this.tail = node;
        } else {
            // update the next pointer of the current tail and set the new node as the tail
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    // adding a new node at the begining of the list
    prepend(value) {
        let node = new Node(value);
        if (this.head === null) {
        // if the list is empty both the tail and the head point to the new node
        this.head = node;
        this.tail = node;
        } else {
        // update the next pointer of the current tail and set the new node as the tail
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        }
    }

    // printing the list from the head to the tail
    print() {
        if (this.head === null) {
            console.log('list is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} <=> `;
                curr = curr.next;
            }
            listValues += 'null';
            console.log('listValues:', listValues);
        }
    }
}

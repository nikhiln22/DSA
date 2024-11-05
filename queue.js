class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null; // pointer to the front of the queue (front of the queue)
        this.rear = null;  // pointer to the end of the queue (end of the queue)
        this.size = 0;     // Track the size of the queue
    }

    // Enqueue : adding element to the end of the queue
    enqueue(value) {
        let node = new Node(value);
        if (this.rear === null) { //if the queue is empty both the front and the rear node points to the new node
            this.front = node;
            this.rear = node;
        } else {                  //add the new node at the rear end
            this.rear.next = node;
            this.rear = node;
        }
        this.size++;
    }

    // Dequeue : removing the element from the front of the queue
    dequeue() {
        if (this.front === null) {     // if the queue is empty
            console.log('queue is empty');
        } else {
            const value = this.front.value;
            this.front = this.front.next;
            return value;
        }
        this.size--;
    }

    // accessing the first element
    frontElement() {
        if (this.front === null) {
            console.log('queue is empty');
        }
        return this.front.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        let curr = this.front;
        let queue = '';
        while (curr != null) {
            queue += `${curr.value} `;
            curr = curr.next;
        }
        console.log('queue:', queue);
    }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);

queue.print();

queue.dequeue();

queue.print();
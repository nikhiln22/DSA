
// building the max heap

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(index) {
        let currentValue = this.heap[index];
        let parentIndex = Math.floor((index - 1) / 2);
        let parentValue = this.heap[parentIndex];
        if (index > 0 && currentValue > parentValue) {
            this.heap[index] = parentValue;
            this.heap[parentIndex] = currentValue;
            this.shiftUp(parentIndex);
        }
    }

    getParent(value) {
        let index = this.heap.indexOf(value);
        let parentIndex = Math.floor((index - 1) / 2);
        return this.heap[parentIndex];
    }

    getRightChild(value) {
        let index = this.heap.indexOf(value);
        let rightChildIndex = 2 * index + 2;
        return this.heap[rightChildIndex];
    }

    getLeftChild(value) {
        let index = this.heap.indexOf(value);
        let leftChildIndex = 2 * index + 1;
        return this.heap[leftChildIndex];
    }

    printHeap(){
        console.log('Current Heap:',this.heap);
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(8);
maxHeap.insert(90);
maxHeap.insert(2);
maxHeap.insert(1);
maxHeap.insert(9);

maxHeap.printHeap();




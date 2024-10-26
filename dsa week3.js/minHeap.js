
class MinHeap {
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
        if (index > 0 && currentValue < parentValue) {
            this.heap[index] = parentValue;
            this.heap[parentIndex] = currentValue;
            this.shiftUp(parentIndex);
        }
    }

    // print() {
    //     console.log('currentHeap:', this.heap);
    // }
}

const minHeap = new MinHeap();

minHeap.insert(1);
minHeap.insert(-1);
minHeap.insert(3);
minHeap.insert(-93);

console.log(minHeap.heap);
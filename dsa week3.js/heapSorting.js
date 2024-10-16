
// sorting an array in the ascending order using the heap sort

// function heapify(arr, n, i) {
//     let largest = i; 
//     let left = 2 * i + 1; 
//     let right = 2 * i + 2; 

    
//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

    
//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

   
//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]]; 

        
//         heapify(arr, n, largest);
//     }
// }

// function heapSort(arr) {
//     let n = arr.length;

    
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

  
//     for (let i = n - 1; i >= 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];

        
//         heapify(arr, i, 0);
//     }
// }


// let arr = [12, 11, 13, 5, 6, 7];
// heapSort(arr);
// console.log(arr); 

// finding the kth largest element using the heap sort

// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// function heapSort(arr) {
//     let n = arr.length;

//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
// }

// function findKthLargest(arr, k) {
//     heapSort(arr);
//     return arr[arr.length - k];
// }


// let arr = [3, 2, 1, 5, 6, 4];
// let k = 2;
// console.log(findKthLargest(arr, k)); 


// sorting an almost sorted array using the heap sort

// function sortNearlySortedArray(arr, k) {
//     const heap = [];
//     const result = [];

//     for (let i = 0; i <= k; i++) {
//         heap.push(arr[i]);
//     }
//     heap.sort((a, b) => a - b);

//     for (let i = k + 1; i < arr.length; i++) {
//         result.push(heap.shift());
//         heap.push(arr[i]);
//         heap.sort((a, b) => a - b);
//     }

  
//     while (heap.length > 0) {
//         result.push(heap.shift());
//     }

//     return result;
// }


// let arr = [6, 5, 3, 2, 8, 10, 9];
// let k = 3;
// console.log(sortNearlySortedArray(arr, k)); 


// implementing the min heap

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

   
//     parentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

  
//     leftChildIndex(index) {
//         return 2 * index + 1;
//     }

   
//     rightChildIndex(index) {
//         return 2 * index + 2;
//     }

   
//     insert(value) {
//         this.heap.push(value);
//         this.bubbleUp();
//     }

   
//     bubbleUp() {
//         let index = this.heap.length - 1;

//         while (index > 0) {
//             const parentIdx = this.parentIndex(index);
//             if (this.heap[index] < this.heap[parentIdx]) {
                
//                 [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
//                 index = parentIdx;
//             } else {
//                 break;
//             }
//         }
//     }

   
//     extractMin() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();

//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop(); 
//         this.bubbleDown();
//         return min;
//     }

   
//     bubbleDown() {
//         let index = 0;

//         while (this.leftChildIndex(index) < this.heap.length) {
//             let smallerChildIndex = this.leftChildIndex(index);
//             const rightChildIdx = this.rightChildIndex(index);

            
//             if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[smallerChildIndex]) {// Output: 3
//                 smallerChildIndex = rightChildIdx;
//             }

//             if (this.heap[index] <= this.heap[smallerChildIndex]) break;

//             [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
//             index = smallerChildIndex;
//         }
//     }

//     peek() {
//         return this.heap.length > 0 ? this.heap[0] : null;
//     }

//     size() {
//         return this.heap.length;
//     }
// }

// const minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(5);
// minHeap.insert(15);
// minHeap.insert(3);

// console.log(minHeap.peek());        
// console.log(minHeap.extractMin());   
// console.log(minHeap.peek());        
// console.log(minHeap.size());         

// implementing the max heap

class MaxHeap {
    constructor() {
        this.heap = [];
    }

  
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

   
    leftChildIndex(index) {
        return 2 * index + 1;
    }

    
    rightChildIndex(index) {
        return 2 * index + 2;
    }

   
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

  
    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIdx = this.parentIndex(index);
            if (this.heap[index] > this.heap[parentIdx]) {
              
                [this.heap[index], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[index]];
                index = parentIdx;
            } else {
                break;
            }
        }
    }

   
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop(); 
        this.bubbleDown();
        return max;
    }

   
    bubbleDown() {
        let index = 0;

        while (this.leftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.leftChildIndex(index);
            const rightChildIdx = this.rightChildIndex(index);

           
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[largerChildIndex]) {
                largerChildIndex = rightChildIdx;
            }

           
            if (this.heap[index] >= this.heap[largerChildIndex]) break;

           
            [this.heap[index], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[index]];
            index = largerChildIndex;
        }
    }

   
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }


    size() {
        return this.heap.length;
    }
}


const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);

console.log(maxHeap.peek());        
console.log(maxHeap.extractMax());  
console.log(maxHeap.peek());        
console.log(maxHeap.size());        


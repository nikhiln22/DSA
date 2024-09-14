// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     prepend(value) {
//         let node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

//     append(value) {
//         let node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             let temp = this.head;
//             while (temp.next) {
//                 temp = temp.next;
//             }
//             temp.next = node;
//         }
//         this.size++;
//     }

//     insert(value, index) {
//         let node = new Node(value);
//         if (index < 0 || index > this.size) {
//             return
//         } else if (index === 0) {
//             this.prepend(value)
//         } else {
//             let temp = this.head;
//             for (let i = 0; i < index - 1; i++) {
//                 temp = temp.next;
//             }
//             node.next = temp.next;
//             temp.next = node;
//         }
//     }

//     removeFirst() {
//         this.head = this.head.next;
//     }

//     removeLast() {
//         let temp = this.head;
//         while (temp.next.next) {
//             temp = temp.next;
//         }
//         temp.next = null;
//     }

//     removevalue(value) {
//         let temp = this.head;
//         if (temp.value === value) {
//             this.head = temp.next;
//             return;
//         } else {
//             while (temp.next) {
//                 if (temp.next.value === value) {
//                     temp.next = temp.next.next;
//                     break;
//                 } else {
//                     temp = temp.next;
//                 }
//             }
//         }
//     }

//     removeMiddleNode() {
//         if (this.isEmpty()) {
//             console.log('list is too short to remove the last node');
//         }

//         let fast = this.node;
//         let slow = this.node;
//         let prev = null;

//         while (fast.next) {
//             fast = fast.next.next;
//             prev = slow;
//             slow = slow.next;
//         }
//         prev.next = slow.next;
//     }


//     search(value) {
//         let temp = this.head;
//         while (temp) {
//             if (temp.value === value) {
//                 return true;
//             } else {
//                 temp = temp.next;
//             }
//         }
//         return false;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty');
//         } else {
//             let temp = this.head;
//             let listvalues = '';
//             while (temp) {
//                 listvalues += `${temp.value}->`;
//                 temp = temp.next;
//             }
//             listvalues += 'null';
//             console.log('listvalues:', listvalues);
//         }

//     }
// }


// let list = new LinkedList();

// console.log('list:', list);

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.append(0);
// list.append(100);
// list.append(200);
// list.append(300);
// list.append(400);
// list.append(500);
// list.print()

// list.insert(1574, 3);
// list.print()

// list.removeLast();
// list.print();

// list.removeFirst();
// list.print()

// list.removevalue(40);
// list.print();

// list.removevalue(1574);
// list.print();

// console.log(list.search(1574));



// converting an array to an linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    arrayToLinkedList(arr) {
        if (arr.length === 0) {
            return null
        }

        this.head = new Node(arr[0]);
        let curr = this.head;
        for (let i = 1; i < arr.length; i++) {
            curr.next = new Node(arr[i]);
            curr = curr.next;
        }
        return curr;
    }

    print() {
        if (this.head === 0) {
            console.log('list is empty');
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} => `;
                curr = curr.next;
            }
            listValues += 'null';
            console.log('listValues:', listValues);
        }
    }
}

let list = new LinkedList();

list.arrayToLinkedList([10, 20, 30, 40, 50]);

list.print()



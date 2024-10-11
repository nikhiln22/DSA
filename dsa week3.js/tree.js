
//  implementation of the binary search tree

class Node {                     // implementing a class node
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {         // implementing a Binary search tree class
    constructor() {
        this.root = null;
    }

    isEmpty() {                  // method to check whether the bst is empty or not
        return this.root === null
    }

    insert(value) {              // inserting an new node to the BST , if the bst is empty the new node added will be made as an root node
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {         // method to check where the newnode should be inserted either as the leftchild or as the rightside
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {               // method to check whether the value is there or not in the bst
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {    // preorder traversal in the depth first traversal
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {     //  inorder traversal in the depth first traversal
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {   //  postorder traversal in the depth first traversal
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {       //  breadth first search traversal using Queue Data Structure
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {            // finding the min value from the tree
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left);
        }
    }

    max(root) {              // finding the max value from the tree
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {          // deleting a node from the bst
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
}


const bst = new BinarySearchTree();

// console.log('Tree is empty?', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));

// bst.preOrder(bst.root);

// bst.inOrder(bst.root);

// bst.postOrder(bst.root);

bst.levelOrder();

// console.log(bst.min(bst.root));

// console.log(bst.max(bst.root));

bst.delete(10);

bst.levelOrder();











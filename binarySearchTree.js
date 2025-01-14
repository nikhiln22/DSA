
//   implementation of the binary search tree

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

 max(root) {                     // finding the max value from the tree
    if (!root.right) {
        return root.value;
    } else {
        return this.max(root.right);
    }
}

 delete(value) {            // deleting a node from the bst
    this.root = this.deleteNode(this.root, value);
}

 deleteNode(root, value) {   // helper function for deleting the node from the bst
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

 height(root) {           // finding the height of the tree
    if (!root) {
        return 0;
    } else {
        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

 isBst(root, min, max) {    // validating whether it is an binary search tree
    if (!root) {
        return true;
    }
    if (root.value < min || root.value > max) {
        return false;
    }
    return (
        this.isBst(root.left, min, root.value) &&
        this.isBst(root.right, root.value, max)
    );
}

 printLeafNodes(root) {   // displaying the leaf nodes in an binary search tree
    if (root === null) {
        return;
    }
    if (root.left === null && root.right === null) {
        console.log(root.value);
        return;
    }

    if (root.left !== null) {
        this.printLeafNodes(root.left);
    }
    if (root.right !== null) {
        this.printLeafNodes(root.right);
    }
}

 removeDuplicates() {                         // remove duplicates from an binary search tree
    this.removeDuplicatesHelper(this.root, new Set());
}

 removeDuplicatesHelper(root, valueSet) {      // helper function for removing the duplicates from the binary search tree
        if (root === null) return;

        if (valueSet.has(root.value)) {
            this.delete(root.value);
        } else {
            valueSet.add(root.value);
        }

        this.removeDuplicatesHelper(root.left, valueSet);
        this.removeDuplicatesHelper(root.right, valueSet);
    }
}


const bst = new BinarySearchTree();

console.log('Tree is empty?', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(100);
bst.insert(12);
bst.insert(78);
bst.insert(88);
bst.insert(9);

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 5));
console.log(bst.search(bst.root, 15));

bst.preOrder(bst.root);

bst.inOrder(bst.root);

bst.postOrder(bst.root);

bst.levelOrder();

console.log(bst.min(bst.root));

console.log(bst.max(bst.root));

bst.delete(10);

bst.levelOrder();

console.log(bst.height(bst.root));

console.log(bst.isBst(bst.root));


bst.printLeafNodes(bst.root);

// finding a closest value in an binary search tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    findClosestValue(target) {
        return this.findClosest(this.root, target, this.root.value);
    }

    findClosest(node, target, closest) {
        if (node === null) {
            return closest;
        }
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value;
        }

        if (target < node.value) {
            return this.findClosest(node.left, target, closest);
        } else if (target > node.value) {
            return this.findClosest(node.right, target, closest);
        } else {
            return closest;
        }
    }
}


let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.findClosestValue(6)); 

// validating an binary search tree

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    isValidBST() {
        return this.validate(this.root, null, null);
    }

    validate(node, min, max) {
        if (node === null) {
            return true;
        }


        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }


        return this.validate(node.left, min, node.value) && this.validate(node.right, node.value, max);
    }
}


let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(18);

console.log(bst.isValidBST()); 

// finding the second largest node in the BST

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root === null) {
            this.root = node;
        }
            this.insertNode(this.root, node);
        }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    findSecondLargest() {
        if (this.root === null || (this.root.left === null && this.root.right === null)) {
            console.log('tree must have at least two nodes');
        }

        let curr = this.root;
        while (curr) {
            if (curr.right === null && curr.left !== null) {
                return this.max(curr.left).value;
            }

            if (curr.right !== null && curr.right.left === null && curr.right.right === null) {
                return curr.value;
            }
            curr = curr.right;
        }
    }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);
bst.insert(20);

console.log(bst.findSecondLargest()); 

// finding the minimum depth from an binary search tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function minDepth(root) {

    // if the tree is empty its depth will be zero
    if (!root) return 0;

    // if there is no right subtree, recurse only on the left sub tree;
    if (!root.right) return 1 + minDepth(root.left);

    // if there is no left subtree, recurse only on the right sub tree;
    if (!root.left) return 1 + minDepth(root.right);

    // if both subtrees exist, recurse on the both and take the minimum depth
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}


const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(20);


console.log('minimum depth of the BST is:',minDepth(root));

// count how many number of left nodes are there in the binary search tree ?

// count how many number of right nodes are there in the binary search tree ?
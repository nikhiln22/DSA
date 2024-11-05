
// checking if two binary trees are identical

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(tree1, tree2) {

    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null) {
        return false;
    }

    return (tree1.value === tree2.value) &&
        areIdentical(tree1.left, tree2.left) &&
        areIdentical(tree1.right, tree2.right);
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(areIdentical(tree1, tree2));


// inverting an binary tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertTree(root) {
    if (root === null) {
        return null;
    }


    let left = invertTree(root.left);
    let right = invertTree(root.right);


    root.left = right;
    root.right = left;

    return root;
}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

root = invertTree(root);

console.log(root);

// finding the sum of the node values in each every levels of an binary tree

class TreeNode{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }

    sumNodes(root){
        if(!root){
            return 0;
        }
        return root.value + this.sumNodes(root.left) + this.sumNodes(root.right);
    }
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.left = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);

console.log(root.sumNodes(root));

// displaying the values within the binary tree in an array format

class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    displayArray(root) {
        let result = [];
        if (!root) {
            return result;
        }

        result.push(root.value);
        result = result.concat(this.displayArray(root.left));
        result = result.concat(this.displayArray(root.right));

        return result;
    }

}


let root = new TreeNode(1);
root.right = new TreeNode(2);
root.left = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);

console.log(root.displayArray(root));


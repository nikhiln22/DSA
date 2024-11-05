
// building a tree which is configurable (depends on the user providing n value);

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

class Ntree {
    constructor() {
        this.root = null;
    }

    insert(rootValue, n) {
        if (!this.root) {
            this.root = new Node(rootValue);
        }
        for (let i = 0; i < n; i++) {
            const childNode = new Node(`child-${i + 1}`);
            this.root.addChild(childNode);
        }
    }
}

const tree = new Ntree();

tree.insert(10, 8);

console.log(JSON.stringify(tree, null, 2));


// building an tree from an sorted array

class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

function sortedArrayToBst(nums) {
    function BuildBst(left, right) {
        if (left > right) {
            return null;
        }

        let mid = Math.floor((left + right) / 2);
        let node = new Node(nums[mid]);

        node.left = BuildBst(left, mid - 1);
        node.right = BuildBst(mid + 1, right);

        return node;
    }

    return BuildBst(0, nums.length - 1);
}


console.log(sortedArrayToBst());
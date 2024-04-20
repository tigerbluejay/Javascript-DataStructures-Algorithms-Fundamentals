class Node {
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
        if (typeof value === 'number' && !isNaN(value)) {
            if (this.root === null) {
                this.root = new Node(value);
                return this;
            } else {
                var current = this.root;
                while (true) {
                    if (value < current.value) {
                        if (current.left === null) {
                            current.left = new Node(value);
                            return this;
                        } else {
                            current = current.left;
                        }
                    } else if (value > current.value) {
                        if (current.right === null) {
                            current.right = new Node(value);
                            return this;
                        } else {
                            current = current.right;
                        }
                    } else {
                        return "duplicate!";
                    }
                }
            }
        } else
            return "Please insert a number";
    }

    isBalanced() {
        return this.checkHeight(this.root) !== -1;
    }

    checkHeight(node) {
        if (node === null) {
            return 0; // Height of an empty tree is 0
        }

        // Recursively calculate the height of the left and right subtrees
        const leftHeight = this.checkHeight(node.left);
        const rightHeight = this.checkHeight(node.right);

        // If any subtree is unbalanced, return -1 to indicate unbalance
        // Any subtree returning -1 is propagated through the call stack
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }
        /* The condition Math.abs(leftHeight - rightHeight) > 1 checks whether the absolute difference 
        in height between the left and right subtrees of a node is greater than 1. This condition 
        identifies a specific scenario where the current subtree is unbalanced directly at that node.

        On the other hand, leftHeight === -1 and rightHeight === -1 are conditions used to propagate 
        information about unbalanced subtrees up the recursive call stack. These conditions are 
        encountered when a subtree is found to be unbalanced during the recursive traversal, and they 
        signal that the current subtree (or one of its ancestors) is unbalanced.

        So, Math.abs(leftHeight - rightHeight) > 1 identifies unbalanced subtrees directly at the current 
        node, while leftHeight === -1 and rightHeight === -1 indicate unbalanced subtrees that have been 
        encountered during the recursive traversal and are used to propagate that information up the call stack. */

        // Return the height of the current node
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Example usage:
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(8);
tree.insert(12);
tree.insert(20);

console.log(tree.isBalanced()); // Output: true
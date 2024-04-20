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

    findSecondLargest() {
        if (!this.root || (!this.root.left && !this.root.right)) {
            return "Tree is empty or has only one node";
        }

        let secondLargest = null;
        let current = this.root;

        while (current) {
            if (!current.right && current.left) {
                // If current node is the largest and has a left subtree
                // Then the second largest is the largest node in its left subtree
                secondLargest = this.findLargestNode(current.left);
                break;
            }

            if (current.right && !current.right.left && !current.right.right) {
                // If current node's right child is the largest and it has no left child
                // Then current node is the second largest
                secondLargest = current;
                break;
            }

            current = current.right;
        }

        return secondLargest.value;
    }

    findLargestNode(node) {
        let current = node;
        while (current.right) {
            current = current.right;
        }
        return current;
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

console.log(tree.findSecondLargest()); // Output: 15
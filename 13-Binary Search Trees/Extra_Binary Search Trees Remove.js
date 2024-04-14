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
            // handle duplicate values (optional)
            // throw new Error('Duplicate value');
            return this;
          }
        }
      }
    }
  
    remove(value) {
      const removeNode = function(node, value) {
        if (node === null) {
          return null;
        }
        if (value < node.value) {
          node.left = removeNode(node.left, value);
        } else if (value > node.value) {
          node.right = removeNode(node.right, value);
        } else {
          // Node with the value to be removed found
          if (node.left === null && node.right === null) {
            // Node has no children: simply delete the node
            return null;
          } else if (node.left === null) {
            // Node has only right child: promote the right child
            return node.right;
          } else if (node.right === null) {
            // Node has only left child: promote the left child
            return node.left;
          } else {
            // Node has two children: find the inorder successor
            // In essence, this code snippet finds the closest value greater 
            // than the node being removed (inorder successor) and swaps their 
            // values. Then, it removes the original successor node 
            // (which has at most one child) using the removeNode function 
            // recursively. This maintains the BST property where left children 
            // are always less than their parent and right children are always greater.
            let successor = node.right;
            while (successor.left !== null) {
              successor = successor.left;
            }
            // Copy the value of the successor to the node
            node.value = successor.value;
            // Recursively remove the successor (which will have at most one child)
            node.right = removeNode(node.right, successor.value);
          }
        }
        return node;
      };
  
      this.root = removeNode(this.root, value);
      return this; // for chaining
    }
  }

var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
binarySearchTree.remove(50);
binarySearchTree.root.right.value // 20
binarySearchTree.root.right.right // null
 
binarySearchTree.remove(5);
binarySearchTree.root.left.left.value // 1
binarySearchTree.root.left.left.right // null
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50);
 
binarySearchTree.remove(1);
binarySearchTree.root.left.left.value // 5
binarySearchTree.root.left.left.left // null
binarySearchTree.root.left.left.right // null
 
binarySearchTree.remove(20);
binarySearchTree.root.right.value // 50
binarySearchTree.root.right.right // null
binarySearchTree.root.right.left // null
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(15)
    .insert(20)
    .insert(10)
    .insert(12)
    .insert(1)
    .insert(5)
    .insert(50)
    .insert(60)
    .insert(30)
    .insert(25)
    .insert(23)
    .insert(24)
    .insert(70);
 
binarySearchTree.remove(10);
binarySearchTree.root.left.value // 12
binarySearchTree.root.left.left.value // 1
binarySearchTree.root.left.left.right.value // 5
 
binarySearchTree.remove(50);
binarySearchTree.root.right.value // 20
binarySearchTree.root.right.right.value // 60
binarySearchTree.root.right.right.left.value // 30
 
var binarySearchTree = new BinarySearchTree();
binarySearchTree
    .insert(22)
    .insert(49)
    .insert(85)
    .insert(66)
    .insert(95)
    .insert(90)
    .insert(100)
    .insert(88)
    .insert(93)
    .insert(89)
 
binarySearchTree.remove(85);
binarySearchTree.root.right.right.value // 88
binarySearchTree.root.right.right.right.left.left.value // 89
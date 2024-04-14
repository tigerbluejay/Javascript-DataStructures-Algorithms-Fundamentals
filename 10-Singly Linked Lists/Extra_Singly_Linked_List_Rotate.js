class Node {
    constructor(val) {
        this.val = val;
        this.next = null;   
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

rotate(k) {
    if (!this.head || this.length <= 1) return; // Handle empty list or single element

    // Handle negative or large k values
    k = k % this.length;
    if (k < 0) k += this.length;

    let current = this.head;
    let count = 1;
    let prev = null;

    // Find the kth node from the beginning
    while (current && count < k) {
      prev = current;
      current = current.next;
      count++;
    }

    // If k is equal to length, no rotation needed
    if (!current) return;

    // Set the new head and tail
    this.tail.next = this.head;
    this.head = current.next;
    current.next = null;
    this.tail = current;
  }
}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
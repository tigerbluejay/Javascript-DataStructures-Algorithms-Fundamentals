class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  // The sort method is called within the enqueue method, ensuring that elements are always added to the PriorityQueue 
  // in sorted priority order.
  // This guarantees that the element with the highest priority (lowest priority value) will always be at the front of 
  // the queue when retrieved using the dequeue method.
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
  // In the function (a, b) => a.priority - b.priority, we are subtracting b.priority from a.priority.
  // If a.priority has a lower numerical value (higher priority), the difference will be positive. 
  // The sort method interprets a positive difference as a being "greater" than b, placing b (the element with lower priority) first.
  // Conversely, if a.priority has a higher numerical value (lower priority), the difference will be negative. 
  // The sort method interprets this as a being "less" than b, placing a (the element with lower priority) after b.
  // The sort method internally uses the return values from the comparison function to arrange the elements in the desired order.
}
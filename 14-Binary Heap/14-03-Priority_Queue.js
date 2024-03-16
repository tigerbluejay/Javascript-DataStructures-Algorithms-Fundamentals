class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();

// order of calls
/*
            common cold (5)
    gunshot wound (1)       high fever (4)
  broken arm (2) glass (3)  

*/

ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
// when gunshot wound is enqueued, it is compared to its parent and swapped.
/*            gunshot wound (1)
    common cold (5)
*/
ER.enqueue("high fever",4) // high fever is placed as right child
ER.enqueue("broken arm",2)
// when broken arm is enqueued, it is compared to its parent (common cold) and swapped
/*            gunshot wound (1)
    common cold (5)      high fever (4)
broken arm (2)
 */
/*            gunshot wound (1)
    broken arm (2)      high fever (4)
common cold (5)
 */
// then compared to its new parent (1) and not swapped
ER.enqueue("glass in foot",3) // immediately glass in foot is set as the fourth element (child of the index 1 element)
// broken glass is compared to its parent (broken arm) and not swapped


ER.dequeue(); // this removes the highest priority element (in this case gunshot wound)
/*            gunshot wound (1)
    broken arm (2)      high fever (4)
common cold (5) glass(3)
 */
// and rearranges the children, swapping with their children, bubbling up the highest priority elements.
/*            broken arm (2)
    glass in foot (3)      high fever (4)
common cold (5)
 */





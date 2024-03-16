class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1; // obtain the left child index
            let rightChildIdx = 2 * idx + 2; // obtain the right child index
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                 ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap; // set the next iteration's parent index
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55); // 55 was inserted last, but it "bubbled up" because it was the highest priority value
heap.extractMax(); // returns the topmost element (55)

// order before extract max and sink down
/*
                   55
              39        41
            18  27    12   33
*/

// extract max: return 55
// sink down:
// take the last element (33) and compare it to 55's left and right children
// compare element with left or right child (first compare 33 to 39, then 33 to 41, then 39 to 41) then swap

// on the next iteration of the loop look at the swapped element's (41) left and right children (12 only)
// compare if 33 needs swapping with 12

// order after extract max and sink down
/*
                   41
              39        33
            18  27    12
*/
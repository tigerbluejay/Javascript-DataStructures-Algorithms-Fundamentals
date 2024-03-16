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
            let parentIdx = Math.floor((idx - 1)/2); // calculation to obtain parent element index
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}
//      original order
//      41 39 33 18 27 12 55
/* or
                   41
              39        33
            18  27    12   55
*/

let heap = new MaxBinaryHeap();
heap.insert(41); // 41P
heap.insert(39); // 41P (39)
heap.insert(33); // 41P (39 33)
heap.insert(18); // 41 39P 33 (18)
heap.insert(27); // 31 39P 33 (18 27)
heap.insert(12); // 31 39 33P 18 27 (12)
heap.insert(55); // 31 39 33P 18 27 (12 55) => sway parent for child
                 // 31 39 55P 18 27 (12 33) 
                 // 31P (39 55) 18 27 12 13 => swap parent for child
                 // 55P (39 31) 18 27 12 23


// ending order
/*
                   55
              39        41
            18  27    12   33
*/

// In a heap the highest or lowest priority element is sorted at the top of the queue
// A heap is in reality a priority queue
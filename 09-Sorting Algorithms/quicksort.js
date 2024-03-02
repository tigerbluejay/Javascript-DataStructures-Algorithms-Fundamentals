
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
//   quickSort([100,-3,2,4,6,9,1,2,5,3,23]);
quickSort([4,6,9,1,2,5,3]);
  
  
  
  
  // [4,6,9,1,2,5,3] ---> starting point is "4"
  // [3,2,1,4,6,9,5]
  //        4        ---> it is put in place (by the pivot function)
  //  3,2,1    6,9,5 ---> starting points are 3 and 6 respectively
  //      3      6   ---> they are put in place (by thepivot function)
  //  2,1      5  9  ---> starting point is 2
  //    2            ---> it is put in place (by the pivot function)
  //  1
  
  
  // the pivot function puts the pivot in place and returns
  // its position once it has been correctly sorted
  // So the pivot is 4, it sorts it into proper location
  // and returns its index,
  // which is used in the quicksort functions to further
  // call the pivot function, returning the now ordered pivot's index
  // which helps set the new limits for quicksort calls.
  
  
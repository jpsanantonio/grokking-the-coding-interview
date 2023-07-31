function removeInstanceOfKey(arr, key) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  
  while (leftPointer < rightPointer) {
    if (arr[leftPointer] === key && arr[rightPointer] !== key) {
      let temp = arr[leftPointer];
      arr[leftPointer] = arr[rightPointer]
      arr[rightPointer] = temp;
    }
    
    if (arr[leftPointer] !== key) {
      leftPointer++;
    }
    
    if (arr[rightPointer] === key) {
      rightPointer--;
    }    
  }
  
  return leftPointer;
}

removeInstanceOfKey([3, 2, 3, 6, 3, 10, 9, 3], 3);
removeInstanceOfKey([2, 11, 2, 2, 1], 2);
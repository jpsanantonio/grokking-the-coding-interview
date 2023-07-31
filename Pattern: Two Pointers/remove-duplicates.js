function removeDuplicates(arr) {
  let leftPointer = 0;
  let rightPointer = 1;
  
  while (rightPointer < arr.length) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      leftPointer++;
      let temp = arr[leftPointer];
      arr[leftPointer] = arr[rightPointer];
      arr[rightPointer] = temp;
      rightPointer++;
    } else {
      rightPointer++;
    }
  }
  
  return leftPointer + 1;
}

removeDuplicates([2, 3, 3, 3, 6, 9, 9]);
removeDuplicates([2, 2, 2, 11]);
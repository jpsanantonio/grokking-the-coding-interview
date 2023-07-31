function squaringSortedArray(arr) {
  const result = new Array(arr.length);
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let index = arr.length - 1;
  
  while (leftPointer <= rightPointer) {
    const leftSquared = arr[leftPointer] * arr[leftPointer];
    const rightSquared = arr[rightPointer] * arr[rightPointer];
    
    if (leftSquared >= rightSquared) {
      result[index] = leftSquared;
      leftPointer++
    } else {
      result[index] = rightSquared;
      rightPointer--
    }
    
    index--;
  }
  
  return result;
}

squaringSortedArray([-2, -1, 0, 2, 3]);
squaringSortedArray([-3, -1, 0, 1, 2]);
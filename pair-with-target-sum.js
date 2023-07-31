function pairWithTargetSum(arr, target) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  
  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer];
    
    if (sum === target) {
      return [leftPointer, rightPointer];
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  
  return [-1, -1];
}

pairWithTargetSum([1, 2, 3, 4, 6], 6);
pairWithTargetSum([2, 5, 9, 11], 11);
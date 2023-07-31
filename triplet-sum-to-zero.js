function tripletSumToZero(arr) {
  return searchTriplets(arr);
}

function searchTriplets(arr) {
  const triplets = [];
  const sortedArray = sortArray(arr); // quickSort
  
  for (let i = 0; i < sortedArray.length; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue;  
    }
    
    searchPair(sortedArray, -sortedArray[i], i + 1, triplets);
  }
  
  return triplets;
}

function searchPair(arr, target, leftPointer, triplets) {
  let rightPointer = arr.length - 1;
  
  while (leftPointer < rightPointer) {
    const leftNum = arr[leftPointer];
    const rightNum = arr[rightPointer];
    const sum = leftNum + rightNum;
    
    if (sum === target) {
      triplets.push([-target, leftNum, rightNum]);
      leftPointer++;
      rightPointer--;
      
      while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
        leftPointer++;
      }
      
      while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
        rightPointer--;
      }
    } else if (sum < target) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  
  return triplets;
}

function sortArray(arr) {
  if (arr.length === 0) {
    return arr;
  }
  
  const pivot = arr.length - 1;
  const lower = [];
  const equal = [];
  const higher = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      lower.push(arr[i]);
    } else if (arr[i] === arr[pivot]) {
      equal.push(arr[i]);
    } else {
      higher.push(arr[i]);
    }
  }
  
  return [...sortArray(lower), ...equal, ...sortArray(higher)];
}

tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]);
tripletSumToZero([-5, 2, -1, -2, 3]);
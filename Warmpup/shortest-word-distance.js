function shortestDistance(arr, wordA, wordB) {
  let leftPointer = null;
  let rightPointer = null;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === wordA) {
      leftPointer = i;
    }

    if (arr[i] === wordB) {
      rightPointer = i;
    }

    if (leftPointer !== null && rightPointer !== null) {
      minDistance = Math.min(Math.abs(rightPointer - leftPointer), minDistance);
    }
  }

  return minDistance;
}

shortestDistance(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 'fox', 'dog');
shortestDistance(["a", "c", "d", "b", "a"], 'a', 'b');
shortestDistance(["a", "b", "c", "d", "e"], 'a', 'e');

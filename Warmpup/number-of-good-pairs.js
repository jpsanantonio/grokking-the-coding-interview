function numberOfGoodPairs(input) {
  let result = 0;
  const map = {};
  
  for (let num of input) {
    if (map.hasOwnProperty(num)) {
      map[num]++;
      result = result + (map[num]  - 1);
    } else {
      map[num] = 1;
    }
  }

  
  return result;
}

numberOfGoodPairs([1,2,3,1,1,3]);
numberOfGoodPairs([1,1,1,1]);
numberOfGoodPairs([1,2,3]);
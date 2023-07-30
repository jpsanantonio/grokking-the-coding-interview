function containsDuplicate(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.hasOwnProperty(num)) {
      return true;
    }

    map[num] = 1;
  }

  return false;
}


containsDuplicate([1, 2, 3, 4])
containsDuplicate([1, 2, 3, 1])
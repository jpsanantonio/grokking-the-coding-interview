function isPangram(string) {
  const set = new Set();

  for (const char of string) {
    if (char.match(/[a-z]/i)) {
      set.add(char.toLowerCase());
    }
  }

  if (set.size === 26) {
    return true;
  }

  return false;
}

isPangram('TheQuickBrownFoxJumpsOverTheLazyDog')
isPangram('This is not a pangram')
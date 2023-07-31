function isAnagram(firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  }

  const dictionary = {};

  for (let char of firstWord) {
    if (dictionary.hasOwnProperty(char)) {
      dictionary[char]++;
    } else {
      dictionary[char] = 1;
    }
  }

  for (let char of secondWord) {
    if (dictionary.hasOwnProperty(char)) {
      dictionary[char]--;
    }
  }

  for (let key in dictionary) {
    if (dictionary[key] !== 0) {
      return false;
    }
  }

  return true;
}

isAnagram('listen', 'silent');
isAnagram('rat', 'car');
isAnagram('hello', 'world');
isAnagram('tartar', 'ratrat');
isAnagram('racecar', 'racecars');
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function reverseVowels(string) {
  let result = [];
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while (leftPointer <= rightPointer) {
    const leftChar = string[leftPointer];
    const rightChar = string[rightPointer];

    if (isVowel(leftChar) && isVowel(rightChar)) {
      result[leftPointer] = rightChar;
      result[rightPointer] = leftChar;
      leftPointer++;
      rightPointer--;
    }

    if (!isVowel(leftChar)) {
      result[leftPointer] = leftChar;
      leftPointer++;
    }

    if (!isVowel(rightChar)) {
      result[rightPointer] = rightChar;
      rightPointer--;
    }
  }


  return result.join('');
}

reverseVowels('hello');
reverseVowels('AEIOU');
reverseVowels('DesignGUrus');
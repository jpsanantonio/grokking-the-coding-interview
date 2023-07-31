function isAlphanumeric(char) {
  return char.match(/[a-z0-9]/i);
}

function areBotherAlphanumeric(leftChar, rightChar) {
  return isAlphanumeric(leftChar) && isAlphanumeric(rightChar);
}

function areSame(leftChar, rightChar) {
  return leftChar.toLowerCase() === rightChar.toLowerCase();
}

function isPalindrome(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while (leftPointer < rightPointer) {
    const leftChar = string[leftPointer];
    const rightChar = string[rightPointer];

    if (areBotherAlphanumeric(leftChar, rightChar) && areSame(leftChar, rightChar)) {
      leftPointer++;
      rightPointer--;
    } else if (areBotherAlphanumeric(leftChar, rightChar) && !areSame(leftChar, rightChar)) {
      return false;
    }

    if (!isAlphanumeric(leftChar)) {
      leftPointer++;
    }

    if (!isAlphanumeric(rightChar)) {
      rightPointer--;
    }
  }

  return true;
}

isPalindrome('A man, a plan, a canal, Panama!');
isPalindrome('Was it a car or a cat I saw?');
isPalindrome('This is the moment.');
isPalindrome('12345')
isPalindrome('12321')
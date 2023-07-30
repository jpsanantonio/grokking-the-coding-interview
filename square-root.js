function sqrt(num) {
  if (num < 2) {
    return num;
  }

  return sqrtHelper(num, 0, Math.floor(num / 2));
}

function sqrtHelper(num, start, end) {
  const mid = Math.floor(start + (end - start) / 2);

  if (start > end) {
    return end;
  }

  if (mid * mid === num) {
    return mid;
  } else if (mid * mid < num) {
    return sqrtHelper(num, mid + 1, end);
  } else {
    return sqrtHelper(num, start, mid - 1);
  }
}

sqrt(100);
sqrt(4);
sqrt(2);
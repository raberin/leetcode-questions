// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  const limit = 2147483648;
  let result = 0;
  let sign = x < 0 ? -1 : 1;
  if (x < 0) {
    let negX = -x;
    result = -Number(
      negX
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else {
    result = Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  }
  return result > limit ? 0 : result;
};

//Shorter way
const reverse = x => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(
    String(Math.abs(x))
      .split("")
      .reverse()
      .join("")
  );
  return n > limit ? 0 : n * k;
};

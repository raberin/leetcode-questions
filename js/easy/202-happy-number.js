/*Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1*/

var isHappy = function(n) {
  //For memoization
  var seen = {};
  //Saves value in obj set to true
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    //Calls function until n === 1
    n = sumOfSquares(n);
  }
  //Modifies n until it becomes 1 or false
  return n === 1 ? true : false;
};

//Sums all the squares of n
function sumOfSquares(numString) {
  return numString
    .toString()
    .split("")
    .reduce(function(sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}

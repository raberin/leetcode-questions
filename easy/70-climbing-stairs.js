/*You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step */

//Climbing stairs === Fibonacci
//fib(n + 1) === climbingStairs(n)

//Recursive Approach O(2^n) -Exponential
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

//iterative bottom-down approach O(n)
var climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  //Create variables for n = 1 and n = 2 to track
  //Temp variable to hold current value;
  let afterTwoStep = 1;
  let afterOneStep = 2;
  let current;

  //Set i = 2 since we already did previous
  //Loop through sum of both oneStep and twoStep
  //changing variable to accomodate loop
  for (let i = 2; i < n; i++) {
    current = afterOneStep + afterTwoStep;
    afterTwoStep = afterOneStep;
    afterOneStep = current;
  }
  return current;
};

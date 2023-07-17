/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Solution 1
var maxProfit = function (prices) {
  //Set initial value
  let current = prices[0];
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    //If current price is less than price[i]
    //Add profit to result
    if (current < prices[i]) {
      result += prices[i] - current;
    }
    //Set new current
    current = prices[i];
  }
  return result;
};

//Greedy Appoach -- Function JS
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const possibleProfit = prices[i + 1] - prices[i];
    profit = Math.max(profit + possibleProfit, profit);
  }
  return profit;
};

// Sliding Window - 2 Pointer Technique
var maxProfit = (prices) => {
  let buyIndex = 0;
  let sellIndex = 1;
  // Initialize maxProfit to 0 as a default case
  let maxProfit = 0;

  while (sellIndex < prices.length) {
    // If buy value is less than sell value
    if (prices[buyIndex] < prices[sellIndex]) {
      // Calculate profit
      const profit = prices[sellIndex] - prices[buyIndex];

      //Set maxProfit
      maxProfit = Math.max(maxProfit, profit);
    } else {
      //If the buy value is greater than sell value set buyIndex to sellIndex since we want to make
      //sure our buy value is the lowest available
      buyIndex = sellIndex;
    }
    sellIndex++;
  }

  return maxProfit;
};

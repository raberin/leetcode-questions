/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/
// O(n) - hashmap
var singleNumber = function(nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) {
      cache[nums[i]]++;
    } else {
      cache[nums[i]] = 1;
    }
  }
  for (let key in cache) {
    if (cache[key] === 1) {
      return key;
    }
  }
};

//O(n) - set
var singleNumber = function(nums) {
  if (nums.length < 2) {
    return nums[0];
  }
  let seen = new Set();
  for (let num in nums) {
    if (num in seen) {
      seen.delete(num);
    } else {
      seen.add(num);
    }
  }
  for (let num of seen) {
    return num;
  }
};

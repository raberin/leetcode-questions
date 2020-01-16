// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//Brute Force Method - O(n^2)
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//First pass - efficient O(n);
var twoSum = function(nums, target) {
  let obj = {};
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    //Subtracts target with current number in arr
    let containKey = target - nums[i];

    //Checks obj if the target - num[i] is a key and returns the value of the
    //Key which is the index
    if (obj[containKey] != undefined) {
      //Returns [indexOfFirstNum, 2ndNumIndex]
      return [obj[containKey], i];
    }
    //Adds the current number in array as key and sets index as value
    obj[nums[i]] = i;
    console.log(obj);
  }
};

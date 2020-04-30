/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

//Sort method O(nlgn) - time
var containsDuplicate = function (nums) {
  let sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) return true;
  }
  return false;
};

//Hash Map Method O(n) - time
var containsDuplicate = function (nums) {
  let obj = {};
  for (let ele of nums) {
    if (obj[ele]) {
      return true;
    } else {
      obj[ele] = 1;
    }
  }
  return false;
};

//Set Method O(n) - time
var containsDuplicate = function (nums) {
  let set1 = new Set();
  for (let num of nums) {
    if (set1.has(num)) {
      return true;
    } else {
      set1.add(num);
    }
  }
  return false;
};

//Set Method O(n) - time
var containsDuplicate = function (nums) {
  //Convert the arr into a set, thus removing dupes
  const myset = new Set(nums);
  //Check if the lengths are the same, if yes there's no dupes, if so dupes
  return nums.length !== myset.size;
};

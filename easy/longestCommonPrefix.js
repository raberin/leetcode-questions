/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }

  //Loop through the length of the first word in arr
  for (let i = 0; i < strs[0].length; i++) {
    //Loops through each letter of strs arr
    for (let str of strs) {
      //If the letter does not equal to letter[i]
      //return sliced prefix from 0 -> i
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0];
};

/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  //Base case if length < 1
  if (s.length < 1) {
    return -1;
  }
  //Create obj to store each vowel with an arr [count, index]
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    //if key undefined, create one
    if (!obj[s[i]]) {
      obj[s[i]] = [1, i];
    } else {
      //increment
      obj[s[i]][0]++;
    }
  }
  //Loop through obj if count in arr is 1 then its unique
  //Return the index [count, index]
  for (let key in obj) {
    if (obj[key][0] === 1) {
      return obj[key][1];
    }
  }
  //Otherwise return -1 since theres no uniques
  return -1;
};

/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?*/

//Sorted Approach O(nlogn) - speed
var isAnagram = function(s, t) {
  let sorted1 = s.split("").sort();
  let sorted2 = t.split("").sort();
  // Checks which string is longer to loop over for comparison
  let longerString = s.length < t.length ? t.length : s.length;

  for (let i = 0; i < longerString; i++) {
    // At each iteration check if the letters are same
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }
  return true;
};

//Sorted Approach O(nlogn) - speed
var isAnagram = function(s, t) {
  let sorted1 = s
    .split("")
    .sort()
    .join("");
  let sorted2 = t
    .split("")
    .sort()
    .join("");
  return sorted1 === sorted2;
};

//Using Objects/Hash Map
let isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  //Create an object
  let counts = {};
  for (let char of s) {
    //Make a counter for each letter and add to obj
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }
  //Loop over 2nd string if theres a key not available return false
  //Decrease the counts of each letter
  for (let char of t) {
    if (!counts[char]) return false;
    counts[char]--;
  }
  return true;
};

// Using a set
let isAnagram = (s, t) => {
  // Create new Set
  let set = new Set()
    // Loop through s and add letter into set
    for(let letter in s){
      set.add(letter)
    }
    
}

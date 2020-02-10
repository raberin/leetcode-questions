/*
 Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2

*/

// Pseudocode
// Create count var
// Loop through arr
// Add i and i+1 to see if it equals k
// If it equals k, count ++

// Naive Brute Force O(n^2)
const subarraySum = (arr, k) => {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        // Instantiate sum var
        let sum = 0
        for(let j = i; j < nums.length; j++){
            // Add onto sum each element
            sum += nums[j]
            // If it equals k increment count
            if(sum === k) count++
        }
    }
    return count
}
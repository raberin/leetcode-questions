// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

//In this function there are 2 loops, first loop check if number undefined, sets that as prime number
//In the 2nd loop it multiplies that i value by all of its multiples < n
//Those multiple are set to non prime === false, SO in the next iteration,
//It jumps to the next prime number which is set to true
//And it loops all over again

var countPrimes = function(n) {
  //Base Case
  if (n <= 1) return 0; // 1 is not a prime number

  var isPrime = [],
    count = 0;

  for (var i = 2; i < n; i++) {
    //if this position is undefined, set it to true and increase count
    if (isPrime[i] == undefined) {
      // cannot use !isPrime[i] (isPrime[i] == false) has to be undefined
      isPrime[i] = true;
      count++;
      console.log(i, "before 2nd loop", `isPrime[i] = ${isPrime[i]}`);

      //For every multiple if i thats non prime
      //EX i = 2, === (2 * 2), (2 * 3), (2 * 4), (2 * 5) === 4, 6, 8, 10 ARE NOT PRIME
      for (var j = 2; j * i < n; j++) {
        // mark the prime's multiples as nonprime
        isPrime[i * j] = false;
        console.log(`i = ${i}`, `j = ${j}`, `i * j = ${i * j}`);
        console.log(isPrime);
      }
    }
  }

  return count;
};

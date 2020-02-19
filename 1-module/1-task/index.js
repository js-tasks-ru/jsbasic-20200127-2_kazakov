/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

  let result = 1;
  while(n){
    result *= n--;
  }
  return result;
}

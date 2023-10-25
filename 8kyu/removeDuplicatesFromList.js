/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
*/

// Solution 1
function distinct(a) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (!result.includes(a[i])) {
      result.push(a[i]);
    }
  }

  return result;
}

// Solution 2 - use Set() inside square brackets to make the Set object an array
function distinct(a) {
  return [...new Set(a)];
}

// Solution 3 - use Set(), then use the Array.from() to make convert the Set object to an array
function distinct(a) {
  return Array.from(new Set(a));
}

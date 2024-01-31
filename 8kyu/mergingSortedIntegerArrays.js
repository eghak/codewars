/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
 */

// Solution
function mergeArrays(a, b) {
  let arr = [...a, ...b];
  let comArr = arr.sort((x, y) => x - y);
  return [...new Set(comArr)];
}

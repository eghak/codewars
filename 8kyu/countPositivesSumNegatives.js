/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// Solution 1
function countPositivesSumNegatives(input) {
  let pos = [];
  let neg = [];

  if (!input || input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? pos.push(input[i]) : neg.push(input[i]);
  }

  return [pos.length, neg.reduce((a, c) => a + c, 0)];
}

// Solution 2
function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;

  if (!input || input.length === 0) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? pos++ : (neg += input[i]);
  }

  return [pos, neg];
}

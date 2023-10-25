/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.
*/

// Solution
function betweenExtremes(numbers) {
  let smallest = numbers[0];
  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
      smallest = numbers[i];
    } else if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest - smallest;
}

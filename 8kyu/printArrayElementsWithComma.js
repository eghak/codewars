/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"
*/

// Solution 1
function printArray(array) {
  return array.join(",");
}

// Solution 2
function printArray(array) {
  return array.toString();
}

/*
Task
Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

// Solution 1

// function flickSwitch(arr) {
//   let boolean = true;

//   let result = arr.map((item) => {
//     if (item === "flick") {
//       boolean = !boolean;
//     }
//     return boolean;
//   });

//   return result;
// }

// Solution 2

function flickSwitch(arr) {
  let boolean = true;

  return arr.map((item) => (item === "flick" ? (boolean = !boolean) : boolean));
}

console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))
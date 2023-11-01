/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?"
"No?" --> "No?"
*/

// Solution 1
function ensureQuestion(s) {
  return s.includes("?") ? s : s + "?";
}

// Solution 2
function ensureQuestion(s) {
  if (s.includes("?")) {
    return s;
  } else {
    return s + "?";
  }
}

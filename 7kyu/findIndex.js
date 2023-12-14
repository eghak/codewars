/*
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1
*/

// Solution
function secondSymbol(s, symbol) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    symbol === s[i] ? count++ : null;
  }

  if (count < 2) {
    return -1;
  } else {
    let firstIndex = s.indexOf(symbol);
    return s.indexOf(symbol, firstIndex + 1);
  }
}

/*
In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'

If naughty > nice (in the array), return 'naughty'

If nice > naughty (in the array), return 'nice'

Examples:

bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
whatListAmIOn(bad_actions)
#-> 'naughty'
good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
what_list_am_i_on(good_actions)
#-> 'nice'
actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
what_list_am_i_on(actions)
#-> 'naughty'
*/

// Solution
function whatListAmIOn(actions) {
  let naughty = 0;
  let nice = 0;

  for (let i = 0; i < actions.length; i++) {
    if (
      actions[i].charAt(0) === "b" ||
      actions[i].charAt(0) === "f" ||
      actions[i].charAt(0) === "k"
    ) {
      naughty++;
    } else if (
      actions[i].charAt(0) === "g" ||
      actions[i].charAt(0) === "s" ||
      actions[i].charAt(0) === "n"
    ) {
      nice++;
    }
  }

  if (naughty === actions.length || naughty > nice) {
    return "naughty";
  } else if (nice === actions.length || nice > naughty) {
    return "nice";
  } else if (naughty === nice) {
    return "naughty";
  }
}

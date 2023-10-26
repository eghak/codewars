/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// Solution
function reverseLetter(str) {
    let splitStr = str.split('')
    let reversedSplitStr = splitStr.reverse()

    let result = []

    for(let i=0; i<reversedSplitStr.length; i++){
      if(reversedSplitStr[i].toLowerCase() != reversedSplitStr[i].toUpperCase()){
        result.push(reversedSplitStr[i])
      }
    }

    return result.join('')

  }

  // Solution - with Regex
  function reverseLetter(str){
    return str.match(/[a-z]/g).reverse().join('')
  }

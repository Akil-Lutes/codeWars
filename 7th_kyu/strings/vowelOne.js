/* 

https://www.codewars.com/kata/580751a40b5a777a200000a1/train/javascript

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/




// 4/19/23
function vowelOne(s){
  s = s.toLowerCase()
  const vowArr = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  for (el of s) {
    // ternary operator
    vowArr.includes(el) ? result += '1' : result += '0'
  }
}




// 4/15/23
// function vowelOne(s){
//     s = s.toLowerCase()
//     const arr = ['a', 'e', 'i', 'o', 'u']
//     let result = ''
//     for (el of s) {
//         // ternary operator
//       arr.includes(el) ? result += '1' : result += '0'
//     }
//     return result
//   }




// 4/13/23 (First attempt)
// function vowelOne(s) {
//     // ...
//     let empStr = [];
//     // Need Vowel Array
//     const vowArr = ['a', 'e', 'i', 'o', 'u'];
//     // I might need to convert a string to an array and back to a string
//     const strArr = s.split('');
//     // Need a for loop
//     // Need a for loop for vowels for matching
//     // Can use reduce method
//     // I need to put out the matching strArr vowArr vowels for matching
//     for (let i = 0; i < strArr.length; i++) {
//         for (let j = 0; j < vowArr.length; j++) {
//             if (vowArr[j] === strArr[i]) {
//                 let temp = vowArr.shift();
//                 empStr.push(1)
//             }
//             if (vowArr[j] != strArr[i]) {
//                 let tempCon = strArr.shift();
//             }
//         }
//     }
//     console.log(empStr)
// }
  
// vowelOne('Manon, Guile');

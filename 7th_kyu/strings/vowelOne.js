/* 
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"

*/

function vowelOne(s) {
    // ...
    let empStr = [];
    // Need Vowel Array
    const vowArr = ['a', 'e', 'i', 'o', 'u'];
    // I might need to convert a string to an array and back to a string
    const strArr = s.split('');
    // Need a for loop
    // Need a for loop for vowels for matching
    // Can use reduce method
    // I need to put out the matching strArr vowArr vowels for matching
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < vowArr.length; j++) {
            if (vowArr[j] === strArr[i]) {
                empStr.push(1)
            }
        }
    }
    console.log(empStr)
}
  
vowelOne('Manon, Guile');

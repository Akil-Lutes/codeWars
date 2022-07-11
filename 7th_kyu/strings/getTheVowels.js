/*
Consecutive Vowels
You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

https://www.codewars.com/kata/62a933d6d6deb7001093de16/train/javascript
*/

// Hints, remove vowels from array once they are found in the word parameter

//7/10/2022
function getTheVowels(word) {
    // Make an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;
    console.log(vowels);
    // for loop
    // if statement to compare/match letters in word array to the vowels array
    for (const w of word) {
        for (const vow of vowels) {
            // console.log(vow);
            if (w === vow) {
                // vowels.shift() once w[1] is found (a)
                counter++
            }
            console.log(counter)
        }
    }

    // return 0;
  }

getTheVowels('Earthly');



// **** Sample Answer ****

// function getTheVowels(string) {
//     let arrayOfVowels = ['a','e','i','o','u'];
//     let count = 0;
//     let arrayOfLetters = string.split('');

//     // Iterates through the array of letters
//     for (let i = 0; i < arrayOfLetters.length; i++) {
//         // If "a" is found 
//         if (arrayOfVowels[0] == arrayOfLetters[i]) {    // (really means first index of array)
//             // Increment count by one.
//             count++;
//             // Remove "a" from array of vowels 
//             arrayOfVowels.shift();                      // (really means first index of array)
//         }
//         // If arrayOfVowels is empty
//         if (arrayOfVowels.length == 0) {
//             // Reload the array of vowels
//             arrayOfVowels = ['a','e','i','o','u'];
//         }
//     }
//     return count;
// }
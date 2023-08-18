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
// Need a counter (to count the vowels in the array from a - u)
// let temp = vowels.shift(); // stores the first vowel in a temporary variable, and removes it (remember it is inside of for loop)





// 8/13/2023
function getTheVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels[0] === word[i]) {
      let temp = vowels.shift();
      // I take the vowel that was moved out and moved back in the vowel array
      vowels.push(temp)
      counter++
    }
  }
  console.log(counter)
  return counter;
}

getTheVowels("agrtertyfikfmroyrntbvsukldkfa")

// 4/23/2023
// function getTheVowels(word) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (vowels[0] === word[i]) {
//       let temp = vowels.shift();
//        // I take the the vowel that was moved out and moved back in vowel array. 
//       vowels.push(temp);
//       counter++
//     }
//   }
//   return 0;

// }


// 12/23/2022

// function getTheVowels(word) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (vowels[0] === word[i]) {
//       let temp = vowels.shift();
//        // I take the the vowel that was moved out and moved back in vowel array.
//       vowels.push(temp)
//       counter++
//     }
//   }
//   console.log(counter);
//   return counter
//   // need counter
//   // need a for loop
// }

// getTheVowels("agrtertyfikfmroyrntbvsukldkfa");
















// 11/28/2022

// function getTheVowels(word) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === vowels[0]) {
//       let temp = vowels.shift();
//       // I take the the vowel that was moved out and moved back in vowel array.
//       vowels.push(temp);
//       counter++
//     }
//   }
//   console.log(counter);
//   return counter;
// }

// getTheVowels("agrtertyfikfmroyrntbvsukldkfa");
















// 11/27/2022
// function getTheVowels(word) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let lowVowArr = word.toLowerCase();
//   let counter = 0;
//   for (let i = 0; i < lowVowArr.length; i++) {
//     if (word[i] === vowels[0]) {
//       let temp = vowels.shift();
//       vowels.push(temp); // push matched vowel in temp variable
//       counter++
//     }
//   }
//   // how to remove vowels from array once picked


//   console.log(counter);
//   return counter;
// }

// getTheVowels("agrtertyfikfmroyrntbvsukldkfa");




//8/22/2022
// function getTheVowels(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     // variable to track how many consecutive vowels we've seen
//     let counter = 0;
//     // need a for loop to loop through vowels
//     // need a counter to count how many vowels there are in the array
//     // if statement to compare/match letters in word array to the vowels array
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] === vowels[0]) { // check if the char is the first item in vowel, the next character we expect
//                 let temp = vowels.shift(); // stores the first vowel in a temporary variable, and removes it (remember it is inside of for loop)
//                 vowels.push(temp); // pushes the vowel we just removed to the end of the expected queue
//                 counter++ // Increment count by one
//             }
//     }
//     console.log(counter);
//     return counter;
// }
  
// console.log(getTheVowels('Earthly'))


// function getTheVowels(word) {
//     // array of vowels stored
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     // variable to track how many consecutive vowels we've seen
//     let consec = 0;
//     for (let i = 0; i < word.length; i++) { // for each char in word...
//       if (word[i] === vowel[0]) { // check if the char is the first item in vowel, the next character we expect
//         let temp = vowel.shift(); // stores the first vowel in a temporary variable, and removes it
//         vowel.push(temp); // pushes the vowel we just removed to the end of the expected queue
//         consec++; // increase the consecutive vowel count
//       } // the new vowel[0] is the next expected vowel
//     }
//     return consec;
// }
  
// console.log(getTheVowels('Earthly'))



//7/10/2022
// function getTheVowels(word) {
//     // Make an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let counter = 0;
//     // for loop
//     // if statement to compare/match letters in word array to the vowels array
//     for (const w of word) {
//         for (const vow of vowels) {
//             // console.log(vow);
//             if (w === vow) {
//                 // vowels.shift() once w[1] is found (a)
//                 vowels.shift();
//                 // console.log(vowels);
//                 // counter++
//             }
//             console.log(counter);
//             console.log(vowels);
//         }
//     }

//     // return 0;
//   }

// getTheVowels('Earthly');



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
/* 

Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

*/

// 4/15/2022
// function squareOrSquareRoot(array) {
//     // For loop
//     // If statement inside of foor loop
//     let sqrArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (Number.isInteger((Math.sqrt(array[i]))) == true) {
//             sqrArr.push(Math.sqrt(array[i]))
//         } else {
//             sqrArr.push(Math.pow(array[i], 2))
//         }
//         // console.log('Testing')
//     }
//     return sqrArr;
// }
  
// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));


// Better optimized solution
/* 
function squareOrSquareRoot(array) {
  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
}
*/
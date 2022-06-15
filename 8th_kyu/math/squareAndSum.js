/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/


// 6/7/2022
// Try array reduce with initial value as 0
const squareSum = arr => arr.reduce((a, num) => a + (num ** 2), 0) 

console.log(squareSum([2, 2, 2,]));
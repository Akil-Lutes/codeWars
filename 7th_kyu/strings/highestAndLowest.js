/* 

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
*/





// 8/18/2023
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    console.log(numbers)
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
  }

console.log(highAndLow("1 2 3 4 5"));


// // 10/17/2022
// function highAndLow(numbers){
//   // ...
//   // use Math.max
//   const max = Math.max(...numbers);
//   const min = Math.min(...numbers);
//   return `${max} ${min}`
// }

// highAndLow()



// // 9/16/22

// function highAndLow(numbers){
//     // ...
//     numbers = numbers.split(' ');
//     const max = Math.max(...numbers);
//     const min = Math.min(...numbers);
//     console.log(numbers)
//     return `${max} ${min}`;
//   }

// highAndLow('2 1 9 4 7');









// Preferred way
// function highAndLow(numbers) {
//     numbers = numbers.split(' ').map(Number);
//     const max = Math.max(...numbers);
//     const min = Math.min(...numbers);
//     return `${max} ${min}`;
//   }

// function highAndLow(numbers) {
//     // ...
//     let lowHiArr = []
//     // I can sort array first b-a or a-b 
//     // After sort reference first and last values of array
//     let sortedNums = numbers.sort(function (a, b) { return a - b
// })
//     // push first element and last element into arr
//     lowHiArr.push(sortedNums[0]);
//     lowHiArr.push(sortedNums[sortedNums.length - 1]);
//     return lowHiArr
    
// }
  
// console.log(highAndLow(['2', '1', '9', '4', '7']));
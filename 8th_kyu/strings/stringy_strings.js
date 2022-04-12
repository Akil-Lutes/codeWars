/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return 

https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

*/

// 4/12/2022
// function stringy(size) {
//     // Even odd indexes
//     // if statement
//     // foor loop
//     let empStr = '';

//     for (let x = 1; x <= size; x++) {
//         empStr+= x % 2
//     } return empStr;
// }
  
// console.log(stringy('1010'));


// // This works too, I did this before.
// function stringy(size) {
//     string = "1";
//     for (var i = 0; i < size-1; i++) {
//       if(i % 2 == 0)
//         string += "0";
//       else
//         string += "1";
//     }
//     return string;
//   }

// function stringy(size) {
//     // Even odd indexes
//     // if statement
//     // foor loop
//     let empStr = '1';

//     for (let x = 1; x < size; x++) {
//         if (size % 2 == 0) {
//             empStr += '0';
//         } if (size % 2 == 1) {
//             empStr += '1'
//         }
//     } return empStr;
// }

// function stringy(size) {
//     var str='';
//     for( var i=1; i<=size; i++ )
//       str+=i%2;
//     return str;
//   }
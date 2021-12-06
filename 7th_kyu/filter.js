/* 
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
*/


function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    // modulo operator === 0
    // return array
    return numbersArray.filter(num => num % 2 === 0)
}
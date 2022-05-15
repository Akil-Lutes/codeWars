/*
Simple, remove the spaces from the string, then return the resultant string.

https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
*/




















// *** 5/3/22 ***
function noSpace(x){
    return x.split(' ').join('')
}

console.log(noSpace('Mindset thing'));
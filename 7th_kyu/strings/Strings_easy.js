/* 
Task
The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.


https://www.codewars.com/kata/56d6b921c9ae3fd926000601/javascript

Solution: 1
Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
function() { return JSON.stringify(this); }
*/
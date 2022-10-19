// Spread Operator
let arr = ['a', 'b', 'c'];
let nameStr = 'Akil'
let nameArr = [...nameStr];
console.log(arr);
console.log(nameArr);

// Combining Arrays
let arr1 = ['Amazon', 'Google'];
let arr2 = ['Facebook', 'Twitter'];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Adding Values to Arrays
let arr4 = ['a', 'b', 'c'];
let arr5 = ['d', ...arr4];
console.log(arr5);

// objects
let obj = {
    name: "salesforce",
    age: 31
}

console.log(obj.name);
console.log(obj.age);



// Array Destructuring
let arr = ['Amazon', 'Google'];
// let company1 = arr[0];
// let company2 = arr[1];

let [company1, company2] = arr;

console.log(company1);
console.log(company2);

// Object Destructuring

let options = {
    title: 'Zero To Hero',
    age: 31,
    type: 'CRM'
}

// let title = options.title;
// let age = options.age;

let { title, age, type } = options;

console.log(title);
console.log(age);
console.log(type);
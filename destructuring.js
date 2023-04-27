


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

// React Functional Component Destructuring

// 1. Destructure props
const { name, placeholder } = props;

// OR you can use this but desturcture is the best option

// 2. Without Destructure
// const name = props.name;
// const placeholder = props.placeholder
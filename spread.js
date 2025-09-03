const numbers = [87, 8, 5, 91];
// console.log(numbers);
// console.log(...numbers);

// const max = Math.max(21, 56, 94, 112, 54, 23);
const max = Math.max(...numbers);
// console.log(max);

const first = [1, 2, 3, 4, 5];
const second = [...first];
const third = [0, ...first, 97, 45, 12];
second.push(6);
// console.log(first);
// console.log(second);
// console.log(third);

const ages = [45, 45, 1];
const prices = [98, 65, 45];
const all = [...ages, 555, ...prices];
console.log(all);

const person = { name: "parmisan", age: 35 };
const employee = { designation: "dev", ...person };
console.log(employee);

const total = (a, b, c) => a + b + c;
const result = total(3, 4, 5);
const digits = [4, 5, 6];
total(...digits);

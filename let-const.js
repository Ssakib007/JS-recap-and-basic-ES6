// es6
// console.log(name);
// Cannot access 'name' before initialization
// hoisting
console.log("device value", device);
// device value undefined
var device = "laptop";
const name = "bangladesh";
const countryName = "bd" + name;
console.log(countryName);
let price = 123;
price = 150;
console.log(price);

//
const charge = 50;
const dress = ["shirt", "pant", "jacket"];
dress.push("maflar");
console.log(dress);

const student = { name: "jaglu", marks: 50 };

student.marks = 60;
console.log(student);

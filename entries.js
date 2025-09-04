const employee = {
  name: "alan",
  designantion: "QA",
  salary: "20000",
  experience: 1,
};

const keys = Object.keys(employee);
console.log(keys);
// [ 'name', 'designantion', 'salary', 'experience' ]
const values = Object.values(employee);
console.log(values);
// [ 'alan', 'QA', '20000', 1 ]
const entries = Object.entries(employee);
console.log(entries);
// [
//   ["name", "alan"],
//   ["designantion", "QA"],
//   ["salary", "20000"],
//   ["experience", 1],
// ];



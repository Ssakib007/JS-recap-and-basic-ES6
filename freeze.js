const employee = {
  name: "alan",
  designantion: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};
Object.freeze(employee);
employee.salary = employee.salary + 5000;
employee.location = "dhaka";
// console.log(employee);
// { name: 'alan', designantion: 'QA', salary: '20000', age: 22 }

Object.seal(employee);



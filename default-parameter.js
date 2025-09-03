function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
sum(10);
sum(10, 40);
// outputs
// 10 0 10
// 10 40 50

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}
multiply(10, 10);
multiply();

function fullName(first, last = "") {
  const name = first + " " + last;
  console.log(name);
}
fullName("kam");

function greet(name = "guest") {
  console.log(`Hello, ${name}`);
}
// calling the function without passing any argument
greet();
// Hello, guest
// calling the function with an argument
greet("john");
// Hello, john

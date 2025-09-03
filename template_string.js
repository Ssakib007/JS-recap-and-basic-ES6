const poem =
  "heaven gives it glimpses" +
  "only to those" +
  "not in position to look too close";
console.log(poem);

const poems = `heaven gives its glimples
only to those
not in position
to look too close`;

// console.log(poems);

function sum(num1, num2) {
  const result = num1 + num2;
  const output1 = "sum of" + num1 + "and" + num2 + "is equal to" + result;
  const output = `sum of ${num1} and ${num2} is equal to ${result}`;
  console.log(output);
}

sum(10, 30);

const price = 100;
const discountedPrice = `discounted price is after 20% discount ${price * 0.8}`;
console.log(discountedPrice);

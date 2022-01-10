function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log(billAmount, taxRate);
  console.log('Runing Calculate Bill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// function call
const myTotal = calculateBill(100);
const myTotal2 = calculateBill(200, 0.13);

console.log(`Your total is $${myTotal}`);
console.log(`Your total is $${myTotal2}`);

console.log(`Your total is $${calculateBill(100, 0.13)}`);

const wesBill = 500;
const wesRate = 0.3;

const wesTotal = calculateBill(wesBill, wesRate);
console.log(`Your total is $${wesTotal}`);

// function definition
function sayHelloTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHelloTo('Pablo');
console.log(greeting);

const myTotal3 = calculateBill(10 + 10 + 60, 0.13 + 0.12);
console.log(`Your total is $${myTotal3}`);

function doctorize(name) {
  return `Hello Dr. ${name}`;
}

function yell(name = `Chacho`) {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Pablo')));
console.log(yell());

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(`Your total is $${myBill4}`);

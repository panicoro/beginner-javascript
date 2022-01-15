// function Doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon function
// function (firstName) {
//  return `Dr. ${firstName}`;
// }

// console.log(doctorize('Pablo'));

// Function expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions are anonymous functions
// const inchToCM = (inches) => inches * 2.54;

// const add = (a, b = 3) => a + b;

// returning an object

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 0
// });

// IIFE
// Inmedialy Invoked Function Expression

(function (age) {
  console.log('Running the Anon function');
  return `You are cool and age ${age}`;
})(10);

// Methods!!
const wes = {
  name: 'Westopher Bos',
  sayHi() {
    console.log(`Hey ${this.name}`);
    return 'Hey wes';
  },
  // Short hand method
  yellHi() {
    console.log('HEY WESSSS');
  },
  // Arrow function
  wisperHi: () => {
    console.log('hi wessss in a mouse');
  },
};

// Callback function
const button = document.querySelector('.clickMe');
button.addEventListener('click', () => {
  console.log('Nice Job!!!');
});

// Timer callback
setTimeout(() => {
  console.log('Time to eat');
}, 1000);

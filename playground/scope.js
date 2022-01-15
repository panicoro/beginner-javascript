// const age = 100;

// function go() {
//   const Myage = 200;
//   const hair = 'blonde';
//   console.log(Myage);
//   console.log(hair);
// }

// go();

// console.log(age);

// function isCool(name) {
//   if (1 === 1) {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

const dog = 'snikers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

sayHi('wes');
// yell();

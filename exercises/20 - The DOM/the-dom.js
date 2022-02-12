/* const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
const heading = document.querySelector('h2');

// lOGS
// console.log(p);
// console.log(imgs);
// console.log(item2);
// console.log(item2Image);
console.log(heading.textContent);
console.log(heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${`${pizzaList.textContent} 🍕`}`;
pizzaList.insertAdjacentText('afterbegin', '🍕');
pizzaList.insertAdjacentText('beforend', '🍕');

*/

// Classes

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Nice beach'; // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth);

pic.width = 200;

/* window.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});
*/

/* pic.setAttribute('wes-os-cool', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));
*/

const custom = document.querySelector('.custom');
console.log(custom.dataset);

document.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});

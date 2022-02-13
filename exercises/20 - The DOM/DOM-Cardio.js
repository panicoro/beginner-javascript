// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `
<ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
const src = 'https://source.unsplash.com/random/600x600';
img.src = src;
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const newDiv = `
<div>
    <p>This is the first paragraph</p>
    <p>And this is the second paragraph</p>
</div>`;
div.insertAdjacentHTML('afterbegin', newDiv);
// add a class to the second paragraph called warning
const secondP = div.firstElementChild.lastElementChild;
secondP.classList.add('warning');
// remove the first paragraph
div.firstElementChild.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
   </div>
   `;
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
// append those cards to the div
cardsDiv.insertAdjacentHTML('afterbegin', generatePlayerCard('Pablo', 31, 150));
cardsDiv.insertAdjacentHTML('afterbegin', generatePlayerCard('Nico', 31, 150));
cardsDiv.insertAdjacentHTML('afterbegin', generatePlayerCard('Katy', 31, 150));
cardsDiv.insertAdjacentHTML('afterbegin', generatePlayerCard('Stefy', 31, 150));
// put the div into the DOM just before the wrapper element
console.log(cardsDiv);
div.insertAdjacentElement('beforebegin', cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener

const cards = document.querySelectorAll('.playerCard');

for (let i = 0; i < cards.length; i += 1) {
  const button = document.createElement('button');
  button.innerText = 'Delete';
  button.classList.add('delete');
  button.type = 'button';
  button.addEventListener('click', () => {
    cards[i].remove();
  });
  cards[i].insertAdjacentElement('beforeend', button);
}

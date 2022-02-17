const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('👀 IT GOT CLICKED!');
}

const hooray = () => console.log('HOORAY');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// we can remove the function because we are not using an anon function
butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

// console.log(buyButtons);

/* function buyItem() {
  console.log('BUYING ITEM');
}
 */
/* function handleBuyButtonClick(element) {
  element.addEventListener('click', buyItem);
}
 */
// buyButtons.forEach(handleBuyButtonClick);
/* buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(`YOU CLICKED IT ${button.innerHTML}`);
  });
});
*/

function handleBuyButtonClick(e) {
  // const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log('You clicked a button!');
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  e.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('WINDOW CLICKED!');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
  console.log(e.currentTarget);
  console.log(this);
});

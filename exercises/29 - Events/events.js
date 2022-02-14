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

console.log(buyButtons);

/* function buyItem() {
  console.log('BUYING ITEM');
}
 */
/* function handleBuyButtonClick(element) {
  element.addEventListener('click', buyItem);
}
 */
// buyButtons.forEach(handleBuyButtonClick);
buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(`YOU CLICKED IT ${button.innerHTML}`);
  });
});

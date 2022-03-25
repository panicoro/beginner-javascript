const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// We need an array to hold our state
let items = [];

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
       <input 
          type="checkbox"
          value="${item.id}"
          ${item.complete ? 'checked' : ''}>
       <span class="itemName">${item.name}</span> 
       <button aria-label="Remove ${item.name}" value="${item.id}">
       &times
       </button>
  </li>`
    )
    .join('');
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  console.log(`${items.length}`);
  // Clear the form
  e.target.reset();
  // fire off a custom event that will tell anyone else who cares
  // that the items have been updated!
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function mirrorToLocalStorage() {
  console.log('Saving items to localstorage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.log('Restoring from LS');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  console.log(lsItems);
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach((item) => items.push(item));
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const itemRef = items.find((item) => item.id === id);
  console.log(itemRef);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// Event delegation: We list for the click on the list <ul> but then delegate
// the click over to the button if that is was clicked
list.addEventListener('click', (event) => {
  const id = parseInt(event.target.value);
  if (event.target.matches('button')) {
    deleteItem(id);
  }
  if (event.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
});

restoreFromLocalStorage();

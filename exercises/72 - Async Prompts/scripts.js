function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  popup.remove();
  // eslint-disable-next-line no-param-reassign
  popup = null;
}

function ask(options) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement('form');
    popup.classList.add('popup');
    popup.insertAdjacentHTML(
      'afterbegin',
      `
      <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"/>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );
    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popup.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popup);
        },
        { once: true }
      );
    }
    // Listen for the submit event on the inputs
    popup.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        resolve(e.target.input.value);
        // Remove it from the DOM entirely
        destroyPopup(popup);
      },
      { once: true }
    );
    // When someone does submit it, resolve the data that was in the box!
    // Insert the popup into the DOM
    document.body.appendChild(popup);
    // Put a very small timeout before we add the open class
    await wait(50);
    popup.classList.add('open');
  });
}

// select all button that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name?' },
];

async function asyncMap(array, callback) {
  // Make an array to store our results
  const results = [];
  // Loop over our array
  for (const item of array) {
    const result = await callback(item);
    results.push(result);
  }
  // When we are done the loop, return it!
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

console.log('IT WORKS!');

const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {
  // console.log('YOU CLICKED!');
  const shoudlChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shoudlChangePage) {
    // window.location = event.currentTarget.href;
    event.preventDefault();
  }
  console.log(shoudlChangePage);
});

const sigupForm = document.querySelector('[name="signup"]');

sigupForm.addEventListener('submit', (event) => {
  const name = event.currentTarget.name.value;
  console.log(name);
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

/*
'keyup'
'keydown'
'focus'
*/

function logEvent(event) {
  console.log(event.type);
}

sigupForm.name.addEventListener('keyup', logEvent);
sigupForm.name.addEventListener('keydown', logEvent);
sigupForm.name.addEventListener('focus', logEvent);
sigupForm.name.addEventListener('blur', logEvent);

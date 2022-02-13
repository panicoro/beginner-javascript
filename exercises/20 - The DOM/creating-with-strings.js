const item = document.querySelector('.item');

const src = 'https://source.unsplash.com/random/200x200';
const desc = 'Cute Pup <h1>LOVE THIS GUY<h1>';
const myHTLM = `    
    <div class="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}">
    </div>
    
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTLM);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);

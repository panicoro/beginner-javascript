/* eslint-disable */
const first = 'wes';
const middle = "thoper";
const last = `bos`;

const sentence = "She's so \"cool\"";
const sentence2 = `She's so "cool"`;

const song = 'Ohh I \
like';

const song2 = `Ohh

I


like pizza`;

const hello = "Hello my name is " + first + ". Nice to meet you"

const hello2 = `Hello my name is ${first}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
    <div>
        <h2>${first}</h2>
        <p>${hello}</p>
    </div>
`
console.log(html);
document.body.innerHTML = html;
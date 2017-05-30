/* eslint-disable */
// The method .getElementById is available on any node. It allows you
// to search the descendants of a node by their id. It returns the first node
// that matches the given id.

// returns one node with id == 'larry-the-lion'
const larryTheLion = document.getElementById('larry-the-lion');

// The method .getElementsByClassName is available on any node. It allows you
// to search the descendants of a node by their class names. It returns a list of
// all the nodes that match all given class names in a HTMLCollection (not quite
// an array, but similar.)

// returns all nodes with at least the class 'doggo'
const allDoggos = document.getElementsByClassName('doggo');
// returns all nodes with both classes 'doggo' & 'fighter'
const allDoggoFighters = document.getElementsByClassName('doggo fighter');


// The method .querySelector is also available on any node. It allows to
// to search the descendants by CSS selection (e.g. `#toxic-tim`, `div.team`, etc.)
// It returns the first node that matches the given CSS selector.

// returns the first node with id 'toxic-tim'
const toxicTim = document.querySelector('#toxic-tim');
// returns the first node that has the classes 'team' & 'salmon'
const teamSalmon = document.querySelector('.team.salmon');
// searches the descendants of teamSalmon and returns the
// second node with the class 'doggo'
const secondDoggoOfTeamSalmon = teamSalmon.querySelector('.doggo:nth-child(2)');

// The method .querySelectorAll is nearly identical to .querySelector, but returns
// all the nodes that match the CSS selection in a array-like object, the NodeList

// returns all nodes that have the class 'team'
const teams = document.querySelectorAll('.team');

// EXERCISE: Picking Doggos
// 1. Select Knight Nicholas by id
document.getElementById('knight-nicholas');
document.querySelector('#knight-nicholas');
document.querySelectorAll('#knight-nicholas')[0];

// 2. Select Moneybags Michael & Larry The Lion
document.querySelectorAll('#larry-the-lion, #moneybags-michael')

// 3. Select all Team Khaki Doggos but the first
document.querySelectorAll('.team.khaki .doggo:not(:first-child)')
document.querySelector('.team.khaki').querySelectorAll('.doggo:nth-child(2), .doggo:nth-child(3)');

// 4. Select the second doggo in every team
document.querySelectorAll('.team .doggo:nth-child(2)')

// Selecting Surrounding Nodes (or Family Nodes)
// Nodes that are children of the same parent are called siblings.
// You use the properties .nextElementSibling and .previousElementSibling
// to cycle through them.

// returns the next sibling, Bumble Bertha
toxicTim.nextElementSibling
// it can be chained
// goes Bumble Bertha then returns to Toxic Tim
toxicTim.nextElementSibling.previousElementSibling


// we can select parent nodes with .parentElement

// returns the 'roster' div where all the doggos of team are located
toxicTim.parentElement
// returns the 'team salmon' div
toxicTim.parentElement.parentElement
// returns the 'teams' div
toxicTim.parentElement.parentElement.parentElement

// we can also select children nodes with...

// returns a all children nodes of teamSalmon in a HTMLCollection
teamSalmon.children
// grabs the lastElementChild (the 'roster' div), then returns its children (the 'doggos')
teamSalmon.lastElementChild.children
/* also available are:
.lastElementChild
.firstElementChild
.childNodes (returns a NodeList instead)
*/

// Shorcut methods to .querySelector and .querySelectorAll
function q(...args) { return document.querySelector(...args); }
function qs(...args) { return document.querySelectorAll(...args); }

// returns bumble bertha node
const bumbleBertha = q('#bumbleBertha');


// Changing the inline styles of Nodes

// Nodes have style property which is an object that contains
// all inline styles. The properties changed and the effects will
// be reflected live on the document.

/*
// when modifying styles with the style property, refer to CSS properties
// in camelCase instead of kebab-case

toxicTim.style.color = 'Aquamarine';
toxicTim.style.fontWeight = '400';
toxicTim.style.border = 'solid 5px Aquamarine';

// if using kebab-case

toxicTim.style['border-radius'] = '10px';
*/

// To get all computed styles, use the global function `getComputedStyle` on
// a node

// returns a big object will all styles assigned to toxicTim
getComputedStyle(toxicTim)

// To get all the HTML inside of a node as text, use the `.innerHTML` property
toxicTim.innerHTML

// Assign a string to `.innerHTML` will replace the contents of that node.
// Any HTML inside of the text will be propery rendered as HTML
/*
toxicTim.innerHTML = `<h1>Chuck Norris</h1>`;
*/

// To get all the HTML inside of a node including the node itself, use the `.outerHTML`
// property
toxicTim.outerHTML

/*
// assign to it will replace the node as well
toxicTim.outerHTML = ''; // this removes toxicTim from the DOM
*/

// You can manipulate all standard html attributes by referring to them by their
// property names

// returns toxic tim's id
toxicTim.id;

/*
// replaces toxic tim's id with 'nina-the-ninja'
toxicTim.id = 'nina-the-ninja';

// you can read classes with the `className` property
toxicTim.className;
// you can replace classes by assigning to it
toxicTim.className = 'doggo dying';


// it's best to manipulate classes with the `classList` property
// it has the `.add`, `.remove` and `.toggle`
toxicTim.classList.add('labourer');
toxicTim.classList.remove('fighter');
*/

// When changing a nodes CSS styles, it's best to do it indirectly assigning
// and removing classes having related styles in the stylesheet

// Give toxicTim the `.selected` class which is declared in the stylesheet as:
/*
.doggo.fighter.selected {
  border: solid 5px deepskyblue;
}
*/

// ☝️☝️☝️
// toxicTim will now acquire the CSS properties declared for that class
/*
toxicTim.classList.add('selected');
*/

// There generic methods to get, set and remove HTML attributes. These
// allow you to also create custom attributes.

// returns toxicTim's id
toxicTim.getAttribute('id');
// returns toxicTim's class
toxicTim.getAttribute('class');

// sets a custom attribute, `data-id`, on toxicTim
toxicTim.setAttribute('data-id', 'tt12312421dswqwqewq');

// removes the custom attribute, `data-id`
toxicTim.removeAttribute('data-id');

// To remove a node, use the `remove` methods
/*
toxicTim.remove();
document.body.remove();
*/

// To do manipulate multiple nodes at once, you must iterate over them:
// with a for .. of loop
/*
for (let doggo of qs('.doggo')) {
  doggo.id = 'larry-the-lion';
}
*/

// with the .forEach high-order function
/*
qs('.doggo').forEach(doggo => {
  doggo.style.border = 'solid 10px red';
})
*/

// EXERCISE: Vandalise the Arena
// 1. Change the color of all teams to fuchsia
/*
qs('.team').forEach(node => {
  node.style.backgroundColor = 'fuchsia';
});
*/

// 2. Rename all doggos to Rob The Slob
/*
for (let doggo of qs('.doggo')) {
  doggo.innerHTML = `<h1>Rob The Slob</h1>`;
}
*/

// 3. Change all the doggo pictures to that of a cat from the internet
/*
const catURL = 'https://creators-images.vice.com/content-images/article/24-hour-online-animal-tv-is-the-logical-conclusion-of-the-internet/b7391f23587dfa5cc59c75e53a19841a.jpg';
for (let doggo of qs('.doggo')) {
  doggo.style.backgroundImage = `url(${catURL})`;
}
*/

// We can construct nodes outside of the rendered DOM with
// document.createElement(...)
// it takes a string representing a valid html tag name
// (e.g. div, form, input, a, p, etc)
window.drillBitDarel = document.createElement('div');
// Nodes created with .createElement can be manipulated in the same
// way as any other node in the document
drillBitDarel.id = 'drill-bit-darel';
drillBitDarel.classList.add('doggo', 'fighter');
drillBitDarel.style.backgroundImage = 'url(./images/drill_bit_darel.jpg)';
drillBitDarel.innerHTML = `<h1>Drill Bit Darel</h1>`;

// To insert a node at any position, use the .insertBefore method

const tSalmonRoster = q('.team.salmon .roster');

// the first argument is the node to be inserted
// the second argument is the node where the first argument will be inserted before
// this must be inside the callee (i.e. tSalmonRoster)
tSalmonRoster.insertBefore(drillBitDarel, tSalmonRoster.firstElementChild);


// Listening to Events

// The .addEventListener is method usable on any Node instance
// It takes two arguments:
// - A string named after an event that exists (e.g. 'click', 'submit', 'mouseenter', etc.)
//   For a list of available event names, https://developer.mozilla.org/en-US/docs/Web/Events
// - A callback that is executed when the event is triggered

// When the node toxicTim is clicked, 'Toxic Tim was clicked!' is logged to the console
toxicTim.addEventListener('click', () => {
  console.log('Toxic Tim was clicked!');
})

// To Check if an Object is an Instance of Node

// Use the `instanceof` operator

document instanceof Node // returns true
'Bob' instanceof Node // returns false

document.querySelectorAll('div') instanceof Node // returns false
document.querySelectorAll('div') instanceof NodeList // returns true
document.querySelectorAll('div')[0] instanceof Node // returns true

// Event object

// The callback passed to .addEventListener is called with an event object
// That object contains all sorts of information related to the triggering event
// This includes:
// - the `target` node that originaly triggered the event
// - the `currentTarget` node which is the node that listening for the event
// - whether or not a modifier was held (e.g. shift, ctrl, commmand, etc)
// - the time at which the event was triggered
// - for mouse events, the coordinates of the cursor at the time the event was triggered
// - for keyboard events, the key that was pressed the code of the character
// - the type of event
// - and, many many more

// To look at the event object feel free to write a simple listener like so:
document.addEventListener('click', event => console.log(event));
// replace document with any DOM Node and replace 'click' with any other event

// this inside .addEventListener callback

// the `this` inside the callback is assigned to `event.currentTarget`. If you
// want to make of `this`, make sure to define your callback as a regular
// function and not an arrow function

/*
// BAD!
document.addEventListener('click', () =>  {console.log(this)}) // logs undefined or window
// GOOD!
document.addEventListener('click', function () {console.log(this)}) // logs the document node
*/

// Call Stack Review

const { log } = console;

function a () {
  log('This is A');
}

function b () {
  a();
  log('This is B');
}

function c () {
  b();
  log('This is C');
}

function d () {
  debugger
  c();
  log('This is D');
}

// Asynchrounous Example

console.log('-------------------')
let aVar = 1
console.log('Before setTimeout:', aVar);
setTimeout(function () {
  aVar = 20;
  console.log('Inside setTimeout:', aVar);
}, 0);
console.log('After setTimeout:', aVar);


// MOUSE EVENTS

qs('.doggo').forEach(node => {
  node.addEventListener('dblclick', event => {
    const { currentTarget } = event;
    // NEW! 👆 Destructuring syntax
    // equivalent to:
    // const currentTarget = event.currentTarget;

    // currentTarget.style.filter = 'invert()';

    currentTarget.classList.toggle('invert-colors');
  });

  node.addEventListener('mousedown', function (event) {
    // inside an .addEventListener callback, `this` and `event.currentTarget`
    // are usually interchangeable unless the callback is defined with an
    // arrow function
    this.classList.add('slight-rotation');
  })

  node.addEventListener('mouseup', event => {
    event.currentTarget.classList.remove('slight-rotation');
  })
});

// EXERCISE: Crouching Mouse Hidden Doggo

// 1. Go to the Doggo Arena Demo Page
// 2. Moving the mouse inside a doggo should make it monochrome
//    Hint: Use a class and CSS!

for (let doggo of qs('.doggo')) {
  doggo.addEventListener('mouseenter', event => {
    const { currentTarget } = event;
    // Modifying the style inline is inadvisable
    // Trying using a CSS class instead that triggers some CSS properties
    currentTarget.style.filter = 'grayscale()';
  })

  doggo.addEventListener('mouseleave', event => {
    const { currentTarget } = event;
    currentTarget.style.filter = '';
  })
}


// 3. Moving the mouse outside a doggo should reset it its monochrome

// DEMO: Type Loudly & Explode on submit

const random = n => Math.floor(Math.random() * n);

const playKey = () =>
  new Audio(`sounds/vintage-keyboard-${random(5) + 1}.wav`).play();

qs('#application-form input').forEach(node => {
  node.addEventListener('input', event => {
    const { currentTarget } = event;

    playKey();
    // To get the field value, we first have to get the field node
    // through the currentTarget or this, then we can use its value property
    // to get or set
    // console.log(currentTarget.value);
  })
});

// the submit event only works on `form` nodes
q('#application-form').addEventListener('submit', event => {
  // prevent the submit event from doing a web request as it would normally do
  // with 👇
  event.preventDefault();
  const form = event.currentTarget;
  // To get data from from input fields, you can select them individually:
  const nameInputValue = form.querySelector('[name=name]').value
  const pictureUrlInputValue = form.querySelector('#picture-url').value
  // Or, you can use the FormData constructor with the form node:
  const fData = new FormData(form);
  // Each input fields' values are accessible with the .get method of the
  // form data instace by their name attribute
  const nameValue = fData.get('name');
  const pictureUrlValue = fData.get('picture-url');
  // The form data object:
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData

  // form.querySelector('[name=name]')
  console.log(event);
});


// EXERCISE: Applicant's Avatar

// 1. Go to Demo App
// 2. Replace the applicant preview image's src (on the left) with
//    the image url entered in the field

q('#application-form').addEventListener('submit', event => {
  const { currentTarget } = event;
  const pictureUrl = new FormData(currentTarget).get('picture-url');
  q('.doggo.blank').style.backgroundImage = `url(${pictureUrl})`;
});

// DEMO: Keyboard Events

document.addEventListener('keydown', event => {
  // console.log(event);
  const { ctrlKey, shiftKey, key } = event;
  if (ctrlKey && shiftKey && key.toLowerCase() === 'n') {
    window.location.href = 'http://www.nyan.cat';
  }
});

// EXERCISE: Shorcuts of the Ninja

// Send user to http://hackertyper.net when 'panic' is typed anywhere on the page

let lastKeys = '';

document.addEventListener('keydown', event => {
  const { key } = event;

  if (key.length > 1) return;

  lastKeys = (lastKeys + key).slice(-5);
  console.log(lastKeys);
  if (lastKeys.toLowerCase() === 'panic') {
    console.log('OK. Panicking!');
    window.location.href = 'http://hackertyper.net';
  }
})











/* */

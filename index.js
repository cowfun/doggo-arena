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
toxicTim.innerHTML = `<h1>Chuck Norris</h1>`;

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
toxicTim.classList.add('selected');

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










/* */

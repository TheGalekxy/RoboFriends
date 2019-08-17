// let + const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);  // will be 'true'
}

console.log('outside', wizardLevel);    // will be 'false'

const obj = {
    player: 'bobby',            // you can change the properties of the object still but you can't reassign the variable
    experience: 100,
    wizardLevel: false,
}

obj.wizardLevel = true;         // ^^^^^

obj                             // ^^^^


// Destructuring 

const obj = {
    player: 'bobby',            
    experience: 100,
    wizardLevel: false,
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj; //does the same thing as line 33 & 34. Select the properties you want from the object.
let { wizardLevel } = obj;


// Object Properties

const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi'
}


const a = "Simon";
const b = true;
const c = {};

const obj = {
    a: a,
    b: b,
    c: c,
}

// The same as above^^^
const obj = {
    a,
    b,
    c,
}

// Template Strings

const name = "Sally";
const age = "34";
const pet = "horse";

const greeting = "Hello " + name + " you seem to be doing " + greeting + "!"

const greetingBest = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;

// Default Arguments

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have!`;
}

// Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// symbols create a completely unique type. Therefore sym2 /= sym3. Will return "false".

// Arrow Functions

function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;
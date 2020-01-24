// Pass by Value - copy the value and create that value somewhere else in memory

//Primitive types are pass by value
var a = 5;
var b = a;

b++;

console.log(a) //5
console.log(b) //6

// Pass by reference

let obj1 = { name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1) // Password gets changed in both obj2 AND obj1. This is due to pass by reference
console.log(obj2)

// Objects in javascript are stored in memory and passed by reference, which means that we dont copy the values like we did with primitive types we simply said "hey, this is where the object is, in memory"

var c = [1,2,3,4,5];
var d = c;
d.push(18282828)
console.log(d) // returns same as c
console.log(c) // returns same as d

// To clone an object we can concatonate
var d = [].concat(c)

// Objects are more difficult
let obj = {a: 'a', b: 'b', c: 'c'};

// We can't do obj2 = obj because anything we add to obj2 will change obj
// So we can do this...
let clone = object.assign({}, obj);      // First parameter is the object to copy to (an empty object {} ), and the second parameter is the source (obj in this case)
obj.c = 5;
console.log(clone) // the clone is not affected by the change of c in the original object

// we can also do this...
let clone2 = {...obj} // this does the same thing as the 'clone' line
console.log(clone2) // same as clone

// Objects are more difficult
let obj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and copy me'
    }
};

obj.c.deep = 'ahaha'; // changes all the objects
// the initial clone was a 'shallow clone', it cloned the first level and only the first level.
// we can clone deeper by using JSON
let superClone = JSON.parse(JSON.stringify(obj)) // Turns everything in the object into a string, then parse it (break it down), and then turn that string back into an object
console.log(superClone)

// Be careful with deepclones, if the object is massive then it will take a long time to clone.


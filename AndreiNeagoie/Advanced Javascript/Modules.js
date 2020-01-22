Dependancy resolution // for script tags in the html you are required to put them in the proper order, or else shit gets fucked.

IIFE // Immediately Invoked Function Execution

//js1 first file loaded. 
var myApp = {}

//js2
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

//jQuery uses this: allows us to use $



CommonJS + Browserify
// js1
module.exports = function add(a, b) {       
    return a+b;
}

// js2
var add = require("./add"); // require tells the browser that you need the function from the first javascript file (js1) in the second javascript file (js2)

// Browserify is a MODULE BUNDLER, meaning it runs before the website is online. Reads through all the files and syntax and bundles everything into a single file in the html (eg. bundle.js)

// All of this was because javascript didn't have a 'module system' built into the language
// modules are like building blocks

ES6 + Webpack2
//js1
export const add = (a, b) => a + b;
// or
export default function add() {
    return a + b;
}

// js2 
import { add } from './add';
// or 
import add from './add';


Webpack 
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}
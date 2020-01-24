var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3"); //selects the h3 element and adds it to a variable of "css"
var color1 = document.querySelector(".color1"); // selects the "color1" class in the document
var color2 = document.querySelector(".color2"); // selects the "color2" class in the document
var body = document.getElementById("gradient");

console.log(body);

// color1.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", function() {
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });



// Simpler way or writing the above code

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";    //sets the background of the body to be a linear gradient...

    css.textContent = body.style.background + ";";      // sets the text content of the css to be the background gradient colours
}

// textContent adds text content


//1. Write code so that the colour inputs match the background generated on the first page load. 

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";


//2. Display the initial CSS linear gradient property on page load.

css.textContent = body.style.background + ";"; 

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.

//create a button
//when clicked, the button randomizes number using getRandomColor()

var btn = document.createElement("button");
btn.innerHTML = "Random";                           // not complete
body.appendChild(btn);

function randmColor() {
    let color = "#";
    for(i = 0; i < 6; i++) {
        color += Math.floor((Math.random() * 16)).toString(16);
    }
    return color;
}

var randomColor1 = randmColor();
var randomColor2 = randmColor(); 

btn.addEventListener("click", function() {
    body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";        //only randomizes once and doesn't randomize the color pickers
});

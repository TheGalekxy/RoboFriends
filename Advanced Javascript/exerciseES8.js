// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';        // turtle.padstart(9)
let rabbit = '🐇';        // rabbit.padstart(9)

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//fills the end of the string of 9 characters with =
//Second parameter is the "padString" which gives a string to pad the current string with. Default value is a space( " " )


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

Object.entries(obj).join(' ')

Object.entries(obj).map(value => {
  return value[0] + ' ' + value[1]    // MY SOLUTION!! 
}).join(' ') 

Object.entries(obj).map(value => value.join(" ")).join(' ') // Andreai's Solution

Object.entries(obj).map(value => {
  return value.join(' ')              // Solution more similar to Andreai's
}).join(' ')





// to this:
'my name is Rudolf the raindeer'

// New in ES7: 
// .includes()

'Hellooooo'.includes('o'); // returns true

// can also be used on arrays
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog') // returns true
pets.includes('bird') // returns false

// exponential operator
const square = (x) => x**2 // means x to the power of 2
square(2) // returns 4
square(5) // returns 25

const cube = (y) => y**3 // means y to the power of 3
cube(3) // returns 27
cube(4) // returns 64
const array = [1, 2, 10, 16];

// Can do for, and for each loops on them.

const newArray = array.forEach((num) => {
    num * 2;
} )

console.log(newArray); // returns undefined because that's not how forEach works. forEach just says that it's going to loop over these elements and multiply number by 2

// so you have to...

const double = []

const newArray = array.forEach((num) => {
    double.push(num * 2);
} )

console.log('forEach', double);


// map, filter, reduce methods

const mapArray = array.map((num) => {
   return num * 2                   // always need to return with Map
});                                 // always want to use map when doing a loop

console.log('map', mapArray);       // map iterates, loops through, applies the operation on each element, then storing the result.
                                    // map transforms the array, and creates a new array whereas forEach does a whole bunch of actions based on the array

// Can be written more easily with arrow functions

const mapArray = array.map(num => num * 2);

console.log('arrowMap', mapArray);

// Filter

const filterArray = array.filter(num => {
    return num > 5
})

// Shortform with arrows

const filterArray = array.filter(num => num > 5)

console.log('filter', filterArray)

// Reduce 

const reduceArray = array.reduce((accumulator, num) => {        // accumulator is something that store the information of what happens in the body of the function
    return accumulator + num
}, 0);

console.log('reduce', reduceArray);
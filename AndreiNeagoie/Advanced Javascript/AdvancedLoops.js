const basket = ['apples', 'oranges', 'grapes'];


// 1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// 2  NEW IN ES 5
basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating over the array - simply means going one by one through an item(array) and look at it's items
// Iterating can be done in javascript with "iterables", 
// used for Arrays and Strings as they are considered iterables
for (item of basket) { //"item" can be anything, just a variable name
    console.log(item);
}

// for in - works with objects, allows us to loop over and check the object properties.
// with an object we are not iterating but *enumerating*
// properties of an object are what we consider enumerable

const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000,
}

for (item in detailedBasket) {
    console.log(item)                  
}
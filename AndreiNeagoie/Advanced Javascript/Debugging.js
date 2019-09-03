const flattened = [[0,1], [2,3], [4,5]].reduce( 
    (a, b) => a.concat(b), []);

const flattened = [[0,1], [2,3], [4,5]].reduce( 
    (accumulator, b) => accumulator.concat(b), []);

const flattened = [[0,1], [2,3], [4,5]].reduce( 
    (accumulator, array) => accumulator.concat(array), []);  // array is going to be empty as we start off


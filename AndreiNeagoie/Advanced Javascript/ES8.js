// String Padding
.padstart()
.padEnd()

'Turtle'.padstart(10);
'Turtle'.padEnd(10);

// Trailling commas in functions, parameter lists, and calls

const fun = (a,
             b,
             c,
             d,
             e,
             ) => {
    console.log(a);
}

fun(1,2,3,4,)

// object.values & object.entries

Object.values
Object.entries
Object.keys // Allowed us to do something similar to arrays but on objects

let obj = {
    username0: 'Santa',
    username1: 'Rudolf', 
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})


Object.values(obj).forEach(value => {
    console.log(value);
})                                                                          // SUPER IMPORTANT AND USEFUL

Object.entries(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '')
})


// Async Await
const array2 = [1,[2,3],[4,5]]
array2.flat()

// Returns [1,2,3,4,5]

const array3 = [1,2, [3,4,[5]]]
array3.flat()

// Returns [1,2,3,4[5]]

const array3 = [1,2, [3,4,[5]]]
array3.flat(2) // <-- tells how many times you want to flatten

// Retunrs [1,2,3,4,5]

const entries = ['bob', 'sally',,,,, 'cindy']
entries.flat() 

// Returns ["bob", "sally", "cindy"] 

.flatmap()


const userEmail = '        eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail        '
userEmail.trimStart()
userEmail2.trimEnd()
// He does not mention .trim(), which trims both ends of the string.


userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]

Object.fromEntries(userProfiles) // turns it into an object

const obj = Object.fromEntries(userProfiles) // 
Object.entries(obj) // turns it back into an array


try {
    4 + 5
} catch (error) {
    console.log('you messed up' + error);
            // does this if the code messed up or there is an error
}

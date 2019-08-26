// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray = [];

const exclamation = array.forEach( (user) => {
  return newArray.push(user.username + '!');
});

console.log('exclamation', newArray);



//Create an array using map that has all the usernames with a "?" to each of the usernames

const mapExclamation = array.map((username) => {
  return username.username + "?"
} );

console.log('map', mapExclamation);

//Filter the array to only include users who are on team: red

const filterRed = array.filter( (team) => {
  return team.team === "red"
})

console.log('filter', filterRed)

//Find out the total score of all users using reduce

const reduceArray = array.reduce((accumulator, score) => {
  return accumulator + score.score
}, 0);

console.log('reduce', reduceArray)

// (1), what is the value of i?

index of the array 

// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const mapExclamation = array.map( (items) => {
  return items.items + "!"
} );                                // NOT COMPLETE

console.log('mapExclamation', mapExclamation)

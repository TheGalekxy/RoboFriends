var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AHHHHHH!");
    }
};

console.log(user.spells[1]); /* How to access the array which is inside the object */

user.shout() /* Is a Method */
/* Therefore, shout is a method of user */

var list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123",
    }
];

console.log(list[0].password); /* How to access the object which is inside the array */
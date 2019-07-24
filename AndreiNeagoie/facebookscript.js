var database = [
    {
        username: "Adam",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning",
    },
    {
        username: "Sally",
        timeline: "Javascript is soo cool!",
    }
];

var userNamePrompt = prompt("What is your username?"); /* These store the information provided by the user */
var passwordPrompt = prompt("What is your password?");

function signIn(username, password) {
    if (username === database[0].username && password === database[0].password) /* Checks username entered to the existing username in the database AND (&&) the password for that username to the password in the database */
    { 
    console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt); /* This inputs the information provided by the user in to our function which then checks if the information is correct */
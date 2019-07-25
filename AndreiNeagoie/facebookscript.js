var database = [
    {
        username: "Adam",
        password: "supersecret"
    },
    {
        username: "Sally",
        password: "123"
    },
    {
        username: "Ingrid",
        password: "777"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning",
    },
    {
        username: "Sally",
        timeline: "Javascript is soo cool!",
    },
    {
        username: "Mitch",
        timeline: "JavaScript is dope!"
    }
];

function isUserValid(username, password) { for (var i = 0; i < database.length; i++)
    {
        if(database[i].username === username && database[i].password === password) /* Checks username entered to the existing username in the database AND (&&) the password for that username to the password in the database */
        {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {

    if (isUserValid(username, password)) { 
    console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What is your username?"); /* These store the information provided by the user */
var passwordPrompt = prompt("What is your password?");

signIn(userNamePrompt, passwordPrompt); /* This inputs the information provided by the user in to our function which then checks if the information is correct */
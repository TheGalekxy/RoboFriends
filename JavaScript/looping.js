-var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy",
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!",
];

// for (var i=0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";            /* Adds an exclamation mark to the end of the todos */
// }

// var todosLength = todos.length; /* sets the loop to run 5 times because there are 5 items in the todo before it runs */
// for (var i=0; i < todosLength; i++) {
//     todos.pop();            /* pop removes the last entry in the todos thus removes all the todos as the loop runs */
//     console.log(i);
// }

var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {
//     console.log(todos[i], i);
// }

// todos.forEach(function(todo, i) {
//     console.log(todo, i);                 /* For Each takes an array (the todos in this case) and it asks for an argument on what to do with the array. So the action we want to do on the todos can be represented in a function. */
// })                                  /* The function receives the argument of 'i' which is each individual item in the todos */

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

/* Can also be done with a WHILE loop */

// var counterOne = 0;
// while (counterOne < 10) {       /* Counts up from 0 to 9 */
//     console.log(counterOne);
//     counterOne++;
// }

// var counterOne = 10; 
// while (counterOne > 0) {    /* Counts down from 10 to 1 */      
//     console.log(counterOne);
//     counterOne--;
// }


// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;                   /* While loop checks the conditions of the loop first while the DO loop does the function first and checks after */
// } while (counterTwo > 0);
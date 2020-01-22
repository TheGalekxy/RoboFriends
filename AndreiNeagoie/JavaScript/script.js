/* Function Declaration */

function sayHello() {
    console.log("Hello");
}

sayHello();

/* Function Expression */

var sayBye = function() { /* Anonymous Function - it has no name */
    console.log("Bye");
}

sayBye();

function sing() {
    console.log("AHHHHHHHH");
    console.log("TEEEEEEEE");
}

sing();

function sing2() {
    console.log("laaa deee daaa");
    console.log("laaaaaa");
}

sing2();

function sing(song) {
    console.log(song);
}

sing("Laaa deee daaa");
sing("hellllooooooo");
sing("backstreets back alright");

function multiply(a,b) {
    return a * b;
}

multiply(5,10);

function multiply(a,b) {
    return a * b;
    return a;       /* Won't work because "return" is the last thing to end a function */
    return b;
}

multiply(5,10);

function multiply(a,b) {
    if (a > 10 || b > 10) {
        return "that's too hard";
    }
    else {
        return a * b;
    }
}

multiply(5,10);

function multiply(a,b) {
    return a * b;
}

alert(multiply(3,4));




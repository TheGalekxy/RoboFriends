 // function tag is gone now

 function first() {
     var greet = "Hi";
     function second() {
         alert(greet);
     }
     return second;
 }

 var newFunc = first();
 newFunc();

 // Can now be

 const first = () => {
     const greet = 'Hi';
     const second = () => {
         alert(greet);
     }
     return second;
 }

 const newFunc = first();
 newFunc();


 // Closures - a function ran, the function executed. It's never going to execute again, but it's going to remember that there are references to those variables so the child scope always has access to the parent scope.
// The child scope always has access to the parent scope
// Parent scope doesn't have access to the children

// Currying - The process of converting a function that takes multiple arguments into a function that takes them one at a time.

const multiply = (a, b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
curriedMultiple(3); // sets a as 3
const multiplyBy5 = curriedMultiple(5); // greats a variable that multiplies by 5
multiplyBy5(5); // returns 25
multiplyBy5(10); // returns 50

// Compose - the act of putting two functions together to form a third function where the output of one function is the input of the other
const Compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

Compose(sum, sum)(5); // returns 7

// (f,g) are a function which we give the two 'sum' variables to. That function asks for (a), which we give as 5. Then it breaks down the function from inside to outside.
// f(g(a)), a = 5 so f(g(5)); g = sum, which is equal to 5 + 1, f(6); f is also sum which is now num(6) + 1, which results in 7 


// Avoiding Side Effects, Functional Purity
//Deterministic - no matter what, if our inputs (which are the same) go through a function the return value will always be the same
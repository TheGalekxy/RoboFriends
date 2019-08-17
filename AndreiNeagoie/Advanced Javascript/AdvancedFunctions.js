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
const curriedMultiple = (a) (b) => a * b;
curriedMultiple(3); // sets a as 3
curriedMultiple(3)(4)
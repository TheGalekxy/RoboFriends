// Javascript is a single-threaded language that can be non-blocking. It can only do one thing at a time in the call stack but in order to not block it can be asynchronous with callback functions.

setTimeout() // Async Programming
element.addEventListener('click', () => {
    console.log('click')
})           // Similar to eventListeners, the callback queue has "onClick" "onLoad" "onDone", which wait for a certain action to occur


console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000 ) // 2 seconds
console.log('3');




// WHAT HAPPENS IN THIS EXAMPLE

#1

console.log('1'); // Console.log('1') gets added to the call stack
// Call Stack

// Web API

// Callback Queue

// Event Loop

#2

setTimeout(() => {
    console.log('2');
}, 2000 )  // Console.log('1') gets resolved and removed from the call stack. Now the next thing in line joins, but it is a TIMEOUT....
// Call Stack

// Web API

// Callback Queue

// Event Loop

#3


// Call Stack

setTimeout(), 2000  // TIMEOUT is removed from the callstack because it is part of the WEB API and is delayed to run by 2 seconds
// Web API

// Callback Queue

// Event Loop

#4 

console.log('3'); // Console.log('3') is added to the callstack because it is empty (timeout moves it into the web api domain)
// Call Stack

setTimeout(), 2000  // TIMEOUT remains here
// Web API

// Callback Queue

// Event Loop

#5 

                 // Console.log('3') is executed and removed from the CALL STACK
// Call Stack

setTimeout(), 2000  // After the 2 seconds passes, run the function in the TIMEOUT
// Web API

// Callback Queue

// Event Loop

#6


// Call Stack


// Web API

callback()      //the timeout is done so we now have a callback
// Callback Queue

// Event Loop - checks continuously to see if the call stack is empty, if it is, it checks the callback queue

#7 

callback()      //the event loop sends the callback into the callstack because the call stack is empty. Callback() runs the function that was originally in the TIMEOUT
// Call Stack

// Web API

// Callback Queue

// Event Loop - checks continuously to see if the call stack is empty, if it is, it checks the callback queue

#8 

console.log('2'); // because console.log('2') was what was originally in the timeout the call back adds it to the callstack and it runs
// Call Stack

// Web API

// Callback Queue

// Event Loop - checks continuously to see if the call stack is empty, if it is, it checks the callback queue


#9 

                //everything is not cleared from the callstack
// Call Stack

// Web API

// Callback Queue

// Event Loop - checks continuously to see if the call stack is empty, if it is, it checks the callback queue



// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("Click!!!");            // every time the button is clicked "click!!!" is registered in the console
// })

// button.addEventListener("mouseenter", function() {
//     console.log("Enter!");          // every time the curser enters the button area "Enter!" is registered in the console
// })


// button.addEventListener("mouseleave", function() {
//     console.log("Leave!");
// })

var button = document.getElementById("enter");  // selects the button with the id of "enter"
var input = document.getElementById("userinput"); // selects the text input area with the id of "userinput"
var ul = document.querySelector("ul"); // selects the first "ul" in the document

function inputLength() {            // creates a function for the input length to be used in the event listener function
    return input.value.length;
}

function createListElement() {      // a function that creates a list element to be used in the event listener
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick );// adds an eventListener to the button so that when the button is clicked it runs the function below

input.addEventListener("keypress", addListAfterKeypress ); // adds an eventListener to the input so that when the input is has keyboard presses it runs the function below
    


// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!!!");
// })

// "mouseenter" and "mouseleave" are also events that can be used instead of "click"

var button = document.getElementById("enter");     /* sets the specific elements/id's to variables to make it more simple */
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {      /* Listens for a "click" event from the mouse on the button */
    if (input.value.length > 0) { /* Makes sure the input to be added to the list is over 0 letters */
    var li = document.createElement("li");      /* Creates an li element */ 
    li.appendChild(document.createTextNode(input.value)); /* Adds the text to the previously created li */
    ul.appendChild(li); /* Adds the li to the end of the ul */
    input.value = ""; /* Makes the input empty after adding the last input to the list */
}
})

input.addEventListener("keypress", function(event) {      /* Listens for a keypress  */
    if (input.value.length > 0 && event.keyCode === 13) { /* Makes sure the input to be added to the list is over 0 letters and the key is enter/13 */
    var li = document.createElement("li");      /* Creates an li element */ 
    li.appendChild(document.createTextNode(input.value)); /* Adds the text to the previously created li */
    ul.appendChild(li); /* Adds the li to the end of the ul */
    input.value = ""; /* Makes the input empty after adding the last input to the list */
}
})


/* Same thing as above but written more efficiently */

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");      /* Creates an li element */ 
    li.appendChild(document.createTextNode(input.value)); /* Adds the text to the previously created li */
    ul.appendChild(li); /* Adds the li to the end of the ul */
    input.value = ""; /* Makes the input empty after adding the last input to the list */
}

button.addEventListener("click", function() {      /* Listens for a "click" event from the mouse on the button */
    if (inputLength() > 0) { /* Makes sure the input to be added to the list is over 0 letters */
    createListElement();
}
})

input.addEventListener("keypress", function(event) {      /* Listens for a keypress  */
    if (inputLength() > 0 && event.keyCode === 13) { /* Makes sure the input to be added to the list is over 0 letters and the key is enter/13 */
    createListElement();
}
})

/* An Even simpler way of writting it */ 

var button = document.getElementById("enter");     /* sets the specific elements/id's to variables to make it more simple */
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");      /* Creates an li element */ 
    li.appendChild(document.createTextNode(input.value)); /* Adds the text to the previously created li */
    ul.appendChild(li); /* Adds the li to the end of the ul */
    input.value = ""; /* Makes the input empty after adding the last input to the list */
}

function addListAfterClick() {
    if (inputLength() > 0) { /* Makes sure the input to be added to the list is over 0 letters */
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { /* Makes sure the input to be added to the list is over 0 letters and the key is enter/13 */
        createListElement();
    }
}

input.addEventListener("keypress", addListAfterKeypress);
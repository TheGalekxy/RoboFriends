var button = document.getElementById("enter");     /* sets the specific elements/id's to variables to make it more simple */
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");      /* Creates an li element */ 
	var btn = document.createElement("button"); // Creates a button and sets it to the variable "btn"
	li.appendChild(document.createTextNode(input.value)); /* Adds the text to the previously created li */	
	
	li.addEventListener("click", function() {
		var finished = this.classList.toggle("done"); 	// add the toggle of the "done" class to the newly created li
	});

	btn.appendChild(document.createTextNode("Delete")); //adds the text "Delete" to the button
	li.appendChild(btn); //adds the Delete button to the end of the li
	btn.addEventListener("click", function() {
		btn.parentElement.remove();			// Deletes the parent element of the delete button(btn) which is the li associated with it
	});

	// btn.addEventListener("click", function() {
	// 	li.classList.toggle("done");
	// });

	ul.appendChild(li); /* Adds the li to the end of the ul */
	input.value = ""; /* Makes the input empty after adding the last input to the list */
}

function addListAfterClick() {
    if (inputLength() > 0) { /* Makes sure the input to be added to the list is over 0 letters */
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { /* Makes sure the input to be added to the list is over 0 letters and the key is enter/13 */
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function toggleClass(event) {
	for (i = 0; i < li.length; i++) {
		var li = document.getElementsByName("li");
		li[i].addEventListener("click", toggleClass);
	}
	event.target.parentNode.classList.toggle("done");
};



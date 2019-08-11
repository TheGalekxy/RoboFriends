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

ul.addEventListener("click", function(event) {
	if (event.target.classList.contains("del")){
		event.target.parentElement.remove();
	} else {
		event.target.classList.toggle("done");
	}
});



//SOMEONE ELSES SOLUTION

// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");
// var li = document.querySelectorAll("li");
 
// function inputLength() {
//     return input.value.length;
// }
 
// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
 
//     // toggle class for added item
//     li.addEventListener('click', function() {
//         this.classList.toggle("done");
//     });
 
//     // create delete button for added item
//     var btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     li.appendChild(btn);
 
//     // delete added item
//     btn.addEventListener('click', function () {
//         this.parentNode.remove(this);
//     });
// }
 
// function addListAfterClick() {
//     if (inputLength() > 0) {
//         createListElement();
//     }
// }
 
// function addListAfterKeypress(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
// }
 
// // toggle class when the list is clicked
// function toggleClass() {
//     for (var i = 0; i < li.length; i++) {
//         li[i].addEventListener('click', function () {
//             this.classList.toggle("done");
//         });
//     }
// }
 
// // create delete buttons
// function createDeleteBtn() {
//     for (var i = 0; i < li.length; i++) {
//         var btn = document.createElement("button");
//         btn.innerHTML = "Delete";
//         li[i].appendChild(btn);
//         // remove list when clicked on the delete button
//         btn.addEventListener('click', function () {
//             this.parentNode.remove(this);
//         });
//     }
// }
 
// toggleClass();
// createDeleteBtn();
 
// button.addEventListener("click", addListAfterClick);
 
// input.addEventListener("keypress", addListAfterKeypress);
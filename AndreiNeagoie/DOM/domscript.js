var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


/* What I've written */ 
var todosLength = document.querySelectorAll("li").length; //working
var li = document.querySelectorAll("li");
console.log(li)

for (var i = 0; i < todosLength; i++) {
	
}

function toggleAfterClick() {
	if (li.classList.contains("done")) {
		Document.querySelector(li).classList.toggle(done);
	}
	else { Document.querySelector(li).classList.toggle(done);	}
	

	
}

li.addEventListener("click", toggleAfterClick);




// Buttons

function addButtons() {

}
var deleteButton = document.createElement("button");

button.innerHTML = "Delete";
li.appendChild(button);

// NEED TO CREATE A LOOP TO CHECK FOR AMOUNT OF li's to add on to!!
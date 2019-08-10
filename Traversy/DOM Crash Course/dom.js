// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document); Shows all the properties and methods attached to the document object
// console.log(document.domain); Gives you the domain name
// console.log(document.URL); Gives you the url
// console.log(document.title); Gives you the title of the page
// //document.title =  123; sets the title to "123"
// console.log(document.doctype); shows the doctype 
// console.log(document.head); show's the head and everything that is a child of head
// console.log(document.body); show the body and all it's children
// console.log(document.all); shows the whole document
// console.log(document.all[10]); Show's the 10th element in the document
// // document.all[10].textContent = 'Hello'; Changes the text content of the 10th element to "Hello" (not the way you want to select things)
// console.log(document.forms[0]); Grabs the 1st form of the document
// console.log(document.links); shows all the links in the document
// console.log(document.images); show's all the images 

//Selectors

// GETELEMENTBYID //
// console.log(document.getElementById('header-title')); getting the element by it's id of "header-title"
// var headerTitle = document.getElementById('header-title'); adding the element pulled in the last line to a variable
// var header = document.getElementById('main-header'); adds the element with id 'main-header' to the header variable
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; changing the text content of our new variable to "hello"
// headerTitle.innerText = 'Goodbye'; cheanging the text content of our variable to "Goodbye", does not ignore STYLING
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>'; edits the html to add an h3
// header.style.borderBottom = 'solid 3px #000'; changes the border-bottom style of header to "solid 3px #000"

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item'); sets all elements with the class name "list-group-item" to the variable 'items'
// console.log(items); grabs all the items
// console.log(items[1]); grabs the 2nd item in the variable
// items[1].textContent = 'Hello 2'; changes the text content of the second item in the variable to 'Hello 2'
// items[1].style.fontWeight = 'bold'; changes the font weight style of the second item in the variable to 'bold'
// items[1].style.backgroundColor = 'yellow'; changes the background colour style of the second item in the variable to 'yellow

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4'; DOES NOT WORK BECAUSE IT IS AN HTML COLLECTION, NOT AN ARRAY. WE HAVE TO LOOP THROUGH THE ITEMS TO DO THIS

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4'; Makes all the li have a black background
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header'); sets the elements with the selector #main-header to the variable header
// header.style.borderBottom = 'solid 4px #ccc'; adds a border-bottom to the header var

// var input = document.querySelector('input'); setting the input to a variable
// input.value = 'Hello World'; setting the input value through the variable

// var submit = document.querySelector('input[type="submit"]'); selecting all the inputs that are submit type
// submit.value="SEND"; setting the submit type to send.

// var item = document.querySelector('.list-group-item'); 
// item.style.color = 'red';        Gets the first item 

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';  gets the last item

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; selects the 2nd item in the list

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title'); gets all the titles

// console.log(titles);
// titles[0].textContent = 'Hello'; changes the text content for the first title to hello

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


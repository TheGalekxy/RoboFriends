// reference type

[] === [] // returns 'false'

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2 // returns 'true'
object1 === object3 // returns 'false'

// context vs scope

function name() {
    let a = 4 // new scope
}

            // context tells you where we are within the object

console.log(this)   
console.log(this === window) // returns 'true'
this.alert("hello") // brings up an alert in the window (browser)

this // refers to whatever object that it is inside of

function a() {
    console.log(this)   // brings up the window
}

const object4 = {
    a: function() {
        console.log(this)       // this is now the object
    }
}

// instantiation -  when you make a copy of an object a re-use the code

class Player {      // class is something you want to make a copy of... Class is saying "Hey, we're probably going to make a copy of this object"
    constructor(name, type) {       // constructor means that every time you make a copy of the Player class the constructor function runs and will then create the properties of name and type
        console.log('player', this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)         // template strings
    }
}       

class Wizard extends Player {           // You want to extend (add on to) on whatever Player has
    constructor(name, type) {       // must have constructor because of the class
        super(name, type)            // must also call on the constructor class of player using super
        console.log('wizard', this)
    }
    play()  {
        console.log(`Weeeeee I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');         // 'new' keyword says "Hey, make a new instance of 'Wizard'."
const wizard2 = new Wizard('Shawn', 'Dark Magic');      // 'wizard' uses some functionality from the 'player' and adds some of it's own.
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";     //Ternary Operator

var automatedAnswer = "Your account # is " + ( isUserValid(false) + "1234" : "not available");

function condition() {
    if(isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access Denied";
    }
}

var answer2 = condition();

//Switch Statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break; 
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}
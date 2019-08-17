var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}


/* Function Declaration - Mandatory Prompt */ 

function checkDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

/* Function Expression - Mandatory Prompt */


var checkDriverAge2 = function() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
} 

/* Function Declaration - No Prompt */ 

function checkDriverAge(age) { /* adding age to the function as an argument makes the function require an age already and makes the var "age" obsolete in the function itself */
    

    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
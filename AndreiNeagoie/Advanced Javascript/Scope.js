// Root Scope (window)
var fun = 5;

function funFunction() {
    //child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "byee";
    console.log(1, fun);
}

function funestFunction() {
    //child scope
    fun = "ahhhh";
    console.log(1, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
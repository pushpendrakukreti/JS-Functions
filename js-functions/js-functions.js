//Difference b/w Function Statement and Function Expression is hoisting
// a();
// b();

//Function Statement aka Function Declaration
function a() {
    console.log("a called");
}

//Function Expression
var b = function () {
    console.log("b called");
}

//Anonymous Function
var c = function () {
    console.log("c called sum = " + (2 + 5));
}

//Named Function Expression
var d = function abc() {
    console.log("d called");
}

a();
b();
c(1, 2);
d();

//Difference b/w Parameters & Arguments?
var e = function (param1, param2) {     //param1, param2 are parameters
    console.log("e called, [10 * 15 = " + (param1 * param2) + "]");
}

e(10, 15);  //10 and 15 are arguments

//First Class Functions or First Class Citizens
/* The ability to use functions as values and can be passed as
an argument to another function and can be returned from the functions */

var f = function (p1) {
    console.log(p1);
}

f(function () { console.log("f called"); });

//Arrow functions
var arrowFunc = () => {
    console.log("Arrow Function called");
}

arrowFunc();
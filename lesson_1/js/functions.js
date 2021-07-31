"use strict";

// functions

function calc(a, b) {
    return a + b;
}

console.log(calc(calc(5, 4), calc(10, 20)));

console.log(calc(5, 4));
console.log(calc(56, 21));
console.log(calc(15, 32));


let showMessage = function () {
    console.log("Hello!"); 
};

showMessage();

const returner = (a, b) => a + b; // arrow func

console.log(returner(5, 4));
console.log(returner(100, 200));
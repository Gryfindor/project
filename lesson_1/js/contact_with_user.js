"use strict";

//alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// let answer = prompt("Are u 18 yo?", "18"); // string
// console.log(answer); // string
// console.log(typeof(answer)); // string


// answer = +prompt("Are u 18 yo?", "18"); // number
// console.log(answer); // number
// console.log(typeof(answer)); // number

const answers = [];

answers[0] = prompt('What is yr name?', '');
answers[1] = prompt('What is yr surname?', '');
answers[2] = prompt('How old ar you?', '');

document.write(answers);
console.log(typeof(answers));
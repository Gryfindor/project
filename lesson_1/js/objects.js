"use strict";

let number = '4.6'; // number

console.log(4/0); // Infinity
console.log('name' * 9); // Not a Number (NaN)

const person = 'alex'; // string

const bool = true; // bool

const nul = null; // null

let und;
console.log(und); // undefined

const obj = {
    name: 'John', // string
    age: 25, // int
    isMarried: false, // bool
    childrens: ['Mikasa', 'Eren']
}; // object

console.log(obj.age);
console.log(obj["age"]);
console.log(obj.childrens);


let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []]; // array
console.log(arr[0]);



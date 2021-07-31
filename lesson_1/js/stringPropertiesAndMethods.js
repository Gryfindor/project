"use strict";

const str = 'test';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); // поиск подстроки (т.е есть ли она там)

const logg = "script.js";
console.log(logg.slice(0, -3)); 
console.log(logg.substring(7, 10));
console.log(logg.substr(3, 5));

const num = 12.2;
console.log(Math.round(num));

const pixels = "12.2px";
console.log(Math.round(pixels.slice(0, -2))); // 12
console.log(parseInt(pixels)); // 12

console.log(parseFloat(pixels)); // 12.2s   


const arr = [1, 2, 3];
console.log(arr.length);
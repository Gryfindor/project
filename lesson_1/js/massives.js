"use strict";

const arr = [1, 2, 3, 6, 8];

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

//arr.pop();
arr.push(10);

console.log(arr);

//for (let i; i < arr.length; i++) {
  //  console.log(arr[i]);
//}


for (let value of arr) {
    console.log(value);
}


const str = prompt("", "");
const products = str.split(", ");
console.log(products);


const names = ['Jhon', 'James', 'Jacke', 'Jacob'];
console.log(names.join(", "));

const numbers = [1, 5, 4, 10, 100, 29, 38, 2, 3,];
console.log(numbers.sort(function (a, b) {
    return a - b;
}));
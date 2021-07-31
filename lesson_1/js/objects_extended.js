"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function () {
        console.log("test");
    }
};

//console.log(Object.keys(options)); // ключи объекта
//console.log(Object.keys(options).length); // число объектов

//options.makeTest(); // метод объекта

const {border, bg} = options.colors; // деструктуризация объекта
console.log(border);
console.log(bg);


console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0; // счетчик

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);         
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);


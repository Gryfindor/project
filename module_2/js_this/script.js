"use strict";   

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
// showThis(4, 5);

const obj = {
    a: 20,
    b:15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    },
};

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'jhon'
};

// sayName.call(user, 'Johnson'); // через запятую
// sayName.apply(user, ['Jhonson']); // через массив

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 1) обычная функция: this = window, но если 'use strict' this = undefined
// 2) Контекст у методов объекта - сам объект
// 3) This в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     // console.log(this);
//     this.style.backgroundColor = 'red'; // OK
// });

btn.addEventListener('click', () => {
    // console.log(this);
    this.style.backgroundColor = 'red'; // error
});

const ob = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

ob.sayNumber();

const double = a => a * 2;

console.log(double(4));
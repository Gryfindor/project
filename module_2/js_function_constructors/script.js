"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello, ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name}, left the chat`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 30);
ivan.hello();
alex.hello();

ivan.exit();
"use strict";

console.log('arr' + ' - object'); 

let incr = 10,
    decr = 10;

// postfiks

incr++;
decr--;

console.log(incr);
console.log(decr);

// prefiks

console.log(++incr);
console.log(--decr);


console.log(2*4 == '8'); // равенство -- true
console.log(2*4 === '8'); // строгое равенство -- flase

const isChecked = true,
      isClosed = true;

console.log(isChecked && isClosed); // оператор 'и' 'and'

console.log(isChecked || isClosed); // оператор 'или' 'or'

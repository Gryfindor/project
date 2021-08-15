"use strict";

console.log([] + false - null + true); // NaN

console.log([] + 1+ 2); // 12

console.log("1"[0]); // 1

console.log(2 && 1 && null && 0 && undefined); // null

// && запинается на лжи
// || запинается на правде

console.log(0 || "" || 2 || null); // 2
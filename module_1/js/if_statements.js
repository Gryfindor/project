"use strict";

if (4 == 9) {
    console.log("OK");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    //console.log("Error");
}   else if (num > 100) {
    //console.log("too much");
} else {
    //console.log("Ok");
}

//(num == 50) ? console.log("Ok!") : console.log("Error"); // if в одну строку

const number = 51;

switch (number) {
    default:
        console.log("Not this time");
        break;
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("Too much");
        break;
    case 50:
        console.log("Ok");
        break;    
}

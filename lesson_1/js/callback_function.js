"use strict";


// callback functions

function learnLang (lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

function first () {
    console.log("Hello");
}

learnLang('js', first);
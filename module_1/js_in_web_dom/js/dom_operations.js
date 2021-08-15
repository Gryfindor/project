"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

//for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'green';
//}

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
//const text = document.createTextNode('Hello');

div.classList.add('black');

//document.body.append(div);

wrapper.append(div);
//wrapper.appendChild(div);

//wrapper.prepend(div);

//hearts[0].before(div);

//wrapper.insertBefore(div, hearts[1]);

//hearts[0].after(div);

//circles[0].remove();

//wrapper.removeChild(hearts[1]);

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

//div.innerHTML = '<h1>Hello World</h1>';
//div.textContent = 'Hello';

//div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); добавление html элемментов

//console.log(box);

//console.log(btns[0]);


//console.log(circles);


//console.log(hearts);

//hearts.forEach(item => {
//    console.log(item);
//});

 
//console.log(oneHeart);

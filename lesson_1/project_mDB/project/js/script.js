/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv');
const advImages = adv.querySelectorAll('img');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const promoItem = document.querySelectorAll('.promo__interactive-item');

promoItem.forEach((item, i) => {
    item.textContent = `${i+1}. ` + movieDB.movies.sort()[i];
});

const path = "'img/bg.jpg'";

bg.style.backgroundImage = `url(${path})`;

console.log(bg);

genre.textContent = 'Драма';

console.log(advImages);

//const div = document.createElement('div');
//div.style.width = '300px';
//div.style.height = '162.4px';

//advImages.forEach(item => {
//    item.replaceWith(div);
//});

advImages.forEach(item => {
    item.remove();
});


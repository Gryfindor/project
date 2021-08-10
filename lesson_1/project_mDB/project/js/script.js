/* Задания на урок 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};


const adv = document.querySelector('.promo__adv'),
      advImages = adv.querySelectorAll('img'),
      bg = document.querySelector('.promo__bg'),
      genre = bg.querySelector('.promo__genre'),
      promoList = document.querySelector('.promo__interactive-list'),
      input = document.querySelector('.adding__input'),
      acceptButton = document.querySelector('button'),
      
      inputs = document.querySelectorAll('input');


let favouriteFilm;

inputs.forEach((item, i) => {
    if (item.type == "checkbox") {
        favouriteFilm = item;
    }
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
   
console.log(promoList);


const movie = {
    movieShow: () => {
        promoList.innerHTML = "";
        movieDB.movies.sort().forEach((item, i) => {
            promoList.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1}. ${item} 
                    <div class="delete" data-index="${i + 1}"></div>
                </li>
            `;   
        });
    },
    movieAdd: () => {
        movie.movieShow();
        movie.movieRemove();
    },
    movieRemove: () => {
        movie.movieShow();
        document.querySelectorAll(".delete").forEach((item) => {
            item.addEventListener('click', (event) => {
                
                if (parseInt(event.target.dataset.index) === 1 || parseInt(event.target.dataset.index) === movieDB.movies.length) {
                    movieDB.movies.sort().splice(parseInt(event.target.dataset.index) - 1, parseInt(event.target.dataset.index));    
                } else if (parseInt(event.target.dataset.index) >= 2){
                    movieDB.movies.sort().splice(parseInt(event.target.dataset.index) - 1, 1);
                }
                
                console.log(movieDB.movies);
                movie.movieShow();
                movie.movieRemove();
            });        
        });
    }
};

movie.movieShow();

//const rubbishButtons = document.querySelectorAll('.delete');
//console.log(rubbishButtons);

//rubbishButtons.forEach(item => {
//    item.addEventListener('click', () => {
//        console.log("hello")
//    });
//});

acceptButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (favouriteFilm.checked == true) {
        console.log("Добавляем любимый фильм");
    }

    if (input.value) {
        if (input.value.length > 12) {
            const shorterInput = input.value.slice(0, 11) + "...";
            movieDB.movies.push(shorterInput.toLocaleLowerCase());
            movie.movieAdd();
            //movie.movieRemove();
            input.value = "";
        } else {
            movieDB.movies.push(input.value.toLocaleLowerCase());
            movie.movieAdd();
            //movie.movieRemove();
            input.value = "";
        }
    }
});

movie.movieRemove();

//const rubbishButtons = document.querySelectorAll(".delete");
//movie.movieRemove().forEach((item) => {
//
//    item.addEventListener('click', (event) => {
//       
//        console.log(event.target);
//        console.log(typeof(event.target.dataset.index));
//        console.log(parseInt(event.target.dataset.index) - 1);
//        console.log(parseInt(event.target.dataset.index) - 1);
//        
//        if (parseInt(event.target.dataset.index) === 1) {
//            movieDB.movies.sort().splice(parseInt(event.target.dataset.index) - 1, parseInt(event.target.dataset.index));    
//        } else{
//            movieDB.movies.sort().splice(parseInt(event.target.dataset.index) - 1, parseInt(event.target.dataset.index) - 1);
//        }
//        
//        console.log(movieDB.movies);
//        movie.movieShow();
//    });
//});

//movie.movieRemove();
 
//movie.rubbishButtons.forEach((item) => {
//    item.addEventListener('click', () => {
//        console.log('hello');
//        //movie.movieRemove();
//    });
//});
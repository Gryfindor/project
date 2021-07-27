"use strict";
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let truestatement = true;

while (truestatement) {
    let numberOfFilms = prompt("How much films are u watched?", "");
    
    if (numberOfFilms.lenght < 50 || numberOfFilms.length == 0) {
        numberOfFilms = prompt("How much films are u watched?", "");
        continue;
    }

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
    };

    let movie = prompt("Last film what you watched", ""),
          movieGrade = prompt("Grade of this film", "");
    
    if (movie.lenght < 50 || movie.length == 0) {
        movie = prompt("Last film what you watched", ""); 
        continue;
    }

    if (movieGrade.lenght < 50 || movieGrade.length == 0) {
        movieGrade = prompt("Grade of this film", "");
        continue;
    }

    personalMovieDB.movies[movie] = movieGrade;

    console.log(personalMovieDB);


    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else {
        console.log("Вы киноман");
    }

    truestatement = false;
}





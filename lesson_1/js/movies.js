"use strict";


const numberOfFilms = +prompt("How much films are u watched?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const movie = prompt("Last film what you watched", ""),
      movieGrade = +prompt("Grade of this film", "");

personalMovieDB.movies[movie] = movieGrade;

console.log(personalMovieDB);

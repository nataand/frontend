"use strict";
//УСЛОВИЯ
    
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Один из последних просмотренных фильмов?', ' '),
//       b = prompt('На сколько оцените его?', ' '),
//       c = prompt('Один из последних просмотренных фильмов?', ' '),
//       d = prompt('На сколько оцените его?', ' ');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// const num = 50;
// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;        
// }



//ЦИКЛЫ


// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }







// let i = 0;
// while ( i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ' '),
//     b = prompt('На сколько оцените его?', ' ');
//     i++;

//     personalMovieDB.movies[a] = b;

//     if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }



//ПРАКТИКА ЦИКЛИ

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ' '),
             b = prompt('На сколько оцените его?', ' ');
    
        personalMovieDB.movies[a] = b; 
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
        console.log('error');
        i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if ( personalMovieDB.count < 10 ) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!Ворнінг...');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

//Example
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`;
//     }
// }

// writeYourGenres();
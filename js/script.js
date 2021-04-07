//Тут могут быть только комментарии,строгий режим(use strict) пишется всегда в 1-ой строке
'use strict';
// let currentUserName = prompt('Your name?');
// alert(currentUserName);
// alert(`your name are ${prompt('What\'s your name?','')}`);

//let year = prompt("В каком году родилась?");

// if (year == 1998) { 
//     alert("верно");
//     alert("Great!");
// }else {
//     alert("А вот и не правильно!");
// }


// let year = prompt("В каком году родилась?");

// if (year < 1998){
//     alert("Слишком рано");
// }else if (year > 1998){
//     alert("Поздновато...");
// }

// let result = prompt("Введите число");

// let number = (result > 0) ? "1" :
// (result < 0) ? "-1" :
// (result == 0) ? "0" :
// "Фігня якась";

// alert(number);

// let result = prompt("Введите числа");

// result = (a + b < 4) ? "Мало" : "Много";

// let message = prompt("Введите логин");
// let login = "Сотрудник";
// messаge = (login == "Сотрудник") ? "Привет" :
// (login == "Директор") ? "Здравствуйте" :
// (login == " ") ? "Нет логина" : "";

// let age = prompt("How old are you?", "");
// let massage = (age < 14) ? "false" :
// (age >= 14) ? "true" :
// (age <= 90) ? "true" :
// (age > 90) ? "false" : " ";

// let age = prompt("How old are you?", "");
// alert("true");

// if (age >= 14 && age <= 90);



// let login = prompt("Enter your login");

// if (login == "Admin") {
//     let pass = prompt("Enter your password");
//     if (pass == "pass") {
//         alert("Hello " + login);
//     } else {
//         alert("Invalid password");
//     }
// } else if (login == "" || login == null) {
//     alert("Invalid login");
// } else {
//     alert("Can't find user");
// }







// if (login == "Admin") {
//     let password = prompt("Your password");
//     if (password == "Im boss") {
//         alert("Hello!")
//     }
// } else if (login == "" || login == "null") {
//     alert("I don't now who are you...");
    
// } else if (password == "" || password == "null") {
//     alert("Wrong password");
// }

// let age = 0;

// if (age >= 14 && age <= 90) {
//     console.log('hello world');
// } else {
//     console.log('dfgdfgdfg world');
// }


// for (let i = 0; i < 3; i++) {
//     alert(i);
// }


// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert( "Маловато" );
//         break;
//     case 4:
//         alert( "В точку!" );
//         break;
//     case 5:
//         alert( "Перебор" );
//         break;
//     default:
//         alert( "Нет таких значений" );            
// }


// let arg = prompt("Введите число");
// switch (arg) {
//     case "0":
//     case "1":
//         alert("Один или ноль");
//         break;
        
//     case "2":
//         alert("Два");
//         break;
        
//     case "3":
//         alert("Никогда не выполнится");
//         break;
//     default:
//         alert("Неизвестное значение");        
// }



// let browser = prompt("Каким браузером вы пользуетесь?,");

// if (browser == "Edge") {
//     alert("You've got the Edge!")
// } else if (browser == "Chrome" 
// || browser == "Firefox"
// || browser == "Safari" 
// || browser == "Opera") {
//     alert("Okay we support these browsers too");
// } else {
//     alert("We hope that this page looks ok!");
// }





// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert("Вы ввели число 0");
//         break;

//     case 1:
//         alert("Вы ввели число 1");
//         break;
        
//     case 2:
//     case 3:    
//         alert("Вы ввели число 2, а может и 3");
//         break;
//     default:
//         alert("Other number");        
// }




// function min(a,b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }


// function min(a,b) {
//     return a < b ? a : b;
// }











// let i = 0;
// while (i < 5) { 
//   alert( i );
//   i++;
// }


// do {
//     alert(i);
//     i++;
// } while (i < 5);


// for(;;) {
//     let somePrompt = +prompt("Введите число","")
//         if (somePrompt > 100 || break);
    
//   }


// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today?",
//     "Computer says no."
//     ];
//     //Мені пожарити млинці сьогодні?
    
//     phrases[Math.floor(Math.random() * 5)];
//     "Computer says no."
//     //Гена сьогодні буде працювать дома?
//     phrases[Math.floor(Math.random() * 5)];
//     "Maybe not today?"

    
//     let someNumber [3, 2, 1];
//     someNumber.join( );
 
//     let someNumber = [3, 2, 1];
//     someNumber.join(" is bigger than ");
//     "3 is bigger than 2 is bigger than 1"





//     let puma = {name: "Puma", age: 1, color: "black", luckyNumbers:[2, 8, 14, 33]};
// let jun = {name: "Junior", age: 5, color: "pockmarked", luckyNumbers:[3, 5, 13, 28]};
// let easy = {name: "Easy", age: 6, color: "grey", luckyNumbers:[1, 4, 15, 22]};

// let cats = [puma, jun, easy];

           
// undefined
// cats.length;
// 3
// puma.length;
// undefined
// cats[0]["luckyNumbers"][2];
// 14
// cats[0];
// {name: "Puma", age: 1, color: "black", luckyNumbers: Array(4)}
// cats[0];
// {name: "Puma", age: 1, color: "black", luckyNumbers: Array(4)}age: 1color: "black"luckyNumbers: Array(4)0: 21: 82: 143: 33length: 4__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Objectname: "Puma"__proto__: Object
// cats;
// (3) [{…}, {…}, {…}]





// let lemonChicken = false;
// let beefWithBlackBean = true;
// let sweetAndSourPork = true;

// if(lemonChicken) {
//     alert("Great! I'm having lemon chicken!");
// } else if(beefWithBlackBean) {
//     alert("I'm having the beef.");
// } else if(sweetAndSourPork) {
//     alert("Ok, I'll have the pork.");
// } else {
//     alert("Well, I guess I'll have the rice then.");
// }




// let animals = [
//     "Cat",
//     "Fish",
//     "Lemur",
//     "Komodo Dragon"
//   ];
//   for (let i = 0; i < animals.length; i++) {
//     console.log("Awesome " + animals[i]);
//   }
  




// let alphabet = "0123456789abcdifghijklmnopqrstuvwxyz";
// let randomString = "";

// while( randomString.length < 10 ) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// console.log(randomString);



// var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// for (var i = 0; i < animals.length; i++) {
//   animals[i] = "Awesome " + animals[i];
// }

// console.log(animals);


// var input = "javascript is awesome";
// var output = "";

// for (var i = 0; i < input.length; i++) {
//   if (input[i] === "a") {
//     output += "4";
//   } else if (input[i] === "e") {
//     output += "3";
//   } else if (input[i] === "i") {
//     output += "1";
//   } else if (input[i] === "o") {
//     output += "0";
//   } else {
//     output += input[i];
//   }
// }

// console.log(output);











// HUNGMAN


// Повертаємо випадкове слово
let pickWord = function () {
    let words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
    ];

    return words[Math.floor(Math.random() * words.length)];
};


// Повертаємо масив відповідей
let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
    return answerArray;
}


//Використаємо alert щоб показати гравцю його прогрес
let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};


//Використаємо запит на введення, щоб отримати варіанти відповіді
let getGuess = function () {
   return prompt("Guess a letter, or click cancel to stop playing.");
};


// Оновіть масив відповідей та поверніть число, що показує, скільки разів даний варіант відповіді 
// фігурує у слові, щоб масив ramainingLetters міг оновитися
let updateGameState = function (guess, word, answerArray) {
    let appearences = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearences++;
        }
    }
    return appearences;
};


//Скористайтесь alertб щоб привітати гравця та показати відповідь
let showAnswerAndCongratulatePlayer = function (answerArray) {
    showPlayerProgress(answerArray);
      alert("Good job! The answer was " + answerArray.join(""));
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;


while (remainingLetters > 0) { 
    showPlayerProgress(answerArray);
    let guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      let correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;
    }
  }

  showAnswerAndCongratulatePlayer(answerArray);
    
























































// let words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
// ];

// let word = words[Math.floor(Math.random() * words.length)];

// let answerArray = [];
// for (i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// let remainingLetters = word.length;

// while (remainingLetters > 0) {
//     alert(answerArray);

//     let guess = prompt("Guess a letter, or click cancel to stop playing.");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.")
//     } else {
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }

//     }
// }

// alert(answerArray);
// alert("God job! The answer was" + word);





//CALC

// let firstNumber = prompt("Enter first number")
// let secondNumber = prompt("Enter second number")
// let calcOperator = prompt("Enter '-', '+', '/' or '*'")
// let result 

// if (calcOperator === '+') {
//   result = +firstNumber + +secondNumber
// } else if (calcOperator === '-') {
//   result = firstNumber -= secondNumber
// } else if (calcOperator === '*') {
//   result = firstNumber *= secondNumber
// } else if (calcOperator === '/') {
//   result = firstNumber /= secondNumber
// } else {
//   ("Try again")
// }
// alert(Number(result));








// let pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
//   };
  
//   let randomBodyParts = ["Face", "Nose", "Hair"];
//   let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//   let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
  
//   let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
//   pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + " !!! ";








//   let fifthLetter = function (name) {
//     if (name.length < 5) {
//       return;
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
//   };
  
//   console.log(fifthLetter("Nata"));








//   number0 = 777;
// number1 = 36325;
// number2 = 9824;
 
// let add = function (number1, number2) {
//   return number1 + number2;
// }

// let multiply = function (number1, number2) {
//   return number1 * number2;
// }

// console.log(add(multiply(36325, 9824), 777));





// let areArraySame = function (arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
//     return true;
//   };
  
//   console.log(areArraySame([1,2,3], [1,2,3]));
//   console.log(areArraySame([1,2,3], [1,3,3]));
//   console.log(areArraySame([1,2,3], [1,2,3]));
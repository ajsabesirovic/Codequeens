let food = ["apple", "banana", "bread"];
let drinks = ["water", "juice"];

let menu = food.concat(drinks);

let menuString = "Menu: " + menu.join(", ");

console.log(menuString);
console.log("Broj stavki:", menu.length);
console.log("Poslednji element:", menu.at(-1));

// ------------------------------------------

let cart = [];

cart.push("laptop");
cart.push("mouse");
cart.push("headphones");

let removed = cart.pop();

cart.unshift("keyboard", "USB stick");

console.log("Sadržaj korpe:", cart);
console.log("Broj proizvoda:", cart.length);
console.log("Pozicija 'mouse':", cart.indexOf("mouse"));

// ------------------------------------------

let movies = ["Inception", "Titanic", "Matrix", "Avatar"];

let omiljeniFilm = "Interstellar";

if (!movies.includes(omiljeniFilm)) {
  movies.push(omiljeniFilm);
}

console.log("Lista filmova:", movies);

// ------------------------------------------

let waitingList = ["Ana", "Marko", "Jelena", "Stefan"];

waitingList.shift();
waitingList.shift();

waitingList.unshift("Ivana", "Nikola");

let stefanPozicija = waitingList.indexOf("Stefan");
if (stefanPozicija !== -1) {
  console.log("Stefan je u nizu.");
}

console.log("Lista čekanja:", waitingList);
console.log("Stefan čeka:", stefanCeka);
console.log("Pozicija Stefana:", stefanPozicija);

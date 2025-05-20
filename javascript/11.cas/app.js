// Niz (array) je složen (referentni) tip podatka. Sadrži više elemenata koji mogu biti bilo kog tipa.
let colors = ["red", "green", "blue"]; // Definisanje niza pomoću array literala
// Svaki element niza ima svoju poziciju koja se zove indeks.
// Indeksiranje u nizovima počinje od nule, što znači da je prvi element na indeksu 0, drugi na indeksu 1 itd.

// Npr.
// let colors = ["red", "green", "blue", "yellow"];
//               0       1       2       3

// Kako pristupiti elementu pomoću indeksa?
// Koristi se zagrada [] i broj indeksa da bi se došlo do određenog elementa.
console.log(colors[0]); // ispisuje "red"
console.log(colors[5]); // ispisuje undefined jer ne postoji element na toj poziciji. (indeks van granica niza )

// length je svojstvo koje vraća broj elemenata u nizu.
console.log(colors.length); // 3
// Dužina niza (length) je uvek broj elemenata, ali poslednji indeks je length - 1.

// push je metoda koja dodaje jedan ili više elemenata na kraj niza.
// Vraća novu dužinu niza.
colors.push("yellow"); // ["red", "green", "blue", "yellow"]

// pop je metoda koja uklanja poslednji element iz niza.
// Vraća uklonjeni element.
let poslednji = colors.pop(); // poslednji = "yellow", niz: ["red", "green", "blue"]

// unshift je metoda koja dodaje jedan ili više elemenata na početak niza.
// Vraća novu dužinu niza.
colors.unshift("black"); // ["black", "red", "green", "blue"]

// shift je metoda koja uklanja prvi element iz niza.
// Vraća uklonjeni element.
let prvi = colors.shift(); // prvi = "black", niz: ["red", "green", "blue"]

// includes je metoda koja proverava da li određena vrednost postoji u nizu.
// Vraća true ako postoji, false ako ne postoji. Poređenje je case-sensitive (osetljivo na velika/mala slova).
console.log(colors.includes("Red")); // false, jer "Red" !== "red"

// lastIndexOf je metoda koja vraća poslednji indeks na kojem se nalazi određena vrednost u nizu.
// Ako vrednost ne postoji, vraća -1.
console.log(colors.lastIndexOf("redddd")); // -1

// indexOf je metoda koja vraća prvi indeks na kojem se nalazi određena vrednost u nizu.
// Ako vrednost ne postoji, vraća -1.
console.log(colors.indexOf("red")); // 0

let food = ["apple", "walnuts"]; // Novi niz

// concat je metoda koja spaja dva (ili više) nizova u novi niz.
// Ne menja postojeće nizove, već vraća novi niz.
let spojeniNiz = colors.concat(food);
// ["red", "green", "blue", "apple", "walnuts"]

// join je metoda koja spaja sve elemente niza u jedan string.
// Kao separator koristi ono što se navede kao argument (u ovom slučaju razmak).
let joinedString = colors.join(" "); // "red green blue"

// at je metoda koja vraća element na zadatom indeksu.
// Podržava i negativne indekse (npr. -1 za poslednji element).
let drugiElement = colors.at(1); // "green"

// slice je metoda koja vraća kopiju dela niza između dva indeksa.
// Ne menja originalni niz.
let podniz = colors.slice(0, 2); // ["red", "green"]

// splice je metoda koja menja sadržaj niza tako što izbacuje, dodaje ili zamenjuje elemente.
// Prvi argument je početni indeks, drugi je broj elemenata za brisanje.
// Vraća niz izbačenih elemenata i menja originalni niz.
console.log("POČETNA VREDNOST NIZA", spojeniNiz); // Pre promene
console.log("VRAĆENA VREDNOST IZ SPLICE", spojeniNiz.splice(2, 6)); // Izbacuje od indeksa 2 (6 elemenata)
console.log("TRENUTNA VREDNOST NIZA", spojeniNiz); // Niz posle izmene

// Načini za definisanje funkcija u JavaScript-u

// Function declaration vs Function expression (razlikuju se u hoisting-u)

// 1. Function Declaration - klasična definicija funkcije koja se "hoist-uje",
// tj. možeš je pozvati i pre nego što je definisana u kodu.
function funcDeclaration() {}

// 2. Function Expression - funkcija koja je dodeljena varijabli.
// Ne može se pozvati pre definicije jer se ne hoist-uje kao deklaracija.
let funcExpression = function () {}; // funkcija kao izraz

// Primeri sa parametrima:

// Function Declaration sa dva parametra
function saberiDeclaration(a, b) {
  return a + b;
}

// Function Expression sa istom logikom
let saberiExpression = function (a, b) {
  return a + b;
};

// Poziv obe funkcije – deklaracija može pre i posle definicije, izraz samo posle
saberiDeclaration(2, 3);
saberiExpression(2, 3);

// 3. Arrow Function - uvedeno u ES6.
// ( ES tj. Ecmascript je standard za skriptne jezike poput js-a,
// tj. pravila, sintaksa, ponasanje jednog jezika.
// U ES6 odnosno 6. verziji ecmascripta smo dobili arrow funkcije )
// Arrow fn ima kraću sintaksu. Nema svoj this kao obicne funkcije, ali vise o tome kasnije
// Pogodna je za jednostavne funkcije
const funkcija = (a, b) => {
  console.log("first");
  console.log("first");
  console.log("first");
  console.log("first");
  console.log("first");
  return a + b;
};

// Shorthand tehnika
// Ukoliko arrow funkcija treba samo da vrati nesto,
// mozemo samo u istoj liniji bez {} i return pisati to sto zelimo da vratimo iz f-je.
// Takodje ako primamo samo jedan argument ne moramo koristiti ().
const arrowFn = (a) => a + 10;
// umesto
const arrowFnn = (a) => {
  return a + 10;
};

console.log(arrowFn(23)); // Ispisuje: 33

// ---------------------------------------------

// Korišćenje metode .map() nad nizom:
// Map metoda kao argument prima funkciju (takvu funkciju nazivamo callback).
// map() kreira novi niz pozivanjem funkcije za svaki element niza.
// map() ne izvršava funkciju za prazne elemente.
// Ne menja originalni niz, već vraća novi niz sa transformisanim vrednostima.

// Map funkcionise kao for petlja, prolazi kroz niz i na svaki element izvrsi f-ju.
// Povratna vrednost ix funkcije postaje novi element u novom nizu

let niz = [2, 4, 23, 7, 100];

// Dodaje 10 svakom elementu niza
const novi = niz.map((el) => el + 10); // parametar el uvek oznacava trenutni element iz niza

// Vraća kvadrate elemenata niza
const kvadrati = niz.map((el) => el ** 2);

// Alternativa bez arrow funkcije – Function Expression kao callback za map
// const povecaniZa10 = niz.map(function (el) {
//   return el + 10;
// });

// let boje = ["red", "green", "blue"];

// console.log(boje[0]);
// console.log(boje[1]);
// console.log(boje[2]);

// Za uslov (dokle ide i) uvek koristite length, ne racunajte same koliko ima elemenata, nego dinamicki
// for (let i = 0; i < boje.length; i++) {
//   console.log(boje[i]);
// }

// -----------------------------------------------

// Popuni niz s prvih 10 brojeva da izgleda ovako:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let niz = [];
// for (let i = 1; i < 11; i++) {
//   niz.push(i);
// }

// -----------------------------------------------

// Na taj niz dodajte jos 9 brojeva tako da niz sada izgleda:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (let i = 9; i > 0; i--) {
//   niz.push(i);
// }

// -----------------------------------------------

// Ubaciti u niz sledece elemente preko push i unshift
// [10, 9, 8, 7, 6, 5];

// let niz = [];

// for (let i = 10; i > 4; i--) niz.push(i);
// ILI
// for (let i = 5; i < 11; i++) niz.unshift(i);

// -----------------------------------------------

// Izbaciti prva 4 elementa iz niza (10, 9, 8, 7)
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// let nizz = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (let i = 1; i < 5; i++) {
//   niz.shift();
// }

// DOMACI

// 1.
let s = [100, 2, 50]; // zbir = 152
let zbir = 0;
for (let i = 0; i < s.length; i++) {
  zbir += s[i];
}
console.log(zbir);
// 2.
console.log(zbir / s.length);

// 3. i 4.
let n = [100, 2, 3, 45, 0];

let najmanji = n[0];
let najveci = n[0];

for (let i = 1; i < n.length; i++) {
  if (najmanji > n[i]) najmanji = n[i];
  else if (najveci < n[i]) najveci = n[i];
}

// 5.
let nizz = [2, 3, 4, 1, 0, 100, 300];
let brojParnih = 0;

for (let i = 0; i < nizz.length; i++) {
  if (nizz[i] % 2 == 0) {
    brojParnih++;
  }
}

console.log(`U nizu ima ${brojParnih} parnih brojeva.`);

const niz = [2, 3, 4, 5, 40];

// Array metode kao što su map, filter, find, some i every
// imaju tzv. callback funkciju u kojoj možemo koristiti tri parametra:
// 1. trenutniElement – trenutna vrednost iz niza,
// 2. index – pozicija tog elementa u nizu (počinje od 0),
// 3. array – ceo niz nad kojim se metoda poziva.

const x = niz.map((trenutniElement, index, array) => {
  // trenutniElement = svaki element redom
  // index = trenutna pozicija (npr. 0 kad se f-ja izvrsava za prvi el, 1 za drugi el, 2...)
  // array = originalni niz [2, 3, 4, 5, 40]
  return trenutniElement * 2;
});

// ==============================
// SOME i EVERY
// ==============================

// .some() – vraća true ako bar jedan element u nizu ispunjava uslov
// čim nađe prvi koji ispunjava, prekida dalje proveravanje
const barJedanParan = niz.some((el) => el % 2 == 0); // true jer imamo 2, 4, 40 (parni)

// .every() – vraća true samo ako svi elementi u nizu ispunjavaju uslov
// ako makar jedan ne ispunjava – rezultat je false
const sviParni = niz.every((el) => el % 2 == 0); // false jer 3 i 5 nisu parni

// ==============================
// Primer sa index-om
// ==============================

// Proveravamo da li su SVI elementi veći od PRVOG (osim prvog samog)
const x1 = niz.every((trElement, trIndex) => {
  if (trIndex == 0) return true; // prvi preskačemo, tako sto odmah vratimo true (znamo da se za svaki element mora vratiti true kod every da bi krajnja vrednost bila true)
  return trElement > niz[0]; // ostali moraju biti veći od prvog
});

// Skraćen zapis – koristimo OR (||) da preskočimo prvi element
const x2 = niz.every((el, index) => index == 0 || el > niz[0]);
// ako je index == 0 ➜ odmah true
// ako nije, proverava se da li je el > niz[0]

// =====================
// SINHRONI & ASINHRONI KOD – OBJAŠNJENO
// =====================

console.log("1");
//   SINHRONO
// Sinhroni kod se izvršava LINE BY LINE (liniju po liniju).
// JavaScript ne prelazi na sledeću liniju dok se prethodna potpuno ne završi.

// ---------------------
// setTimeout - macrotask primer
// ---------------------
setTimeout(() => {
  console.log("2 - setTimeout (macrotask)");
}, 0);
//   ASINHRONO – MACROTASK
// Asinhroni kod ne blokira izvršavanje – zakazuje se za kasnije.
// setTimeout ide u "macrotask queue" i čeka da se glavni thread oslobodi.
// Ovo se NE izvršava odmah, nego tek nakon što se završi sav sinhroni kod i microtaskovi.

// ---------------------
// Promise - microtask primer
// ---------------------
const prom = new Promise((resolve, reject) => {
  const condition = true;

  // Ovaj deo (unutar konstruktora) je sinhroni kod:
  if (condition) {
    resolve("Bravo - Promise resolved");
  } else {
    reject("Ne brv - Promise rejected");
  }
});
//   Napomena: Konstruktor Promisa radi SINHRONO,
// ali .then i .catch callbackovi se izvršavaju asinhrono (microtask).

prom
  .then((res) => {
    console.log(res, "(microtask)");
  })
  .catch((e) => {
    console.log(e, "(microtask)");
  });
// MICROTASK
// Microtask queue ima PRIORITET – izvršava se odmah nakon sinhronog koda,
// pre bilo kog macrotaska kao što je setTimeout.

console.log("3");
// SINHRONO – ide odmah, jer JavaScript ide redom dok ne naiđe na asinhroni deo.

// ---------------------
// Demonstracija setTimeout i clearTimeout
// ---------------------
const idTimeout = setTimeout(() => {
  console.log("Ovo se neće ispisati jer će biti obrisano");
}, 1000);
// MACROTASK – zakazan da se izvrši posle 1000ms

setTimeout(() => {
  clearTimeout(idTimeout);
  console.log("Timeout obrisan pre izvršavanja (macrotask)");
}, 500);
// MACROTASK – posle 500ms briše prethodni timeout

// ---------------------
// setInterval primer
// ---------------------
let counter = 0;
const id = setInterval(() => {
  console.log("Interval:", counter);
  counter++;
  if (counter == 5) {
    clearInterval(id);
  }
}, 1000);
// MACROTASK – svaki interval callback ide u macrotask queue
// Izvršava se u pravilnim vremenskim razmacima, ali samo kad je main thread slobodan.

// ---------------------
// BLOKIRANJE MAIN THREAD-a
// ---------------------
console.log("Blokiranje počinje");
//  SINHRONO BLOKIRANJE – JavaScript čeka da se ovaj while završi
// pre nego što pređe na sledeću liniju ili izvrši asinhroni kod.
// Dok ovo traje, NIKAKAV setTimeout, setInterval ili Promise callback se ne izvršava.
let i = 0;
while (i < 1000000000) i++;

console.log("Blokiranje završeno");
//   Tek sad event loop može da krene da obrađuje microtaskove i macrotaskove koji su čekali.

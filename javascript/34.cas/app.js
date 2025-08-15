// =====================
// SINHRONI & ASINHRONI KOD – OBJAŠNJENO
// =====================

console.log("1");
//   SINHRONO
// Sinhroni kod se izvršava LINE BY LINE (liniju po liniju).
// JavaScript ne prelazi na sledeću liniju dok se prethodna potpuno ne završi.
// Ovo je tzv. "blocking" ponašanje – blokira dok se ne završi trenutna instrukcija.

// ---------------------
// setTimeout - macrotask primer
// ---------------------
setTimeout(() => {
  console.log("2 - setTimeout (macrotask)");
}, 0);
//   ASINHRONO – MACROTASK
// setTimeout(callback, vreme) zakazuje funkciju da se izvrši nakon
// minimalno "vreme" milisekundi (ovde 0ms).
// Iako je 0ms, callback NE ide odmah, već se stavlja u "macrotask queue"
// i čeka da se:
///   1. završi sav sinhroni kod
///   2. završe svi microtaskovi
// Tek onda Event Loop uzima ovaj zadatak i izvršava ga.

// ---------------------
// Promise - microtask primer
// ---------------------
const prom = new Promise((resolve, reject) => {
  const condition = true;

  // Ovaj deo (unutar konstruktora Promisa) je SINHRONI kod:
  if (condition) {
    resolve("Bravo - Promise resolved");
  } else {
    reject("Ne brv - Promise rejected");
  }
});
//   Napomena: Konstruktor Promisa se izvršava odmah,
// ali .then() i .catch() callbackovi se izvršavaju ASINHRONO u "microtask queue".

prom
  .then((res) => {
    console.log(res, "(microtask)");
  })
  .catch((e) => {
    console.log(e, "(microtask)");
  });
// MICROTASK
// Microtask queue ima VIŠI prioritet od macrotask queue.
// To znači da će se .then() / .catch() izvršiti PRE bilo kog setTimeout-a,
// bez obzira na to da li je setTimeout zakazan za 0ms.

console.log("3");
// SINHRONO – ispisuje se odmah, pre svih asinhronih callbackova.

// ---------------------
// Demonstracija setTimeout i clearTimeout
// ---------------------
const idTimeout = setTimeout(() => {
  console.log("Ovo se neće ispisati jer će biti obrisano");
}, 1000);
// MACROTASK – zakazan da se izvrši posle ~1000ms (1 sekunde)

// clearTimeout(id) – uklanja zakazani timeout pre nego što se izvrši.
setTimeout(() => {
  clearTimeout(idTimeout); // briše gore zakazani timeout
  console.log("Timeout obrisan pre izvršavanja (macrotask)");
}, 500);
// MACROTASK – posle 500ms briše prethodni timeout pre nego što on stigne na red.

// ---------------------
// setInterval primer
// ---------------------
let counter = 0;
const id = setInterval(() => {
  console.log("Interval:", counter);
  counter++;

  // Kada brojač dođe do 5, brišemo interval
  if (counter == 5) {
    clearInterval(id); // prekida zakazivanje
  }
}, 1000);
// setInterval(callback, vreme) – izvršava callback svake "vreme" milisekundi.
// Svaki poziv callbacka ide u macrotask queue.
// Ako main thread nije slobodan, interval može kasniti (nije 100% precizan).

// clearInterval(id) – prekida dalja ponavljanja.

// ---------------------
// BLOKIRANJE MAIN THREAD-a
// ---------------------
console.log("Blokiranje počinje");
//  SINHRONO BLOKIRANJE – dok se ovaj while ne završi,
// JavaScript neće preći ni na jedan asinhroni zadatak.
// To znači da svi setTimeout/setInterval callbackovi i Promise .then() čekaju.

let i = 0;
while (i < 1000000000) i++; // simulacija teškog izračunavanja

console.log("Blokiranje završeno");
//   Tek sada Event Loop može da obradi microtaskove (Promise) i macrotaskove (setTimeout, setInterval)
// koji su čekali dok je glavni thread bio zauzet.

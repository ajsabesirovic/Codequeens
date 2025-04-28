let broj = Number(prompt("unesite broj: "));

// SWICTH naredba omogućava da proveravamo više slučajeva (case-ova) odjednom
switch (broj) {
  case 5: // Ako je broj jednak 5
    console.log("Uneli ste broj 5");
    break; // break prekida izvršavanje switch-a posle pronalaska odgovarajućeg case-a
  case 10: // Ako je broj jednak 10
    console.log("Uneli ste broj 10");
    break; // Prekidamo dalje proveravanje
  default: // Ako nijedan case nije pogođen, izvršava se default
    console.log("Niste uneli ni 5 ni 10");
    break; // break ovde nije obavezan jer je default poslednji
}

// Isto to, ali preko if, else if i else
if (broj == 5) {
  console.log("Uneli ste broj 5");
} else if (broj == 10) {
  console.log("Uneli ste broj 10");
} else {
  console.log("Niste uneli ni 5 ni 10");
}

let mesec = Number(prompt("Unesi mesec: "));

// Demonstracija ponašanja switch-a kada nema break naredbi
switch (mesec) {
  case 1:
    console.log("Januar");
  case 2:
    console.log("Februar");
  case 3:
    console.log("Mart");
    break;
}
// Ovde ako unesemo 1, ispisaće "Januar", "Februar" i "Mart" jer nema break posle case 1 i 2
// Kod prvog pogođenog case-a, nastavlja dalje da izvršava sve naredne case-ove dok ne naiđe na break

// ---------------------------------------------------------

// Bez for petlje bi morali da više puta ponovimo console.log() ručno
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");

// ---------------------------------------------------------

// For petlju koristimo ukoliko zelimo da neki deo koda ponovimo vise puta
// Upotreba FOR petlje:
// for (inicijalizacija; uslov; korak)
for (let i = 1; i <= 10; i++) {
  // let i = 1;      -> Inicijalizacija: postavljamo i da bude 1
  // i <= 10;        -> Uslov: petlja radi dok je i manje ili jednako 10
  // i++             -> Korak: posle svakog kruga, povećavamo i za 1
  console.log("Hello world");
}

// ---------------------------------------------------------

// Izračunavanje zbira prvih 100 prirodnih brojeva
let zbir = 0;
for (let i = 1; i <= 100; i++) {
  zbir += i; // zbir = zbir + i
}
console.log(zbir);

// ---------------------------------------------------------

// Ispis parnih brojeva do 100 korišćenjem koraka (i+=2)
// počinjemo od 2 i svaki sledeći broj povećavamo za 2
for (let i = 2; i < 100; i += 2) {
  console.log(i);
}

// ---------------------------------------------------------

// Ispis parnih brojeva do 100 preko uslova (i+=1)
// krećemo od 1 i povećavamo i za 1, ali proveravamo da li je broj paran
for (let i = 1; i < 101; i += 1) {
  if (i % 2 == 0) {
    // ako je ostatak pri deljenju sa 2 jednak 0, broj je paran
    console.log(i);
  }
}

// ---------------------------------------------------------

// Ispis prvih 100 parnih brojeva (idemo do 200 jer su svaki drugi broj parni)
for (let i = 2; i < 200; i += 2) {
  console.log(i);
}

// ---------------------------------------------------------

// Ispis prvih 100 parnih brojeva koristeći posebnu promenljivu za brojanje
let i = 2; // Početna vrednost i je 2 (prvi paran broj)
for (let brojPARNIH = 0; brojPARNIH < 100; brojPARNIH++) {
  console.log(i); // Ispisujemo trenutni paran broj
  i += 2; // Svaki sledeći paran broj je veći za 2
}

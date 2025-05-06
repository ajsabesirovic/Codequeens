// ===============================
// Primer jednostavne do...while petlje
// ===============================

// let i = 1;

// do {
//   // Kod unutar "do" bloka se izvršava barem jednom, pre nego što se proveri uslov
//   console.log(i);
//   i++;
// } while (i < 11); // Nakon izvršavanja bloka, proverava se da li je i manje od 11

// ===============================
// Obična while petlja
// ===============================

// while (i < 11) {
//   // Ova petlja proverava uslov PRE nego što uđe u telo petlje
//   console.log("while");
// }

// ===============================
// do...while petlja bez promene uslova – izvršiće se samo jednom
// ===============================

// do {
//   console.log("do while");
// } while (i < 11); // Ako je i >= 11, petlja se neće ponavljati, ali se telo ipak jednom izvršava

// =====================================
// 3. ZADATAK – Pogodi broj (do...while)
// =====================================

// let br = Math.floor(Math.random() * 10) + 1; // Generišemo nasumičan broj od 1 do 10
// let guess;
// do {
//   guess = +prompt("Pogodi br: "); // Tražimo od korisnika da pogodi broj
// } while (guess !== br); // Ponavljamo dok ne pogodi

// console.log("Pogodili ste broj"); // Kada pogodi, ispisujemo poruku

// =====================================
// 5. ZADATAK – Provera lozinke (do...while)
// =====================================

// const pass = "tajna123"; // Ispravna lozinka
// let guess;
// do {
//   guess = prompt("Unesite lozinku: "); // Korisnik unosi pokušaj
// } while (guess !== pass); // Ponavljamo sve dok ne unese ispravnu lozinku

// =====================================
// 10. ZADATAK – Lozinka sa 3 pokušaja
// =====================================

// let pokusaji = 0;
// let guess;

// do {
//   guess = prompt("unesi lozinku: ");
//   pokusaji++;
//   if (guess == "js123") {
//     console.log("Dobrodosli"); // Ako je tačno – izlazimo iz petlje
//     break;
//   } else if (pokusaji === 3) {
//     console.log("Pristup odbijen"); // Ako nije tačno ni iz trećeg puta – odbija se pristup
//   }
// } while (pokusaji < 3);

// =====================================
// UGNJEŽDENE PETLJE – Petlja unutar petlje
// =====================================

// Primer jednostavne ugnježdene petlje:
// for (let i = 1; i < 11; i++) {
//   console.log("SPOLJASNJA PETLJA"); // Ova se izvršava 10 puta

//   for (let j = 1; j < 11; j++) {
//     console.log("UNUTRASNJA PETLJA"); // Ova se izvršava 10 puta za svaki jedan i
//   }
// }

// =====================================

// Ovde se koristi ugnježdena petlja da se prikaže tablica množenja
// Ako
// spoljna petlja ide n puta
// unutrašnja m puta

// 👉 Ukupan broj izvršavanja unutrašnjeg koda = n * m

for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}
// Spoljasnja for petlja (i) se izvršava 3 puta: za i = 1, 2 i 3.
// Za svaki prolaz spoljasnje petlje, unutrašnja petlja (j) se takođe izvršava 3 puta.
// Dakle ukupno 9 puta.
// Za svako i, j promeni 3 vrednosti, znaci i=1 (j=1,j=2,j=3), u sledecoj iteraciji i=2 (j=1,j=2,j=3 (jer se unutrasnja for petlja iznova izvrsava))

// Varijanta tablice množenja za 5, 10, 15
for (let i = 5; i < 16; i += 5) {
  for (let j = 1; j < 4; j++) {
    console.log(`${i}*${j}=${i * j}`);
  }
}

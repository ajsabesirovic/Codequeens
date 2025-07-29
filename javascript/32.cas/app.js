// Promise je objekat koji predstavlja eventualni uspešan ili neuspešan rezultat neke asinhrone operacije.
// On se koristi kada želimo da radimo sa podacima koji neće biti dostupni odmah (npr. fetch sa servera).

// Pravimo novi Promise objekat.
// Promise konstruktoru prosleđujemo funkciju koja prima dva parametra: resolve i reject.
// - resolve se poziva ako se operacija uspešno završi.
// - reject se poziva ako operacija ne uspe.
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // Simulacija neke logike (može biti rezultat neke funkcije, API poziva itd.)

  if (condition) {
    // Ako je uslov ispunjen, pozivamo resolve i prosleđujemo rezultat.
    resolve("Uspesno izvrsen promise");
  } else {
    // Ako nije, pozivamo reject i prosleđujemo razlog (grešku).
    reject("Neuspesno izvrsen promise");
  }
});

// Ovde obrađujemo rezultat Promise-a.

// .then() se koristi da obradimo uspešan ishod (kada je pozvan resolve).
myPromise
  .then((result) => {
    // Ova funkcija se izvršava samo ako je Promise uspešno završen.
    console.log("Then", result); // Ispis: Then Uspesno izvrsen promise
  })

  // .catch() se koristi da obradimo greške (kada je pozvan reject).
  .catch((result) => {
    // Ova funkcija se izvršava samo ako je došlo do greške.
    console.log("Catch", result); // Ispis: Catch Neuspesno izvrsen promise
  })

  // .finally() se uvek izvršava, bez obzira na to da li je Promise uspešan ili neuspešan.
  .finally(() => {
    console.log("Finally"); // Ispisuje se u svakom slučaju
  });

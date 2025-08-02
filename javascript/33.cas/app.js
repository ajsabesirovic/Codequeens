// fetch() je ugrađena funkcija u JavaScriptu koja šalje HTTP zahtev serveru.
// Vraća Promise koji se, kada server odgovori, rešava u Response objekat.

// ---------------------- GET ZAHTEV ----------------------
// GET je podrazumevana HTTP metoda — koristi se za dobijanje podataka sa servera.

fetch("https://jsonplaceholder.typicode.com/posts/2") // Šaljemo GET zahtev za post sa ID-em 2
  .then((res) => {
    // Prvi then() dobija Response objekat
    // Response sadrži status, headers, i body (ali body nije automatski JSON i ne mozemo da mu pristupimo direktno)
    return res.json(); // Metoda json() čita body (telo odgovora) i pretvara ga u objekat (takodje vraća Promise)
  })
  .then((res) => {
    // Ovde dobijamo podatke iz odgovora kao običan objekat
    console.log(res);
  })
  .catch((res) => {
    // Ako fetch ili json() ne uspeju (npr. nema interneta), catch() će se pozvati
    console.log("Catch", res); // Ispisujemo grešku u konzoli
  });

// ---------------------- POST ZAHTEV ----------------------
// POST metoda se koristi kada želimo da pošaljemo podatke serveru (npr. kreiranje novog posta)

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // HTTP metoda POST znači: šaljemo podatke serveru
  headers: {
    // Headers (zaglavlja) definišu vrstu podataka koje šaljemo
    "Content-type": "application/json", // Kažemo serveru da je telo zahteva JSON format
  },
  body: JSON.stringify({
    // body sadrži podatke koje šaljemo — mora biti string, pa koristimo JSON.stringify()
    id: 101, // id posta (neće biti stvarno kreiran jer je ovo fake API)
    userId: 21,
    title: "Hello",
    body: "This is body",
  }),
})
  .then((res) => {
    // Prvi then() dobija Response objekat
    return res.json(); // Pretvaramo telo odgovora u JavaScript objekat
  })
  .then((res) => {
    console.log(res); // Ispisujemo odgovor servera — kreirani "post"
  });

// ---------------------- OSNOVNA STRUKTURA FETCH-a ----------------------
/*
fetch(URL, {
  method: "GET" ili "POST" ili "PUT" ili "DELETE", // HTTP metoda
  headers: {
    "Content-Type": "application/json" // Tip podataka koje šaljemo (kod POST/PUT)
  },
  body: JSON.stringify(podaci) // Samo kod POST/PUT — podaci koje šaljemo
})
  .then(response => response.json()) // Prvo pretvaramo Response u JSON
  .then(data => { ... }) // Onda koristimo podatke
  .catch(error => { ... }) // Ako dođe do greške
*/
// Kad je metoda koju zelimo da koristimo GET, u tom slucaju mozemo da izostavimo drugi argument.

// ---------------------- HTTP METODE ----------------------
/*
GET     → Uzimanje podataka (npr. lista postova)
POST    → Slanje novih podataka (npr. dodavanje posta)
PUT     → Potpuna izmena postojećeg resursa
PATCH   → Delimična izmena resursa
DELETE  → Brisanje resursa
*/

// --------------------- POZNATI HTTP STATUS KODOVI ----------------------
/*
200 OK         → Zahtev uspešno izvršen
201 Created    → Resurs uspešno kreiran (često kod POST)
400 Bad Request→ Pogrešan zahtev
401 Unauthorized → Nemaš pravo pristupa
404 Not Found  → Resurs nije pronađen
500 Server Error → Greška na serveru
*/

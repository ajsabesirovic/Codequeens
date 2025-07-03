// Objekat u js-u je kolekcija key-value parova
// Svaka vrednost je dodeljena određenom ključu (key), i to čini jedan par
// Ključevi se u pozadini uvek tretiraju kao stringovi, čak i ako ih napišemo bez navodnika.

const osoba = {
  // Ključ "ime" ima vrednost "Ajsa"
  ime: "Ajsa",
  prezime: "Besirovic",
  godine: 20,

  // Kada ključ sadrži razmake ili specijalne karaktere, mora se pisati pod navodnicima
  "user name": "ajsa.besirovic",

  // Ključ "adresa" sadrži kao vrednost drugi objekat — ugnježdeni objekat (nested object)
  adresa: {
    ulica: "Avnoja",
    grad: "Novi Pazar",
  },

  // Ključ "hobiji" sadrži kao vrednost niz stringova
  hobiji: ["eat", "sleep", "code", "train"],
};

console.log(osoba);

// Pristup svojstvima objekta (property)

// Dot notacija: koristi se kada znamo naziv ključa i kada on ne sadrži razmake ili specijalne karaktere
console.log(osoba.ime); // ispisuje: "Ajsa"
console.log(osoba.godine); // ispisuje: 20

// Bracket notacija: koristi se
// 1. kada je ključ string (ili kada ima specijalne karaktere)
// 2. kada želimo da pristupimo ključu dinamički (npr. iz promenljive)

// 1.
console.log(osoba["ime"]);
console.log(osoba["user name"]);

console.log(osoba["user-name"]); // vraća `undefined` jer **ne postoji** takav ključ

// Menjamo vrednost postojećeg svojstva "ime"
osoba.ime = "hana";

// Dodajemo novo svojstvo "zanimanje"
// Možemo koristiti i dot ili bracket notaciju — obe su validne
osoba.zanimanje = "web dev";

// Brišemo svojstvo "ime" iz objekta
delete osoba.ime;

// Ponovo dodajemo "ime" u objekat, koristeći bracket notaciju
osoba["ime"] = "Ajsa";

// Pristup unutar nestovanog objekta

// Objekat `adresa` je deo `osoba`, i da bismo pristupili njegovom svojstvu "ulica", koristimo:
console.log(osoba.adresa.ulica);

// Osoba ima niz hobija. Iteriramo kroz taj niz pomoću klasične for petlje
for (let i = 0; i < osoba.hobiji.length; i++) {
  console.log(osoba.hobiji[i]); // Ispisuje svaki hobi posebno
}

const korisnici = [
  { ime: "Ajsa", godine: 20 },
  { ime: "Hana", godine: 14 },
  { ime: "Adem", godine: 15 },
  { ime: "Orhan", godine: 15 },
  { ime: "Ibrahim", godine: 13 },
];

//  Napravi novi niz imena svih korisnika (`map`).
//  Filtriraj korisnike starije od 18 godina (`filter`).
//  Ispiši korisnike čije ime ima 4 ili više slova

const imena = korisnici.map((korisnik) => korisnik.ime);
const stariji = korisnici.filter((korisnik) => korisnik > 18);
korisnici.forEach((korisnik) => {
  if (korisnik.ime.length >= 4) {
    console.log(korisnik);
  }
});

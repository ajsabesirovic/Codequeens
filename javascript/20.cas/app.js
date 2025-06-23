const osoba = {
  ime: "Ajsa",
  prezime: "Besirovic",
  godine: 20,
};

// Ispisujemo sve ključeve objekta `osoba` kao niz (Array), dakle Object.keys metoda vraca niz kljuceva.
console.log(Object.keys(osoba)); // ["ime", "prezime", "godine"]

// Broj ključeva u objektu - koliko propertya ima
const brojKljuceva = Object.keys(osoba).length;
console.log(brojKljuceva); // 3

// Sve vrednosti iz objekta `osoba` kao niz
const nizVrednosti = Object.values(osoba);
console.log(nizVrednosti); // ["ajsa", "bes", 20]

// Dobijamo niz nizova, gde je svaki unutrašnji niz u formatu [ključ, vrednost]
const nizUlaza = Object.entries(osoba);
console.log(nizUlaza); // [["ime", "ajsa"], ["prezime", "bes"], ["godine", 20]]

// Na osnovu prethodnog niza ulaza, pravimo ponovo objekat pomocu metode fromEntries
const obj2 = Object.fromEntries(nizUlaza);
console.log(obj2); // {ime: "ajsa", prezime: "bes", godine: 20}

// Svaki objekat u JavaScriptu ima svoj "prototip" — drugi objekat od kojeg nasleđuje svojstva i metode.
// Ako neko svojstvo ne postoji u objektu, JavaScript ga traži u prototipu.
// To omogućava deljenje funkcionalnosti među objektima bez dupliranja koda.

// Prototipsko nasleđivanje je mehanizam preko kojeg jedan objekat nasleđuje osobine i metode drugog objekta.

const auto = {
  marka: "bmw",
  model: "mx5",
  godina: 2022,
};

// Pravimo kopiju sadrzaja jednog ili vise objekata koristeći Object.assign()
// Object.assign(target, ...sources) pravi novi objekat i kopira sve iz `auto`, ali menja/ubacuje nova svojstva
const auto2 = Object.assign({}, auto, { godina: 2025, boja: "crna" });
// u ovom slucaju ce u prazan objekat {}, (koji je prvi argument i predstavlja target) ubaciti propertye iz auto objekta prvo,
// dakle marka, model i godina, zatim iz sledeceg objekta uzima godinu i posto je taj property vec ubacen
// onda uzima samo njegovu vrednost i menja 2022 u 2025, zatim dodaje property boja
console.log(auto2); // {marka: "bmw", model: "mx5", godina: 2025, boja: "crna"}

// Primer prototipskog nasledjivanja
// Object.create() kreira novi objekat `auto3` koji nasleđuje svojstva objekta `auto` preko prototipa
// dakle argument koji prosledjujemo ovoj metodi postaje prototip novog objekta i mozemo pristupiti
// svim njegovim svojstvima zbog takozvanog 'prototipskog nasledjivanja' kroz prototipski lanac
const auto3 = Object.create(auto);

console.log(auto3); // auto3 je prazan objekat {} koji koristi `auto` kao prototip

// Pristupamo svojstvu `godina` preko prototipa — nasleđeno iz `auto` (prototype chain)
console.log(auto3.godina); // 2022

// Dodajemo lokalno svojstvo `godina` unutar objekta `auto3`, koje overrida ono iz prototipa
auto3.godina = 1999;

// Sada `auto3` ima svoje lokalno svojstvo `godina`, koje ima prioritet nad nasleđenim svojstvom iz prototipa
console.log(auto3); // {godina: 1999}
console.log(auto3.godina); // 1999

const obj = {
  name: "Ajsa",
  godiste: 2004,
  // Metoda je funkcija koja je smeštena unutar objekta, tj. funkcija koja je vrednost nekog ključa
  // U regularnim funkcijama, `this` pokazuje na objekat iz kojeg se metoda poziva.
  // U arrow funkcijama je drugaciji slucaj i `this`NE pokazuje na objekat, već uzima vrednost `this` iz okruženja.

  // Regularna funkcija: greet: function () { ... } - vrednost greet properya jeste anonimna f-ja
  greet: function () {
    return `Pozdrav ${this.name}`;
  },

  // Arrow funkcija nema sopstveni `this`, već koristi `this` iz spoljašnjeg okruženja — u objektima to često znači da neće raditi kako očekujemo
  greetArrow: () => {
    return `Pozdrav ${this.name}`; // this.name će ovde biti `undefined`
  },

  // Skraćeni zapis metode bez function keyword
  podaci() {
    return `Zovem se ${this.name}, imam ${2025 - this.godiste} godina.`;
  },

  // Funkcija koja računa godine na osnovu godine rođenja
  izracunajGodine() {
    return 2025 - this.godiste;
  },
};

console.log(obj.greet()); // Pozdrav Ajsa
console.log(obj.greetArrow()); // Pozdrav undefined
console.log(obj.podaci()); // Zovem se Ajsa, imam 21 godina.
console.log(obj.izracunajGodine()); // 21

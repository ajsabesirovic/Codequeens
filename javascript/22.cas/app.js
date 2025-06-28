// const osoba1 = {
//   ime: "ajsa",
//   prezime: "besirovic",
// };

// const osoba2 = {
//   ime: "erna",
//   prezime: "redzovic",
// };

// const osoba3 = {
//   ime: "mirela",
//   prezime: "bruncevic",
// };

// const osoba4 = {
//   ime: "esma",
//   prezime: "bihorac",
// };
// ======================================= Constructor funkcija =======================================
// Velikim slovom pišemo konstruktor funkcije po konvenciji.
// Prima parametre ime i prezime i postavlja ih na this.
// this predstavlja objekat koji nastaje kad se pozove sa new.
function Osoba(ime, prezime) {
  this.ime = ime;
  this.prezime = prezime;
}
// =======================================
// Kreiranje novih Osoba pomoću new
// =======================================
// new kreira prazan objekat, binduje this i vrati taj objekat.
const osoba1 = new Osoba("Ajsa", "Besirovic");
const osoba2 = new Osoba("Mirela", "Bruncevic");

console.log(osoba1);
console.log(osoba2);

// =======================================
// Prototype metoda: pozdrav
// =======================================
// Svi objekti napravljeni preko new Osoba dele ovu istu funkciju.
// Time se čuva memorija jer metoda nije duplirana na svakom objektu.
Osoba.prototype.pozdrav = function () {
  console.log(`Ja sam ${this.ime} ${this.prezime}`);
};

// Pozivanje metode sa prototype-a, jer je nasledjujemo iz prototipa
osoba1.pozdrav();
osoba2.pozdrav();

// =======================================
// Constructor funkcija: Student
// =======================================
// Slično kao Osoba, ali dodajemo svojstvo prosek.
function Student(ime, prosek) {
  this.ime = ime;
  this.prosek = prosek;
}

Student.prototype.predstaviSe = function () {
  console.log(`Zdravo, ja sam ${this.ime} i moj prosek je ${this.prosek}.`);
};

const student1 = new Student("Ajsa", 9.5);
const student2 = new Student("Erna", 10);

console.log(student1);
student1.predstaviSe();
student2.predstaviSe();
// =================================================================================
function Vozilo(tip, brTockova) {
  this.tip = tip;
  this.brTockova = brTockova;
}

// Auto je specijalna vrsta Vozila. Da ne bismo duplirali kod,
// koristimo Vozilo.call(this, ...) da pozovemo Vozilo konstruktor
// i upišemo njegove osobine u trenutni this objekat.
function Auto(model, marka) {
  // Pozivamo Vozilo konstruktor u kontekstu trenutnog Auto objekta.
  Vozilo.call(this, "auto", 4);

  // Dodajemo specifične osobine za Auto.
  this.model = model;
  this.marka = marka;
}
const auto1 = new Auto("X5", "BMW");

console.log(auto1);

// =======================================
/*
  - Constructor funkcija je obična funkcija koju koristimo da pravimo slične objekte.
  - new automatski kreira prazan objekat, veže this za njega i vrati taj objekat.
  - Prototype služi da svi objekti dele iste metode bez dupliranja.
  - call služi da ručno vežeš this kad želiš da pozajmiš drugu funkciju (kao ovde Vozilo za Auto).
*/

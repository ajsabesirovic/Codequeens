function pozdrav() {
  console.log("Zdravo, ja sam " + this.ime);
}

const osoba1 = { ime: "Emina" };
const osoba2 = { ime: "Nikola" };

// Zadatak: Pozovi `pozdrav` tako da se `this` odnosi na osoba1, a zatim na osoba2.
// --------------------------------------------------------------------------------
function predstavi(sektor, pozicija) {
  console.log(
    `Zovem se ${this.ime}, radim kao ${pozicija} u sektoru ${sektor}`
  );
}

const osoba = { ime: "Hana" };

// Zadatak: Pozovi predstavi tako da `this` bude osoba, a argumenti "Marketing" i "menadžer".
// --------------------------------------------------------------------------------

// Isti zadatak kao iznad, ali koristi apply
// Argumenti neka budu u nizu ["HR", "specijalista"]
// --------------------------------------------------------------------------------

function racunaj(cena, porez) {
  console.log(`Ukupno: ${this.valuta}${cena + cena * porez}`);
}

const rsd = { valuta: "RSD " };
const eur = { valuta: "€ " };

// Napravi funkcije `racunajRSD` i `racunajEUR` koje su bindovane verzije racunaj
// sa odgovarajućim valutama.

const osoba_ = {
  ime: "Milica",
  pozdrav: function (grad, godina) {
    console.log(
      `Zdravo, ja sam ${this.ime} iz ${grad}, imam ${godina} godina.`
    );
  },
};

const drugaOsoba = { ime: "Stefan" };

// Zadatak: Pozovi osoba.pozdrav tako da this bude drugaOsoba i
// argumenti "Novi Sad", 25.

// ---------------------------------------------------------------------------
// Kreirati novi niz u kojem su sve cene na popustu za 20% - map()
// i onda prikazemo sumu svih cena (posle popusta) - reduce()

const produkti = [
  { name: "Laptop", price: 1000 },
  { name: "Telefon", price: 600 },
  { name: "Tablet", price: 800 },
];

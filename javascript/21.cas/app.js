// Call, apply i bind
// Call, apply i bind metode koristimo da eksplicitno postavimo vrednost this na neki objekat.

// Osoba 1 sa metodom koja koristi 'this'
const osoba1 = {
  ime: "Ajsa",
  pozdrav() {
    return `Zdravo, ja sam ${this.ime}`;
  },
};
// Ovo radi zbog toga sto pozdrav metoda stvarno postoji u osoba1
osoba1.pozdrav();

// Osoba 2 bez metode
const osoba2 = {
  ime: "Sumeja",
};
// Ovo ne radi jer pozdrav ne postoji u objektu osoba2

osoba2.pozdrav();
// Call, apply i bind metode nam omogucavaju da pozovemo tu metodu na objekat osoba2 ili bilo koji drugi
// Kako?

// Zelimo da pozovemo metodu osobe1, ali da 'this' pokazuje na osobu2
// Metoda call() poziva funkciju sa promenjenim kontekstom (this).
// Prvi argument je objekat koji želimo da this pokazuje, a ostali su argumenti funkcije (odvojeni zarezima).
console.log(osoba1.pozdrav.call(osoba2)); // "Zdravo, ja sam Sumeja"

// Primer sa obicnom funkcijom
function pozdravFn() {
  return `Pozdrav ${this.ime}`;
}

console.log(pozdravFn.call(osoba1)); // "Pozdrav Ajsa"
console.log(pozdravFn.call(osoba2)); // "Pozdrav Sumeja"

function recenica(rec1, rec2) {
  return `${this.ime} kaže: ${rec1} ${rec2}`;
}
// Apply metoda radi isto sto i call, samo sa drugacijom sintaksom gde argumente funkciji prosleđujemo kao niz

// CALL – prosleđujemo this (osoba1) i argumente pojedinačno
console.log(recenica.call(osoba1, "Volim", "programiranje"));
// → "Ajsa kaže: Volim programiranje"

// APPLY – prosleđujemo this (osoba2) i argumente kao niz
console.log(recenica.apply(osoba2, ["Učim", "JavaScript"]));
// → "Sumeja kaže: Učim JavaScript"

const vezanaFunkcija = pozdravFn.bind(osoba1);
console.log(vezanaFunkcija()); // "Pozdrav Ajsa"
// bind() ne poziva funkciju odmah, već vraća novu funkciju sa trajno vezanim this
// Dobar je kad želimo da funkciju koristiš kasnije, ali sa određenim kontekstom (this)

// Zadaci iz fajla zadaci.js
// 1.
function predstavi(sektor, pozicija) {
  console.log(
    `Zovem se ${this.ime}, radim kao ${pozicija} u sektoru ${sektor}`
  );
}

predstavi.call(osoba1, "marketing", "menadzer");
predstavi.apply(osoba1, ["marketing", "menadzer"]);

const predstaviZaOsobu1 = predstavi.bind(osoba1, "mark", "menadz");
predstaviZaOsobu1();

// 2.
function racunaj(cena, porez) {
  console.log(`Ukupno: ${this.valuta}${cena + cena * porez}`);
}

const rsd = { valuta: "RSD " };
const eur = { valuta: "€ " };

// Ovde smo samo bindali this na rsd kod racunajRSD i na eur kod racunajEUR, a onda tim f-jama saljemo arg
const racunajRSD = racunaj.bind(rsd);
const racunajEUR = racunaj.bind(eur);

racunajEUR(100, 0.3);
racunajRSD(100, 0.4);

// 3.
const osoba_ = {
  ime: "Milica",
  pozdrav: function (grad, godina) {
    console.log(
      `Zdravo, ja sam ${this.ime} iz ${grad}, imam ${godina} godina.`
    );
  },
};

const drugaOsoba = { ime: "Stefan" };

osoba_.pozdrav.call(drugaOsoba, "novi sad", 25);

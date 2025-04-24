// 1.
let cena = Number(prompt("Unesite cenu: "));

if (cena > 5000) {
  let cenaSaPopustom = cena * 0.9;
  console.log(
    `Pocetna cena je ${cena}, a sa popustom od 10% ${cenaSaPopustom}`
  );
} else {
  console.log(`Pocetna cena je ${cena} i nema popust.`);
}

// 2.
let mesec = Number(prompt("Unesite broj meseca (1 - 12):"));

if (mesec == 1) {
  console.log("Januar - 31 dan");
} else if (mesec == 2) {
  console.log("Februar - 28 ili 29 dana");
} else if (mesec == 3) {
  console.log("Mart - 31 dan");
} else if (mesec == 4) {
  console.log("April - 30 dana");
} else if (mesec == 5) {
  console.log("Maj - 31 dan");
} else if (mesec == 6) {
  console.log("Jun - 30 dana");
} else if (mesec == 7) {
  console.log("Jul - 31 dan");
} else if (mesec == 8) {
  console.log("Avgust - 31 dan");
} else if (mesec == 9) {
  console.log("Septembar - 30 dana");
} else if (mesec == 10) {
  console.log("Oktobar - 31 dan");
} else if (mesec == 11) {
  console.log("Novembar - 30 dana");
} else if (mesec == 12) {
  console.log("Decembar - 31 dan");
} else {
  console.log("Pogrešan unos. Mesec mora biti između 1 i 12.");
}

// 3.
let visina = Number(prompt("Unesite visinu u centimetrima:"));

if (visina < 150) {
  console.log("Niska osoba");
} else if (visina >= 150 && visina <= 179) {
  console.log("Srednje visoka osoba");
} else {
  console.log("Visoka osoba");
}

// 4.
let bodovi = Number(prompt("Unesite broj bodova (0 - 100):"));

if (bodovi >= 90) {
  console.log("Ocena: 5");
} else if (bodovi >= 80) {
  console.log("Ocena: 4");
} else if (bodovi >= 70) {
  console.log("Ocena: 3");
} else if (bodovi >= 60) {
  console.log("Ocena: 2");
} else {
  console.log("Ocena: 1");
}

// 5.

let br = Number(prompt("unesi br:"));

if (br > 99 && br < 1000) {
  console.log("Pozitivan trocifren broj");
} else if (br < -99 && br > -1000) {
  console.log("Negativan trocifren broj");
} else {
  console.log("Broj nije trocifren");
}

// 6.
let dan = Number(prompt("Unesite broj dana (1 - 7):"));

if (dan >= 1 && dan <= 5) {
  console.log("Radni dan");
} else if (dan == 6 || dan == 7) {
  console.log("Vikend");
} else {
  console.log("Neispravan unos. Dan mora biti između 1 i 7.");
}

// 7.
let godinaRodjenja = Number(prompt("Unesite svoju godinu rođenja:"));
let trenutnaGodina = new Date().getFullYear(); // uzima trenutnu godinu
let starost = trenutnaGodina - godinaRodjenja;

console.log(`Imate ${starost} godina.`);

if (starost < 18) {
  console.log("Nemate pravo glasa.");
} else if (starost >= 18 && starost < 65) {
  console.log("Imate pravo glasa.");
} else {
  console.log(
    "Imate pravo glasa i možete ostvariti olakšice za starije građane."
  );
}

// 8.

let a = Number(prompt("Unesi stranicu a:"));
let b = Number(prompt("Unesi stranicu b:"));
let c = Number(prompt("Unesi stranicu c:"));

if (a + b > c && a + c > b && b + c > a) {
  if (a ** 2 + b ** 2 == c ** 2) {
    console.log("Pravougli");
  } else {
    console.log("Nije pravougli");
  }
} else {
  console.log("Nije moguce formirati trougao.");
}

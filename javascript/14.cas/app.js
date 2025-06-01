// Primer niza brojeva
const niz = [1, 2, 3, 4];

// MAP primer - prolazi kroz svaki element i vraća novu vrednost za svaki element
const brojeviVeciOD2MAP = niz.map((br) => br > 2);
// Rezultat: [false, false, true, true]
// Objašnjenje: map() prolazi kroz SVAKI element i primenjuje funkciju na njega.
// U ovom slučaju vraća true ako je broj veći od 2, inače false.
// NIKADA ne izbacuje elemente - samo pravi NOVI niz iste dužine.

console.log("MAP (da li je broj > 2):", brojeviVeciOD2MAP);

// FILTER primer - prolazi kroz svaki element, ali u novi niz vraća SAMO one koji zadovolje uslov
const brojeviVeciOD2FILTER = niz.filter((br) => br > 2);
// Rezultat: [3, 4]
// Objašnjenje: filter() zadržava SAMO elemente koji zadovolje uslov (br > 2 u ovom slučaju).

console.log("FILTER (brojevi > 2):", brojeviVeciOD2FILTER);

// Dakle map ce uvek napraviti novi niz koji je ISTE duzine kao niz koji je pozvao map, i za svaki el
// se mora vratiti neka vrednost, ako nismo postavili koja vrednost se vraca, vraca undefined.

// Kod filter, ako u return stavimo neki izraz npr. br>2, kad el ispuni uslov znaci kad je return true onda
// taj element dodaje u novi niz.

// Dodatni FILTER primer sa rečima
let reci = ["pas", "automobil", "kuca"];
const izdvoj = reci.filter((rec) => rec.length < 5);
// Rezultat: ["pas"]
// Objašnjenje: samo reči sa manje od 5 slova ulaze u novi niz.

console.log("Reči sa manje od 5 slova:", izdvoj);

// FILTER primer: brojevi između 10 i 100
let Niz = [12, 34, 5, 56, 77];
const izmedju = Niz.filter((br) => br > 10 && br < 100);
// Rezultat: [12, 34, 56, 77]
// Objašnjenje: vraća sve brojeve koji su veći od 10 i manji od 100.

console.log("Brojevi između 10 i 100:", izmedju);

// Primer kombinovanja filter() i find()
let niz2 = [99, 31, 2, 40];

// Prvo filter() - zadrži samo parne brojeve: [2, 40]
// Zatim find() - pronađi prvi broj manji od 10 u tom filtriranom nizu
const x = niz2.filter((el) => el % 2 == 0).find((el) => el < 10);
// Rezultat: 2

console.log("Prvi parni broj manji od 10:", x);

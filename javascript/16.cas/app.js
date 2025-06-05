const niz = ["A", 1, 3, 500, "L"];

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}
// forEach je metoda koja se poziva na niz i izvršava prosleđenu callback funkciju za svaki element tog niza.
// Callback funkcija prima tri argumenta: vrednost elementa, indeks elementa i ceo niz.
// forEach ne menja originalni niz i uvek vraća undefined – koristi se za efekte (npr. ispis, promenu vrednosti van niza itd.)
niz.forEach((trElement, index, array) => {
  if (trElement % 2 == 0) console.log(trElement);
});

function ispisiEl(trElement) {
  console.log(trElement);
}

niz.forEach(ispisiEl); // preko forEach
for (let i = 0; i < niz.length; i++) {
  niz[i].ispisiEl(); // preko for petlje
}

nizBrojeva.forEach((el) => {
  console.log(el ** 2);
});

nizBrojeva.forEach((el) => {
  if (el % 2 == 0) console.log(`Broj ${el} je paran`);
  else console.log(`Broj ${el} nije paran`);
});

let suma = 0;

nizBrojeva.forEach((el) => {
  suma += el;
});
console.log(suma);

let brojac = 0;
nizBrojeva.forEach((el) => {
  if (el > 10) brojac++;
});
console.log(brojac);

nizBrojeva.forEach((el, index) => {
  console.log(el, index);
});

nizBrojeva.forEach((el) => {
  if (el % 2 == 0) {
    console.log(el * 2);
  }
});

nizBrojeva.forEach((el) => {
  if (el % 5 === 2) console.log(el);
});

let najveci = nizBrojeva[0];
for (let i = 0; i < nizBrojeva.length; i++) {
  if (najveci < nizBrojeva[i]) najveci = nizBrojeva[i];
}
console.log(najveci);

nizBrojeva.forEach((el) => {
  if (najveci < el) najveci = el;
});
console.log(najveci);

const nizBrojeva = [10, 20, 30, 40, 50];

nizBrojeva.forEach((trElement, indeks, niz) => {
  console.log(`Trenutni element je ${trElement}, njegov indeks je ${indeks}`);
});

let sumaPozitivnih = 0;
nizBrojeva.forEach((el) => {
  if (el > 0) sumaPozitivnih += el;
});

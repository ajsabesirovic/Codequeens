// =========================
// SWITCH ZADACI
// =========================

// 1. Kalkulator
let a = Number(prompt("Unesi prvi broj:"));
let b = Number(prompt("Unesi drugi broj:"));
let operacija = prompt("Unesi operaciju (+, -, *, /):");

switch (operacija) {
  case "+":
    alert("Zbir je: " + (a + b)); // sabiranje
    break;
  case "-":
    alert("Razlika je: " + (a - b)); // oduzimanje
    break;
  case "*":
    alert("Proizvod je: " + a * b); // množenje
    break;
  case "/":
    if (b !== 0) {
      alert("Količnik je: " + a / b); // deljenje ako b nije nula
    } else {
      alert("Greška: Deljenje sa nulom nije dozvoljeno."); // greška
    }
    break;
  default:
    alert("Nepoznata operacija."); // nepoznata operacija
}

// 2. Simulacija prodavnice
let kategorija = prompt("Izaberi kategoriju: Hrana, Elektronika, Odeća");

switch (kategorija) {
  case "Hrana":
    alert("Proizvodi: Hleb, Mleko, Jaja");
    break;
  case "Elektronika":
    alert("Proizvodi: Televizor, Telefon, Laptop");
    break;
  case "Odeća":
    alert("Proizvodi: Majica, Pantalone, Jakna");
    break;
  default:
    alert("Nepoznata kategorija.");
}

// 3. Ocena u rečima
let ocena = parseInt(prompt("Unesi broj ocene (1-5):")); // parseInt je metoda koja prihvata argument i pretvara ga u Integer (ceo broj)
switch (ocena) {
  case 1:
    alert("Nedovoljan");
    break;
  case 2:
    alert("Dovoljan");
    break;
  case 3:
    alert("Dobar");
    break;
  case 4:
    alert("Vrlo dobar");
    break;
  case 5:
    alert("Odličan");
    break;
  default:
    alert("Nepoznata ocena.");
}

// =========================
// FOR LOOP ZADACI
// =========================

// 1. Tablica množenja
let broj = parseInt(prompt("Unesi broj za tablicu množenja:"));
for (let i = 1; i <= 10; i++) {
  console.log(`${broj} * ${i} = ${broj * i}`);
}

// 2. Zbir elemenata
let zbir = 0;
for (let i = 0; i < 5; i++) {
  let broj = parseFloat(prompt("Unesi broj:")); // parseFloat je metoda koja prihvata argument i pretvara ga u float (decimalni broj)
  zbir += broj;
}
alert("Zbir je: " + zbir);

// 3. Najveći i najmanji broj
let najveci;
let najmanji;
for (let i = 0; i < 5; i++) {
  let broj = parseFloat(prompt("Unesi broj:"));
  if (i == 0) {
    // u prvom ponavljanju postavljamo vrednosti obe varijable na prvi broj koji smo uneli
    najmanji = broj;
    najveci = broj;
  }
  if (broj > najveci) najveci = broj; // ukoliko je broj koji smo uneli veci od broja koji cuvamo u varijabli najveci, onda najveci treba da preuzme vrednost novog broja
  if (broj < najmanji) najmanji = broj; // slicno za najmanji
}
alert(`Najveći broj je: ${najveci}, Najmanji broj je: ${najmanji}`);

// 4. Proveri da li je broj prost
let brojProst = parseInt(prompt("Unesi broj:"));
let prost = true;

for (let i = 2; i < brojProst; i++) {
  if (brojProst % i === 0) {
    prost = false;
    break;
  }
}
if (prost) {
  alert("Broj je prost.");
} else {
  alert("Broj nije prost.");
}

// 5. Faktorijel broja
let n = parseInt(prompt("Unesi broj za faktorijel:"));
let faktorijel = 1;
for (let i = 1; i <= n; i++) {
  faktorijel *= i;
}
alert(`Faktorijel broja ${n} je: ${faktorijel}`);

// 6. Suma parnih brojeva do n
let nParni = parseInt(prompt("Unesi broj:"));
let sumaParnih = 0;
for (let i = 2; i <= nParni; i += 2) {
  sumaParnih += i;
}
alert("Zbir parnih brojeva do " + nParni + " je: " + sumaParnih);

// 7. Deljivost sa 3 i 5
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}

// 8. Srednja vrednost
let zbirSv = 0;
for (let i = 0; i < 5; i++) {
  zbirSv += parseFloat(prompt("Unesi broj:"));
}
let srednja = zbirSv / 5;
alert("Srednja vrednost je: " + srednja);

// 9. Stepeni broja 2
for (let i = 1; i <= 10; i++) {
  console.log(`2^${i} = ${2 ** i}`);
}

// 10. Fibonacijev niz
let aFib = 1,
  bFib = 1;
console.log(aFib);
console.log(bFib);
for (let i = 3; i <= 10; i++) {
  let c = aFib + bFib;
  console.log(c);
  aFib = bFib;
  bFib = c;
}

// 11. Savršen broj
let brojSavrsen = parseInt(prompt("Unesi broj:"));
let zbirDelilaca = 0;
for (let i = 1; i < brojSavrsen; i++) {
  if (brojSavrsen % i === 0) {
    zbirDelilaca += i;
  }
}
if (zbirDelilaca === brojSavrsen) {
  alert("Broj je savršen.");
} else {
  alert("Broj nije savršen.");
}

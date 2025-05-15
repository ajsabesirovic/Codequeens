// function kalkulator(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//   }
// }

// console.log(kalkulator(2, 3, "+"));
// const rez = kalkulator(2, 3, "+");

// function meni() {
//   let izbor;
//   while (izbor !== 0) {
//     console.log(`1 - Kvadrat obrnutia
//         2 - Da li je paran
//         3 - Zbir do N
//         0 - Izlaz`);
//     izbor = +prompt("Izaberi operaciju: ");
//     if (izbor == 0) return;
//     let num = +prompt("Unesi br:");
//     if (izbor == 1) {
//       console.log(num ** 2);
//     } else if (izbor == 2) {
//       console.log(num % 2 == 0);
//     } else if (izbor == 3) {
//       let zbir = 0;
//       for (let i = 1; i < num; i++) zbir += i;
//       console.log(zbir);
//     }
//   }
// }
// meni();

// function obrniBroj(n) {
//   let obrnuti = "";

//   let kopija = n;

//   while (kopija > 0) {
//     let trCifra = kopija % 10;

//     obrnuti += trCifra;

//     kopija = Math.floor(kopija / 10);
//   }

//   return +obrnuti;
// }

function armstrongov(n) {
  let zbir = 0;
  let kopija = n;

  while (kopija !== 0) {
    let trCifra;

    trCifra = kopija % 10;
    zbir += trCifra ** 3;

    kopija = Math.floor(kopija / 10);
  }

  return zbir == n;
}

// 16. Zadatak:
// Napiši funkciju daLiJeSavrsen(broj) koja vraća true ako je broj savršen.
// Savršen broj je jednak zbiru svojih delilaca (bez samog sebe).
// Primer: 6 → 1 + 2 + 3 = 6 → savršen broj

// function daLiJeSavrsen(broj) {
//   let zbir = 0;
//   for (let i = 1; i < broj; i++) {
//     if (broj % i == 0) {
//       zbir += i;
//     }
//   }

//   // if(broj === zbir){
//   //     return true
//   // }
//   // else{
//   //     return false;
//   // }

//   return zbir == broj;
// }
// console.log(daLiJeSavrsen(5));

// 17. Zadatak:
// Napiši funkciju zbirDelilaca(broj) koja vraća zbir svih brojeva
// manjih od datog broja koji ga deli bez ostatka.
// Primer: zbirDelilaca(8) → 1 + 2 + 4 = 7

// function zbirDelilaca(broj) {
//   let sum = 0;
//   for (let i = 1; i < broj; i++) {
//     if (broj % i == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// 19. Zadatak:
// Napiši funkciju najmanjiDelilac(n) koja vraća najmanji prirodan delilac već od 1 (osim 1).
// Primer: najmanjiDelilac(15) vraća 3

// function najmanjiDelilac(n) {
//   for (let i = 2; i <= n; i++) {
//     if (n % i == 0) return i;
//   }
// }
// let najmanjiDelilacOd15 = najmanjiDelilac(15);
// console.log(najmanjiDelilacOd15);

// 20. Zadatak:
// Napiši funkciju zbirKvadrataDoN(n) koja vraća zbir kvadrata svih brojeva od 1 do n.
// Primer: zbirKvadrataDoN(3) → 1² + 2² + 3² = 14

// function zbirKvadrataDoN(n) {
//   let zbir = 0;
//   for (let i = 1; i <= n; i++) {
//     zbir += i * i;
//   }
//   return zbir;
// }
// Napiši funkciju sumaCifara(n) koja vraća zbir svih cifara broja.
// Primer: sumaCifara(1234) vraća 1 + 2 + 3 + 4 = 10

// function sumaCifara(n) {
//   let zbir = 0;
//   while (n > 0) {
//     let cifra = n % 10;
//     zbir += cifra;
//     n = Math.floor(n / 10);
//   }
//   return zbir;
// }

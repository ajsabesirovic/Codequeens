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

// function obrniobrnuti(n) {
//   let obrnuti = "";
//   let kopija = n;
//   while (kopijaBroja !== 0) {
//     let trCifra;

//     trCifra = kopija % 10;
//     obrnuti += trCifra;

//     kopijaBroja = Math.floor(kopija / 10);
//   }

//   return +obrnuti;
// }

// function armstrongov(n) {
//   let zbir = 0;
//   let kopija = n;

//   while (kopijaBroja !== 0) {
//     let trCifra;

//     trCifra = kopija % 10;
//     zbir += trCifra ** 3;

//     kopijaBroja = Math.floor(kopija / 10);
//   }

//   return zbir == n;
// }

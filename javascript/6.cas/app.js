// ======================
// continue i break
// ======================

for (let i = 1; i < 11; i++) {
  if (i == 7) continue; // kada je i == 7, preskače se ostatak tela petlje i ide se na sledeći krug
  console.log(i);
}

// Ispisuje: 1, 2, 3, 4, 5, 6, 8, 9, 10
// Dakle 7 se preskače jer se zbog "continue" ne izvršava console.log(i)

for (let i = 1; i < 11; i++) {
  if (i == 7) break; // kada je i == 7, petlja se prekida
  console.log(i);
}

// Ispisuje: 1, 2, 3, 4, 5, 6
// Kod se prekida čim se dođe do 7 (i == 7)

for (let i = 1; i < 11; i++) {
  if (i == 1) {
    i++; // i odmah postaje 2
  }
  if (i == 4) continue; // preskače 4
  if (i == 7) break; // prekida petlju kad je i == 7
  console.log(i);
}

// Ispisuje: 2, 3, 5, 6

// ======================
// Primer sa break: Prvi broj između 1 i 50 koji nije deljiv sa 2 ni sa 3
// ======================

let broj;
for (let i = 2; i < 50; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    broj = i;
    console.log(broj);
    break; // čim ga pronađe, prekida petlju
  }
}
console.log(`Prvi broj između 1 i 50 koji nije deljiv sa 2 ni sa 3 je ${broj}`);

// ======================
// Scope - Opseg važenja promenljivih
// ======================

// Scope je mesto (blok, funkcija, globalno) gde važi neka promenljiva

// Globalni scope – varijabla važi svuda
let x = 10;

{
  // Ovo je blok scope
  // sve unutar {} smatra se blokom
  let y = 20;
  console.log(x); // x je u globalnom scope-u
  {
    let z = 30;
    console.log(z); //  z važi ovde
  }
  // console.log(z);  Greška! z ne važi ovde jer je definisan dublje
}

// console.log(y);  Greška! y ne važi izvan svog bloka

// ======================
// var vs let i razlika u scope-u
// ======================

// var ima function scope, a ne blok-scope, pa se varijable deklarisane sa var mogu koristiti izvan bloka
for (var i = 0; i < 3; i++) {}
console.log(i); // ✅ Ispisuje: 3

// let ima blok scope, pa ne važi van for petlje
for (let j = 0; j < 3; j++) {
  {
    {
      {
        let k = 3;
      }
      // console.log(k);  Greška! k je definisan u unutrašnjem scope-u i ne važi ovde
    }
  }
}
// console.log(j); Greška! j važi samo unutar for petlje

// ======================

// - `continue` preskače ostatak te iteracije i prelazi na sledeću (ignorise kod ispod naredbe i prelazi na sledece ponavljanje)
// - `break` prekida petlju odmah
// - `let` i `const` imaju block scope (važe samo u {} gde su definisani)
// - `var` ima function scope i može "procuriti" van bloka

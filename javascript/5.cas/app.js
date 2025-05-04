// While petlja izvrsava kod dok je uslov ispunjen.
// Prvo se proveri uslov pa ako je ispunjen onda krece sa izvrsavanjem.
// Uslov se proverava pre svakog sledeceg izvrsavanja koda unutar while petlje.
// Koristeci break naredbu mozemo prekinuti izvrsavanje while petlje, gde prelazi na prvu liniju koda nakon while-a.
// !!!!!!!!!!! Istrazite kako funkcionise CONTINUE naredba!!!!!!!!!!!!
// U sledecem primeru i ce ispisivati u konzoli sve dok je manje od 11.

// 1.
// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }
// U svakom ponavljanju i se poveca za 1
// Nakon prvog izvrsenja while bloka koda i = 2
// Nakon drugog izvrsenja while bloka koda i = 3
// ...
// Nakon desetog izvrsenja while bloka koda i = 11 i samim tim uslov
// vise nije ispunjen tako da staje s izvrsavanjem.

// Isti zadatak preko for petlje
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 2.
// let unos = +prompt("Unesite broj: ");
// let suma = unos;
// while (unos != 0) {
//   unos = +prompt("Unesite broj: ");
//   suma += unos;
// }

// console.log("Suma je" + suma);

// 3.
// let tajni=Math.floor(Math.random() * 10 + 1);
// let pogodak=false;
// while (!pogodak) {
//   let unos = +prompt("unesi broj");
//   if (unos === tajni) {
//     console.log("pogodili ste broj");
//     pogodak = true;
//   } else {
//     console.log("niste pogodili broj");
//   }
// }

// Moze i na ovaj nacin

// let tajni = Math.floor(Math.random() * 10 + 1);
// let unos;
// while (unos !== tajni) {
//   unos = +prompt("unesi broj");
// }
// console.log("Pogodili ste!");

// 6.
let br = +prompt("unesi br ");
let prost = true;
let i = 2;
while (i != br) {
  if (br % i == 0) {
    console.log(i);
    prost = false;
    break;
  }
  i++;
}

if (prost == true) {
  console.log("prost");
} else {
  console.log("slozen");
}

// 7.
let opcija;

while (opcija !== "5") {
  opcija = prompt(
    "Izaberite opciju:\n1. Sabiranje\n2. Oduzimanje\n3. Množenje\n4. Deljenje\n5. Izlaz"
  );

  if (opcija === "5") {
    alert("Izlaz iz kalkulatora.");
    break;
  }

  let a = parseFloat(prompt("Unesite prvi broj:"));
  let b = parseFloat(prompt("Unesite drugi broj:"));
  let rezultat;

  switch (opcija) {
    case "1":
      rezultat = a + b;
      alert("Rezultat sabiranja: " + rezultat);
      break;
    case "2":
      rezultat = a - b;
      alert("Rezultat oduzimanja: " + rezultat);
      break;
    case "3":
      rezultat = a * b;
      alert("Rezultat množenja: " + rezultat);
      break;
    case "4":
      if (b !== 0) {
        rezultat = a / b;
        alert("Rezultat deljenja: " + rezultat);
      } else {
        alert("Greška: Deljenje sa nulom!");
      }
      break;
    default:
      alert("Nepoznata opcija!");
  }
}

// 8.
let broj = parseInt(prompt("Unesite broj:"));
let original = broj;
let obrnuto = 0;

while (broj > 0) {
  let cifra = broj % 10;
  obrnuto = obrnuto * 10 + cifra;
  broj = Math.floor(broj / 10);
}

if (original === obrnuto) {
  alert("Broj je palindrom");
} else {
  alert("Broj nije palindrom");
}

// 9.
let broj = Math.abs(parseInt(prompt("Unesite broj:")));
let brojac = 0;

if (broj === 0) {
  brojac = 1;
} else {
  while (broj > 0) {
    broj = Math.floor(broj / 10);
    brojac++;
  }
}

alert("Broj ima " + brojac + " cifara.");

// 10.
let tacnaLozinka = "js123";
let pokusaji = 0;
let unetaLozinka;

while (pokusaji < 3) {
  unetaLozinka = prompt("Unesite lozinku:");
  if (unetaLozinka === tacnaLozinka) {
    alert("Dobrodošao!");
    break;
  } else {
    alert("Pogrešna lozinka.");
    pokusaji++;
  }
}

if (unetaLozinka !== tacnaLozinka) {
  alert("Pristup odbijen.");
}

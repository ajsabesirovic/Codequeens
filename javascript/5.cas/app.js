// While petlja izvrsava kod dok je uslov ispunjen.
// Prvo se proveri uslov pa ako je ispunjen onda krece sa izvrsavanjem.
// Uslov se proverava pre svakog sledeceg izvrsavanja koda unutar while petlje.
// Koristeci break naredbu mozemo prekinuti izvrsavanje while petlje, gde prelazi na prvu liniju koda nakon while-a.
// !!!!!!!!!!! Istrazite kako funkcionise CONTINUE naredba!!!!!!!!!!!!
// U sledecem primeru i ce ispisivati u konzoli sve dok je manje od 11.

// 1.
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
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
let unos = +prompt("Unesite broj: ");
let suma = unos;
while (unos != 0) {
  unos = +prompt("Unesite broj: ");
  suma += unos;
}

console.log("Suma je" + suma);

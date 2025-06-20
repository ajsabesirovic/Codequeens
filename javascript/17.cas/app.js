// Rad sa nizovima i referencama

// Objašnjenje:
// - Primitivni tipovi (brojevi, stringovi, boolean) se prenose po vrednosti (kopiraju se kao vrednosti).
// - Nizovi su referentni tipovi: kada dodeljujemo jedan niz drugom (arr2 = arr1), obe promenljive upućuju na isti objekat u memoriji.

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);
// console.log(arr1, arr2); // i arr1 i arr2 su se promenili, jer zapravo su obe varijable ukazivale na isti niz, a taj niz je dobio novi el 4

// - Spread operator ([...arr1]) pravi kopiju, ali plitku kopiju
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr2.push(4);
// console.log(arr1, arr2); // arr1 ostaje nepromenjen, arr2 ima dodat element 4

const arr1 = [1, 2, 3, [0, 0, 0]];
const arr2 = [...arr1]; // plitka kopija - kopira samo prvi nivo, tj. proste tipove, cim je naisao na slozeni tip tj. niz ne kopira ga
// pravi novi niz, ali kopira referencu na podniz [0, 0, 0]

const arr3 = arr2; // arr3 i arr2 su ISTA referenca
arr2.push("a"); // dodavanje u arr2 menja i arr3

arr2[3].push("b"); // menjamo sadržaj ugnježdenog niza, pa ce sad i cetvrti el u arr2 i cetvrti u arr1 biti [0, 0, 0, 'b']

// Ternarni operator
let broj = 3;

if (broj > 5) {
  console.log("broj je veci od 5");
} else {
  console.log("broj je manji od 5");
}

broj > 5 ? console.log("br veci") : console.log("br manji");

// Objašnjenje:
// - Ternarni operator (uslov ? vrednost1 : vrednost2) je skracena verzija if/else.
// - Ako je uslov tacan (true), izvršava se vrednost1, u suprotnom vrednost2.
// - Ovo je korisno za kratke logičke grananja koje vraćaju vrednosti ili izvršavaju kratak kod.

// Primer: Korišćenje reduce metode
// const niz = [100, 2, 5, 300, 1];

const rezultat = niz.reduce((akumulator, trElement) => {
  return akumulator + trElement;
}, "opcioni ");

console.log(rezultat);

// Objašnjenje:
// - reduce je metoda koja "sabija" niz u jednu vrednost.
// - Callback funkcija ima dva argumenta:
//   1. akumulator (vrednost koja se prenosi dalje)
//   2. trElement (trenutni element niza u iteraciji)
// - Na svakoj iteraciji: akumulator = prethodni zbir, trElement = novi broj iz niza.
// - Ako se ne da početna vrednost (drugi argument reduce "opcioni"), koristi se prvi element kao početni akumulator, a iteracija kreće od drugog elementa.
// - Ovde se sabiraju svi brojevi iz niza i vraća njihov zbir.

const niz = [100, 2, 5, 300, 1];
let najveci = niz.reduce((acc, el) => {
  return el > acc ? el : acc;
});

let brojElManjihOd0 = niz.reduce(
  (count, curr) => (curr < 0 ? count++ : count),
  0
);

let spojeno = niz.reduce((ak, brojj) => ak * 10 + brojj); // kao broj
let sp = niz.reduce((ak, trEl) => ak + trEl, ""); // kao string

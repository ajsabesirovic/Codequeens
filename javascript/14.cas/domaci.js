const godine = [12, 18, 25, 15, 30];
const punoletni = godine.filter((god) => god >= 18);
console.log(punoletni);

// ----------------------------------------------------------------------------------

const prvaPunoletna = godine.find((god) => god >= 18);
console.log(prvaPunoletna);

// ----------------------------------------------------------------------------------

const reci = ["pas", "kuća", "auto", "stablo", "more"];
const cetiriSlova = reci.filter((rec) => rec.length === 4);
console.log(cetiriSlova);

// ----------------------------------------------------------------------------------

const brojevi = [1, 3, 4, 6, 9, 10];
const deljiviSaTri = brojevi.filter((b) => b % 3 === 0);
console.log(deljiviSaTri);

// ----------------------------------------------------------------------------------

const prviDeljivSaSedam = brojevi.find((b) => b % 7 === 0);
console.log(prviDeljivSaSedam);

// ----------------------------------------------------------------------------------

const mixBrojevi = [5, 3, 0, -2, -10];
const prviNegativan = mixBrojevi.find((b) => b < 0);
console.log(prviNegativan);

// ----------------------------------------------------------------------------------

const prviDeljivSa3i5 = brojevi.find((b) => b % 3 === 0 && b % 5 === 0);
console.log(prviDeljivSa3i5);

// ----------------------------------------------------------------------------------

const prviKvadrat = brojevi.find((b) => Number.isInteger(Math.sqrt(b)));
console.log(prviKvadrat);

// ----------------------------------------------------------------------------------

function prost(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const prviProst = brojevi.find(prost);
console.log(prviProst);

// ----------------------------------------------------------------------------------

const prviNedeljiv = brojevi.find(
  (num) => ![2, 3, 4, 5, 6, 7, 8, 9, 10].some((d) => num % d === 0)
);
console.log(prviNedeljiv);

// ----------------------------------------------------------------------------------

const niz = [4, 7, 10, 13, 16];
const prviKvadratVeciOd100 = niz
  .filter((b) => b % 2 === 0)
  .map((b) => b ** 2)
  .find((kv) => kv > 100);

console.log(prviKvadratVeciOd100);

// ----------------------------------------------------------------------------------

const niz2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rezultat = niz2
  .filter((n) => n > 0)
  .filter(isPrime)
  .map((n) => n ** 2)
  .filter((kv) => kv % 3 !== 0);

console.log(rezultat);

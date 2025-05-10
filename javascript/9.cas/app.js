// Funkciju možemo pozvati pre nego što je definisana, zbog hoisting-a
proveriParnost(4); // Ispis: "Broj je paran"

function proveriParnost(br) {
  if (br % 2 === 0) {
    console.log("Broj je paran");
  } else {
    console.log("Broj je neparan");
  }
}

// Funkcija koja vraća true ako je broj paran, inače false
function vratiParnost(br) {
  if (br % 2 === 0) {
    return true;
  } else {
    return false;
  }

  // Možemo i skraćeno:
  // return br % 2 === 0;
  // Vraća rezultat izraza (true ili false)
}

// Kada funkcija nešto vraća (return), rezultat možemo:
console.log(vratiParnost(5)); // odmah ispisati
const paran = vratiParnost(6); // ili sačuvati u promenljivu

if (paran === true) {
  console.log("Broj je paran");
} else {
  console.log("Broj je neparan");
}

// Primer funkcije sa return unutar petlje
function test() {
  for (let i = 1; i < 11; i++) {
    return i; // Funkcija odmah vraća 1 i prekida izvršavanje
  }
}

// Funkcija koja vraća rezultat potenciranja (stepenovanja)
function stepen(baza, izlozilac) {
  if (izlozilac === 1) return baza;
  else if (izlozilac === 0) return 1;

  let rezultat = 1;
  for (let i = 1; i <= izlozilac; i++) {
    // Svakim prolazom rezultat se množi sa bazom
    rezultat *= baza;
  }
  return rezultat;
}

let br2na4 = stepen(2, 4);
console.log(br2na4); // Ispis: 16

// Funkcija koja vraća broj cifara u broju
function brojCifara(n) {
  let brojCifara = 0;
  while (n > 0) {
    n = Math.floor(n / 10); // Smanjujemo broj tako što uklanjamo poslednju cifru
    brojCifara++;
  }
  return brojCifara;
}

console.log(brojCifara(123)); // Ispis: 3

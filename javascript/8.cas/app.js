console.log("Hello");
// Sledeći deo predstavlja mesto za druge delove koda, trenutno je samo ilustracija
// kod
// kod
// ...

console.log("Hello");
// kod
// kod
// ...

console.log("Hello");
// Mozemo primetiti da se jedan deo koda ponavlja vise puta, u ovom slucaju console.log("Hello") i zbog toga cemo to izdvojiti u poseban deo, u function.

// Pravi funkciju kada:
// Nešto se ponavlja više puta u programu, da ne pišeš isti kod svaki put.
// Želiš da izdvojiš logiku koja ima određenu svrhu.
// Želiš da tvoj kod bude čitljiviji, organizovan u male blokove koji se lako razumeju.

// *** FUNKCIJA BEZ PARAMETARA ***

// Ova funkcija ne prima nikakve parametre i jednostavno ispisuje "Zdravo" u konzolu.
// Koristi se kada želiš više puta da prikažeš isti tekst, bez da ga stalno kucaš.
// Na primer, kada želiš da pozdraviš korisnika ili da označiš početak neke sekcije.
function ispisiZdravo() {
  // Definicija funkcije koja se zove ispisiZdravo
  // Funkcija nema parametre
  // Kada se pozove, ispisuje "Zdravo" u konzoli
  console.log("Zdravo");
}

// Ove linije su zakomentarisane, ali ako se otkomentarišu, funkcija bi se pozvala tri puta
// ispisiZdravo();
// ispisiZdravo();
// ispisiZdravo();

// *** FUNKCIJA SA PARAMETROM I PODRAZUMEVANOM VREDNOŠĆU ***
// / Ova funkcija prima jedan parametar "tekst" koji se ispisuje u konzoli.
// Ako korisnik ne pošalje nijednu vrednost, koristi se podrazumevana vrednost: "Default value".
// Koristi se kada želiš fleksibilan ispis različitih poruka, npr. logovanje statusa, grešaka, ili notifikacija.
function ispisi(tekst = "Default value") {
  console.log(tekst);
}

// Kada je koristiti:
// - Želiš da prikažeš različite poruke (dinamički)
// - Ne znaš unapred da li će biti prosleđen neki tekst

// Pozivi funkcije sa različitim argumentima:
ispisi("Hello"); // Ispisuje: Hello
ispisi("Hi"); // Ispisuje: Hi
ispisi("Bye"); // Ispisuje: Bye
ispisi(); // Ispisuje: Default value (jer nije prosleđen argument)

// *** FUNKCIJA KOJA PROVERAVA DA LI JE BROJ PARAN ILI NEPARAN ***
function paran(broj) {
  // Funkcija prima jedan parametar 'broj'
  // Proverava da li je broj paran (deljiv sa 2)
  // Ako jeste, ispisuje da je broj paran
  // Ako nije, ispisuje da je broj neparan
  if (broj % 2 == 0) {
    console.log(`Broj ${broj} je paran`);
  } else {
    console.log(`Broj ${broj} je neparan`);
  }
}

// Pozivi funkcije 'paran' sa različitim brojevima
paran(10); // Ispisuje: Broj 10 je paran
paran(3); // Ispisuje: Broj 3 je neparan

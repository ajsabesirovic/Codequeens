// ******************** POPUP PROZORI ********************

// 1. ALERT – koristi se za prikazivanje obaveštenja korisniku. Ne vraća nikakvu vrednost.
alert("Uspesno ste se ulogovali!");

// 2. PROMPT – traži unos od korisnika. Vraća unetu vrednost kao string.
// Ovde koristimo Number() da bismo pretvorili string u broj.
let podatak = Number(prompt("Unesite nesto: ")); // npr. korisnik unese 5 → podatak = 5 (tip number)
console.log(podatak, typeof podatak); // prikazuje uneti podatak i njegov tip u konzoli

// 3. CONFIRM – prikazuje pitanje sa opcijama OK (true) i Cancel (false)
let odgovor = confirm("Da li ste zadovoljni?");
console.log(odgovor); // prikazuje true ili false u zavisnosti od korisničkog izbora

// ******************** IF / ELSE USLOVI ********************

if (odgovor == true) {
  // Ako je korisnik kliknuo OK na confirm
  console.log("If je izvrsen");
} else {
  // Ako je korisnik kliknuo Cancel
  console.log("Else je izvrsen");
}

// ******************** IF - ELSE unutar ELSE ********************

let broj = Number(prompt("Unesite neki broj:")); // korisnik unosi broj

if (broj > 10) {
  // Ako je broj veći od 10
  console.log(`Broj ${broj} je veci od 10.`);
} else {
  // Ako nije veći od 10, proveravamo dalje
  if (broj == 10) {
    console.log(`Broj ${broj} je jednak 10.`);
  } else {
    console.log(`Broj ${broj} je manji od 10.`);
  }
}

// ******************** VIŠE SAMOSTALNIH IF USLOVA ********************

// Svaki `if` se proverava nezavisno od ostalih
if (broj > 1) {
  console.log("veci od 1");
}
if (broj > 2) {
  console.log("veci od 2");
}
if (broj > 3) {
  console.log("veci od 3");
}
if (broj > 4) {
  console.log("veci od 4");
}
if (broj > 5) {
  console.log("veci od 5");
}

// Primer: ako broj = 6, biće ispisano sve od "veci od 1" do "veci od 5"

// ******************** IF - ELSE IF - ELSE STRUKTURA ********************

if (broj == 10) {
  // Ako je broj tačno 10
  console.log("broj je jednak 10");
} else if (broj > 10) {
  // Ako prethodni uslov nije bio tačan, proverava se ovaj
  console.log("broj je veci od 10");
} else {
  // Ako nijedan od prethodnih uslova nije bio tačan
  console.log("broj je manji od 10");
}

// ******************** PONASANJE IF-ELSE IF BEZ TELA ********************

if (false) {
  // Ne ulazi ovde jer je uslov false
} else if (false) {
  // Takođe false – preskače
} else if (true) {
  // Ovo je prvo true – ulazi ovde, ali nema koda za izvršavanje
  // Obično bi ovde trebalo da ide neki kod u { }
}

// ******************** PONASANJE IF-ELSE SA TRUE ********************

if (true) {
  // Uvek se izvršava jer je uslov true
} else {
  // Ovo se preskače
}

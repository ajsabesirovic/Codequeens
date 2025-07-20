// 🔹 Web API (Web Application Programming Interface)
// Web API je skup funkcija koje su dostupne u web pregledaču i omogućavaju JavaScriptu
// da komunicira sa funkcijama browsera, operativnog sistema, hardvera itd.
// To su, na primer: localStorage, fetch, document, navigator, itd.

// 🔹 localStorage i sessionStorage
// Ovo su tipovi Web API-ja koji služe za skladištenje podataka u pregledaču:

// localStorage: čuva podatke stalno, čak i nakon što zatvorimo tab ili browser.
// sessionStorage: čuva podatke samo dok je tab otvoren – briše se kada se tab zatvori.

// Čuvanje vrednosti "ajsa" pod ključem "name" u localStorage
localStorage.setItem("name", "ajsa");

// Čuvanje vrednosti "besirovic" pod ključem "surname"
localStorage.setItem("surname", "besirovic");

// Menjanje vrednosti pod ključem "name" iz "ajsa" u "hana"
localStorage.setItem("name", "hana");

// Ispisivanje vrednosti iz localStorage sa ključem "name"
console.log(localStorage.getItem("name"));

// Dodavanje više stavki u localStorage
localStorage.setItem("item1", "1");
localStorage.setItem("item2", "2");
localStorage.setItem("item3", "3");

// Brisanje jedne stavke iz localStorage po ključu "item1"
localStorage.removeItem("item1");

// Brisanje **svih** stavki iz localStorage
localStorage.clear();

// Dodavanje podataka u sessionStorage (važi dok je tab otvoren)
sessionStorage.setItem("item1", "1");
sessionStorage.setItem("item2", "2");
sessionStorage.setItem("item3", "3");

// Uzimanje vrednosti iz input polja na ovaj nacin i postavljanje te vrednosti
// u localStorage ne bi radilo pravilno zbog toga sto bismo ovde uzeli vrednost kad se
// stranica tek ucita i to bi bio prazan strin
const value = document.querySelector("input").value;

// Funkcija koja čuva vrednost iz input polja u localStorage pod ključem "ime"
function sacuvajKorisnika() {
  const vrednost = document.querySelector("input").value; // Uzimamo vrednost iz inputa na svaki klik
  localStorage.setItem("ime", vrednost); // Čuvamo je u localStorage pod ključem "ime"
}

// Provera da li postoji ključ "ime" u localStorage i ispis pozdrava ako postoji
if (localStorage.getItem("ime")) {
  document.writeln(`Dobrodosli ${localStorage.getItem("ime")}`); // Ispisujemo poruku na stranici
}

// Funkcija koja menja temu stranice i čuva izbor korisnika u localStorage
function promeniTemu() {
  // Ako je trenutna boja pozadine crna, promeni na belu i sačuvaj kao "light"
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("theme", "light");
  } else {
    // Inače promeni na crnu i sačuvaj kao "dark"
    document.body.style.backgroundColor = "black";
    localStorage.setItem("theme", "dark");
  }
}

// Kada se stranica učita, postavi temu u zavisnosti od prethodnog izbora korisnika
if (localStorage.getItem("theme") == "dark") {
  document.body.style.backgroundColor = "black"; // Ako je tema "dark", stavi crnu pozadinu
} else {
  document.body.style.backgroundColor = "white"; // Inače stavi belu pozadinu
}

// JSON (JavaScript Object Notation) je format za razmenu podataka koji izgleda kao string,
// ali sadrži strukturu objekta
// Koristi se za slanje i čuvanje podataka.
// U localStorage ne možemo direktno čuvati objekte – možemo samo stringove.

// Zato koristimo JSON.stringify() – ova funkcija pretvara JavaScript objekat u JSON string.

const user = {
  name: "ajsa",
  email: "bdsf",
  age: 21,
};

// Ovde koristimo JSON.stringify da pretvorimo objekat 'user' u string koji možemo sačuvati
localStorage.setItem("user", JSON.stringify(user));

// Kada želimo da uzmemo taj string i ponovo dobijemo pravi objekat,
// koristimo JSON.parse() – ona pretvara JSON string nazad u JavaScript objekat.

const parsedObj = JSON.parse(localStorage.getItem("user"));

// Sada možemo normalno pristupiti poljima kao kod bilo kog objekta
console.log(parsedObj); // Ispisuje: { name: "ajsa", email: "bdsf", age: 21 }

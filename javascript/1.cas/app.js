// console.log(ime);
// Greska zbog TDZ (Temporal Dead Zone) - pokušavamo pristupiti promenljivoj pre nego što je deklarisana sa const

const ime = "ajsa"; // Deklarišemo konstantu 'ime' koja se ne može menjati
let godine = 20; // Deklarišemo promenljivu 'godine' sa let (može se kasnije menjati)
let student = false; // Boolean vrednost - korisno za istinito/neistinito stanje
let godinaRodjenja = 2004; // Broj - koristi se kasnije za izračunavanje godina
let brIndeksa; // Deklaracija promenljive bez inicijalne vrednosti (undefined po defaultu)

brIndeksa = 483322; // Kasnije dodeljujemo vrednost (dozvoljeno jer je let)
let zanimanje = null; // null eksplicitno označava "nema vrednosti"

// moje_ime = "hana"; // nije dozvoljeno jer pokušavamo da dodelimo vrednost konstanti koja nije prethodno deklarisana

// godine = 21; // Ovo bi promenilo vrednost 'godine', što je dozvoljeno jer je let, ne const

// Primeri različitih tipova podataka u JavaScript-u:
(""); // Prazan string (tekst)
20; // Broj
99999999999999999n; // BigInt (vrlo veliki broj)
BigInt(9999389834993383883); // Eksplicitno kreiranje BigInt vrednosti
true, false; // Boolean vrednosti (tačno / netačno)

// Osnovni operatori:
// + - / * ++ -- % // Aritmetički operatori
// ++ povećava za 1, -- smanjuje za 1, % daje ostatak pri deljenju

// Kombinovanje stringa i brojeva:
"tekst" + 5; // vraća "tekst5" (pretvara broj u string i spaja)
"10" - 2; // vraća 8 (pretvara string u broj i izvršava oduzimanje)

// Primeri sa brojevima:
let broj1 = 11; // Number
let broj2 = "11"; // String (broj kao tekst)
let broj3 = "100"; // Još jedan string

// == poredi samo vrednosti, ne i tipove (11 == "11" je tačno)
// === poredi i tip i vrednost (11 === "11" je netačno)
console.log(broj1 == broj2); // true
console.log(broj1 === broj2); // false

// != i !== su suprotne varijante gornjih operatora
console.log(broj1 != broj2); // false (vrednosti su iste)
console.log(broj1 !== broj2); // true (tipovi su različiti)

// Poređenja veličine:
console.log(broj1 > broj2); // false (jer "11" se pretvara u broj 11)
console.log(broj1 < broj2); // false
console.log(broj1 >= broj2); // true
console.log(broj1 <= broj2); // true

// Logički operatori:
// kod AND operatora svi izrazi moraju biti true da bi dobili true
console.log(true && true); // true (oba su tačna)
console.log(true && false); // false
console.log(false && true && true && true); // false (jedan false je dovoljan)
console.log(false && false); // false

// kod OR operatora bar jedan izraz mora biti true da bi dobili true
console.log(true || true); // true (barem jedan je tačan)
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Kombinacija logičkih izraza:
console.log((true && false) || (false && false)); // false (obe strane izraza su false)

// Prikaz poruke u konzoli sa tekstom:
console.log("Ja se zovem Ajsa, imam 20 godina"); // direktno ispisivanje stringa

// Prikaz više vrednosti u konzoli:
console.log(ime, godine); // koristi promenljive

// Kombinovanje stringova i promenljivih:
console.log("ja se zovem", ime, "imam", godine, "godina"); // više stringova + varijable

// Template literals (šablonski stringovi) koriste se sa ``, olakšavaju kombinovanje:
console.log(`Ja se zovem ${ime}, imam ${2025 - godinaRodjenja} godina`);
// izražava računanje godina direktno u stringu (2025 - 2004 = 21)

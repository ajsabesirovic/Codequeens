// Zadatak 1
let username = "";
if (username || "Gost") {
  console.log("Dobrodošao, " + username);
}

// - username je prazan string ("") → falsy vrednost.
// - username || "Gost" → vraća "Gost" jer je username falsy. (false or true vraca true, a truthy vrednost nam je 'Gost')
// - if("Gost") je truthy → uslov se izvršava.
// - Ali se i dalje koristi originalni username u logu → ispisuje "Dobrodošao, ". (jer je username prazan string)

// Zadatak 2
let broj = 0;
if (broj) {
  console.log("Broj unet");
} else {
  console.log("Unesite broj");
}

// - broj je 0 → falsy vrednost.
// - if (broj) → ne izvršava se jer je uslov false.
// - Izvršava se else blok → "Unesite broj".

// Zadatak 3
function pozdrav(ime) {
  ime = ime || "posetilac";
  console.log("Zdravo, " + ime);
}
pozdrav("Ana"); // ?
pozdrav(""); // ?

// Objašnjenje:
// - pozdrav("Ana"); → ime je "Ana" ("Ana" ili "posetilac", u prevodu true ili true daje true,
//   kako onda znamo koju truthy vrednost ce uzeti? Kod OR Operatora uzimamo PRVU truthy vrednost na koju naidjemo
//   jer znamo da je kod OR bitno da je barem jedan true da bi ceo izraz bio true) (truthy) → koristi se "Ana" → "Zdravo, Ana".
// - pozdrav(""); → ime je "" (falsy) → koristi se "posetilac" → "Zdravo, posetilac". (tj. "" ili "posetilac", false or true => true, uzima se truthy vrednost)

// Zadatak 4
let isLoggedIn = false;
let prikaziPoruku = isLoggedIn && "Dobrodošao!";
console.log(prikaziPoruku); // ?

// Objašnjenje:
// - isLoggedIn je false → falsy vrednost.
// - false && "Dobrodošao!" → vraća false (ne ide dalje).
// da smo imali u nekom slucaju true && 'Dobrodosao' to bi bilo kao true and true => true. kako tu znamo koju truthy vrednost uzima? Kod AND operatora uzima POSLEDNJU
// truthy vrednost na koju naidje, jer znamo da nam je tu bitno da svi budu true kako bismo dobili true, dakle od poslednje vrednosti zavisi konacna vrednost
// - prikaziPoruku = false → ispisuje se "false".

// Zadatak 5
let vrednost = null;
let rezultat = vrednost ?? "default";
console.log(rezultat);

// Objašnjenje:
// - vrednost je null → nullish.
// - null ?? "default" → vraća "default".
// kako funkcionise operator ?? , tako sto proverava samo prvu vrednost ako je onda truthy uzima tu vrednost, ako je falsy prelazi na "default",
//  tj. na defaultnu vrednost koju sami postavimo
// - Ispis: "default".

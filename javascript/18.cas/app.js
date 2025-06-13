let str = "Hello10 b";

// Dužina stringa
console.log("Dužina stringa:", str.length); // 9

// Pristup prvom karakteru stringa
console.log("Prvi karakter:", str[0]); // 'H'

// Pretvaranje u mala i velika slova, toLowerCase i toUpperCase vracaju novi string, ne modifikuju originalni
console.log("Mala slova:", str.toLowerCase()); // 'hello10 b'
console.log("Velika slova:", str.toUpperCase()); // 'HELLO10 B'

// Provera da li string sadrži određeni deo
console.log("Da li sadrži 'Hello':", str.includes("Hello")); // true

// Pozicija prvog i poslednjeg pojavljivanja slova 'l'
console.log("Prvi indeks 'l':", str.indexOf("l")); // 2
console.log("Poslednji indeks 'l':", str.lastIndexOf("l")); // 3

// Karakter na poziciji 8
console.log("Karakter na indeksu 8:", str.charAt(8)); // 'b'

// Provera početka i kraja stringa
console.log("Počinje sa 'Hel':", str.startsWith("Hel")); // true
console.log("Završava se sa 'b':", str.endsWith("b")); // true

// Neuredan string sa razmakom
const rawString = "     Cao ja          sam Ajsa      ";

// Uklanjanje praznina sa početka i kraja, dakle nece ukloniti ovaj u sredini
console.log("Trimovani string:", rawString.trim());

// Zamena dela stringa, replace ne modifikuje originalni string vec vraca novi
const replaced = str.replace("ell", "ELL");
console.log("Zamenjeno 'ell' sa 'ELL':", replaced); // 'HELLo10 b'

// Deljenje stringa u niz reči
const sentence = "Ja sam Ajsa";
const words = sentence.split(" ");
console.log("Splitovano po razmaku:", words); // ['Ja', 'sam', 'Ajsa']

// Spajanje niza u string sa znakom "+"
console.log("Ponovo spojeno sa '+':", words.join("+")); // 'Ja+sam+Ajsa'

//Escape notacije se koriste za umetanje specijalnih karaktera unutar stringa.
// Evo dva primera
console.log("Ovo je novi red:\nDrugi red");
console.log("Ovo je tab:\tEvo tab razmaka");

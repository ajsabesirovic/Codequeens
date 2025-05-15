// Sa parseInt funkcijom vracamo ceo broj
console.log(Number.parseInt("42")); // 42 -> nije string
console.log(typeof Number.parseInt("42")); // number
console.log(typeof "42"); // string
console.log(Number.parseInt("Ajsa")); // NaN (Nije Broj)

// Sa parseFloat funkcijom vracamo decimalni broj
console.log(Number.parseFloat("3.14"));

// Sa isInteger proveravamo da li je varijabla ceo broj (ne decimala)
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger("10")); // false
console.log(Number.isInteger(10.5)); // false

// Sa isNaN proveravamo da li je vrednost bukvalno NaN (Nije Broj)
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("Ajsa")); // false
console.log(Number.isNaN(10)); // false

console.log((123.456).toFixed(2)); // "123.46" (zaokružuje na 2 decimale)
console.log((123.456).toPrecision(4)); // "123.5" (prikazuje ukupno 4 cifre)

// samo apsolutna vrednost broja
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
console.log(Math.abs(-5.5)); // 5.5

// zaokruzivanje brojeva na cele, round kao normalan, ceil na veci i floor na manji broj
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

// Minimalni I Maksimalni broj od ponudjenih
Math.max(100, 200, 10, 1, 500); // 500
Math.min(100, 200, 10, 1, 500); // 1

Math.pow(3, 2); // 3 na kvadrat, 9
// isto kao ovo => 3 ** 2

Math.sqrt(25); // 5 (kvadratni koren iz 25)
// Uvek je kvadratni koren

// Math.random() generise broj izmedju 0 i 1
console.log(+(Math.random() * 100).toFixed(0));

// slican kao floor
console.log(Math.trunc(4.987877)); // 4

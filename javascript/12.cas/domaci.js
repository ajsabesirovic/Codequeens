const niz = [1, 2, 2, 3, 4, 3, 5];
const rezultat = [];

for (let i = 0; i < niz.length; i++) {
  let duplikat = false;
  for (let j = 0; j < rezultat.length; j++) {
    if (niz[i] === rezultat[j]) {
      duplikat = true;
      break;
    }
  }
  if (!duplikat) {
    rezultat.push(niz[i]);
  }
}

console.log(rezultat);

// ------------------------------------------------------------

// const niz = [1, 2, 3, 2, 4, 2];
const broj = 2;
let brojac = 0;

for (let i = 0; i < niz.length; i++) {
  if (niz[i] === broj) {
    brojac++;
  }
}

console.log(broj + " se pojavljuje " + brojac + " puta");

// ------------------------------------------------------------

// const niz = [1, 2, 3, 4, 5];
const temp = niz[0];
niz[0] = niz[niz.length - 1];
niz[niz.length - 1] = temp;

console.log(niz);

// ------------------------------------------------------------

const niz = [10, 20, 30, 40, 30];
const trazeni = 30;
let postoji = false;

for (let i = 0; i < niz.length; i++) {
  if (niz[i] === trazeni) {
    postoji = true;
    break;
  }
}

console.log(postoji);

// ------------------------------------------------------------

const niz1 = ["pas", "kuca"];
const niz2 = ["zmaj", "on"];
const spojeni = [];

for (let i = 0; i < niz1.length; i++) {
  spojeni.push(niz1[i]);
}
for (let i = 0; i < niz2.length; i++) {
  spojeni.push(niz2[i]);
}

console.log(spojeni);

// ------------------------------------------------------------

const niz = [5, 3, 8, 1, 2];
//          [1, 2, 3, 5, 8];

for (let i = 0; i < niz.length - 1; i++) {
  for (let j = 0; j < niz.length - 1 - i; j++) {
    if (niz[j] > niz[j + 1]) {
      // i = 0
      // ako je niz[0] > niz[1] zameni im mesta [3, 5, 8, 1, 2]
      // ako je niz[1] > niz[2] zameni im mesta [3, 5, 8, 1, 2]
      // ako je niz[2] > niz[3] zameni im mesta [3, 5, 1, 8, 2]
      // ako je niz[3] > niz[4] zameni im mesta [3, 5, 8, 1, 2]

      // itd. kad je i = 1

      const temp = niz[j];
      niz[j] = niz[j + 1];
      niz[j + 1] = temp;
    }
  }
}

console.log(niz);

// ------------------------------------------------------------

const niz = [1, 2, 3, 2, 1];
let palindrom = true;

for (let i = 0; i < niz.length / 2; i++) {
  // ako je prvi el razlicit od poslednjeg
  // i=1;  ako je drugi el razlicit od pretposlednjeg
  // i=2; ako je treci el razlicit od treceg tj. isti el je u pitanju
  if (niz[i] !== niz[niz.length - 1 - i]) {
    palindrom = false;
    break;
  }
}

console.log(palindrom);

// ------------------------------------------------------------

const niz = [1, 2, 3, 2, 1];
const jedinstveni = [];

for (let i = 0; i < niz.length; i++) {
  let postoji = false;
  for (let j = 0; j < jedinstveni.length; j++) {
    if (niz[i] === jedinstveni[j]) {
      postoji = true;
      break;
    }
  }
  if (!postoji) {
    jedinstveni.push(niz[i]);
  }
}

console.log(jedinstveni);

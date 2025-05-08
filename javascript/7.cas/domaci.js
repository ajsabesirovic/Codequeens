let ispis;
for (let i = 0; i < 3; i++) {
  ispis = "";
  for (let j = 0; j < 5; j++) {
    ispis += "*";
  }
  console.log(ispis);
}

// ------------------------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  let ispis = "";

  for (let j = 1; j <= i; j++) {
    ispis += "*";
  }

  console.log(ispis);
}

// ------------------------------------------------------------------------

for (let i = 1; i <= 5; i++) {
  let ispis = "";

  for (let j = 1; j <= i; j++) {
    ispis += "*";
  }

  console.log(ispis);
}

for (let i = 5; i > 1; i--) {
  let ispis = "";
  for (let j = i; j > 1; j--) {
    ispis += "*";
  }
  console.log(ispis);
}

// ------------------------------------------------------------------------
for (let k = 1; k < 4; k++) {
  for (let i = 1; i < 6; i++) {
    let ispis = "";

    for (let j = 1; j <= i; j++) {
      ispis += "*";
    }

    console.log(ispis);
  }
}

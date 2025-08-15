// Funkcija koja simulira pravljenje HTTP request-a
// location -> mesto na koje "šaljemo" zahtev
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);

    // Ako je destinacija "Google" - vraćamo uspešan odgovor
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      // Ako destinacija NIJE Google - vraćamo grešku
      reject("We can only talk to Google");
    }
  });
}

// Funkcija koja simulira procesiranje odgovora
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");

    // Ovde namerno odbacujemo (reject) obećanje sa dodatnim tekstom
    // Ovo je kao da kažemo: "Prilikom obrade se desila greška"
    reject(`Extra Information + ${response}`);
  });
}

// Funkcija koja samo formatira odgovor u string
function process(res) {
  return `Response is ${res}`;
}

/* 
Primer klasičnog Promise lanca (zakomentarisan):
- Prvo pozivamo makeRequest("Fb")
- Ako uspe, prosleđujemo rezultat processRequest funkciji
- Ako bilo koji deo padne, catch hvata grešku
*/
// makeRequest("Fb")
//   .then((response) => {
//     return processRequest(response);
//   })
//   .then((response) => {
//     console.log("then", response);
//   })
//   .catch((response) => console.log("catch", response));

/*
ASYNC/AWAIT verzija:
- async funkcija doWork() omogućava korišćenje "await"
- await pauzira izvršavanje dok se Promise ne završi
- ako Promise vrati reject, ide direktno u catch blok
*/
async function doWork() {
  try {
    // Čeka dok makeRequest ne završi
    const res = await makeRequest("Google");

    // Čeka dok processRequest ne završi
    // Ovde će biti greška jer processRequest radi reject
    const r = await processRequest(res);

    // Ako bi uspeo, mogli bismo ovde nastaviti sa r...
  } catch (e) {
    // Hvata sve greške iz await poziva iznad
    console.log("Catch");
    console.log(e);
  }
}
doWork();

/*
Drugi primer async funkcije sa fetch API-em:
- await čeka dok fetch ne završi (ili padne)
- Ako fetch izbaci grešku (npr. nema interneta), ide u catch
*/
async function fn() {
  try {
    const response = await fetch(url); // url bi morao biti definisan
    // ovde bismo radili sa response...
  } catch (e) {
    console.log(e); // ispisuje grešku
  }
}

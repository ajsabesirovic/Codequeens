const grandparent = document.querySelector(".grandparent");
const parentt = document.querySelector(".parent");
const child = document.querySelector(".child");

/*
=======================================
  Event Bubbling
=======================================

- Kada klikneš na dete (npr. .child),
  događaj (event) se najpre aktivira na tom elementu,
  pa se penje (bubble) kroz roditeljske elemente:
  Child -> Parent -> Grandparent -> Document 

- Ovaj mehanizam se zove bubbling.
- Bubbling je podrazumevano ponašanje u js-u
- Zato, ako dodamo listener na 'click' na više elemenata,
  svi će se aktivirati u tom redosledu, osim ako ga ne zaustavimo.
*/

// Primer
// ========================================================================
document.addEventListener("click", () => {
  console.log("Document");
});
grandparent.addEventListener("click", () => {
  console.log("Grandparent");
});
parentt.addEventListener("click", () => {
  console.log("Parent");
});
child.addEventListener("click", () => {
  console.log("Child");
});
// Dakle u ovom primeru ispis u konzoli bi bio sledeci (AKO KLIKNEM NA CHILD):
// Child => Parent => GrandParent => Document
// ========================================================================

document.addEventListener("click", (event) => {
  // event argument u callbacku je objekat koji opisuje event koji se desio, u ovom slucaju klik na document

  console.log("Document");

  // 'currentTarget' property iz eventa pokazuje gde je postavljen listener
  console.log(event.currentTarget);
  // 'target' property je tacno onaj element na koji smo kliknuli
  // tj element na kojem se inicijalno desio event
  console.log(event.target);
});

/*
=======================================
  stopPropagation
=======================================

- Ako unutar event handlera pozovemo event.stopPropagation(),
  događaj NEĆE nastaviti da se penje dalje kroz DOM stablo.
- dakle zaustavlja bubbling ili capturing
*/

grandparent.addEventListener("click", (event) => {
  console.log("Grandparent");
  event.stopPropagation(); // Zaustavlja bubbling posle grandparenta
});

/*
=======================================
  Event Capturing
=======================================

- Suprotno od bubbling-a.
- Tokom capturing faze, događaj ide od root elementa (Document)
  NA DOLE do ciljanog elementa
- Po defaultu, js koristi bubbling
- Ali možemo uključiti capturing tako što postavimo { capture: true }.

- Ako se koristi capturing i bubbling istovremeno,
  događaj prvo prolazi kroz capturing fazu,
  pa se aktivira na ciljanom elementu,
  pa bubbling faza ide nazad ka vrhu.
*/

parentt.addEventListener(
  "click",
  (event) => {
    console.log("Parent");
  },
  {
    capture: true,
  }
);

/*
=======================================
  Regularan bubbling listener na Child
=======================================

- Ovaj listener se aktivira kad kliknemo Child
  u bubbling fazi (default).
*/

child.addEventListener("click", (event) => {
  console.log("Child");
  // console.log(event.currentTarget);
});

/*
=======================================
  Redosled u ovom primeru:
=======================================

- Ako klikneš na child:
  1) Parent capturing listener se aktivira prvi (odozgo nadole)
  2) Child listener se aktivira sledeći (na ciljanom elementu)
  3) Grandparent listener se aktivira sledeći (bubbling)
     ali ZAUSTAVLJA bubbling (stopPropagation)
  4) Document listener se NEĆE aktivirati jer je bubbling zaustavljen

- Ako bi Grandparent listener bio bez stopPropagation(),
  Document listener bi se aktivirao posle Grandparent-a.
*/

/*
=======================================

- Bubbling: Događaj ide odozdo nagore. (default)
- Capturing: Događaj ide odozgo nadole. (koristi { capture: true })
- currentTarget: element na kojem se izvršava listener.
- target: element koji je originalno kliknut.
- stopPropagation(): prekida sledeće faze.
*/

// Primer
// ========================================================================
document.addEventListener("click", () => {
  console.log("Document");
});
grandparent.addEventListener(
  "click",
  () => {
    console.log("Grandparent");
  },
  { capture: true }
);
parentt.addEventListener("click", () => {
  console.log("Parent");
});
child.addEventListener("click", () => {
  console.log("Child");
});
// Dakle u ovom primeru ispis u konzoli bi bio sledeci (AKO KLIKNEM NA CHILD):
// GrandParent => Child => Parent => Document
// ========================================================================

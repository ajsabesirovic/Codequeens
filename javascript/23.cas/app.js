// DOM = Document Object Model
// To je hijerarhijska struktura koja predstavlja HTML dokument u obliku stabla
// Omogućava JavaScript-u da pristupa i menja sadržaj, strukturu i stil stranice u realnom vremenu

console.dir(document);
// Ispisuje detaljnu strukturu `document` objekta u konzoli.
// `document` je glavni ulaz u DOM. Sadrži sve čvorove (node) - elemente, tekstove, komentare...

// Razliciti nacini za uzimanje elemenata:

// Pristup elementu po ID-u
const paragraf = document.getElementById("par");
// getElementById vraća JEDAN element koji ima zadati ID. ID mora biti jedinstven u dokumentu.

// Pristup elementima po klasi
const p = document.getElementsByClassName("parKlasa");
// getElementsByClassName vraća HTMLCollection (listu) svih elemenata koji imaju tu klasu.

// Pristup elementima po tagu
console.log(document.getElementsByTagName("p"));
// getElementsByTagName vraća HTMLCollection svih elemenata sa datim imenom taga (ovde "p").

// querySelector i querySelectorAll omogućavaju selektovanje kao u CSS-u
console.log(document.querySelector("p"));
// querySelector vraća PRVI element koji odgovara CSS selektoru (ovde prvi <p>).
console.log(document.querySelector(".parKlasa"));
// (ovde prvi element sa klasom parKlasa).
console.log(document.querySelector("#par"));
// (ovde prvi element sa id-em par).

console.log(document.querySelectorAll("p"));
// querySelectorAll vraća NodeList (staticku listu) SVIH elemenata koji odgovaraju selektoru.

// Kreiranje novih elemenata
const div1 = document.createElement("div");
// createElement pravi potpuno nov element u memoriji. Ali još nije deo stranice

const div2 = document.createElement("div");

// Postavljanje sadržaja unutar elementa
div1.innerText = "Div 1 inner text";
// innerText menja vidljivi tekst unutar elementa, ignoriše HTML tagove.

div1.textContent += " Div 1 text content";
// textContent je slično innerText, ali ne obrađuje stilove i vraća SVE tekstualne čvorove.

div1.innerHTML = `<button>dugme</button>`;
// innerHTML omogućava da se ubaci HTML kod direktno unutar elementa.
// Ovde ubacujemo <button> kao dete div-a.

// Dodavanje elemenata u DOM
document.body.appendChild(div1);
// appendChild ubacuje element kao poslednje dete parent elementa (ovde body).

document.body.appendChild(div2);
// append dodaje tekst ili element na kraj parent-a
document.body.append("Hello");
// Ovde se dodaje tekst "Hello" direktno u body.

// Uklanjanje elemenata iz DOM-a
div1.remove();
// remove() uklanja ceo element iz DOM-a.

div1.removeChild(div1.getElementsByTagName("button")[0]);
// removeChild uklanja dete elementa. Ovde uklanjamo prvo dugme unutar div1.
// Napomena: Pošto smo već uklonili ceo div1 sa remove(), ovo može da baci grešku jer div1 više nije u DOM-u!

// ----------------------------------------------------------------------
// Kreiranje i dodavanje novog <p> unutar postojećeg diva
const prviZadatakDiv = document.getElementById("prviZadatak");
// Nalazi div sa ID-em "prviZadatak"

const paragraf1 = document.createElement("p");
// Kreira novi <p>

prviZadatakDiv.append(paragraf1);
// append dodaje novi <p> kao poslednje dete div-a "prviZadatak"

// ----------------------------------------------------------------------
// Kreiranje liste i stavke liste
const ul = document.createElement("ul");
document.body.append(ul);
// Dodaje <ul> u body

const li = document.createElement("li");
ul.appendChild(li);
// Dodaje <li> kao dete <ul>
// ----------------------------------------------------------------------
// Kreiranje dugmeta
const button = document.createElement("button");
button.textContent = "dugmence";
// Postavlja tekst dugmeta

document.body.appendChild(button);
// Dodaje dugme u body

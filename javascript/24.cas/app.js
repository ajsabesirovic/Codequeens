const paragraf = document.getElementById("paragraf");

// Menja ID elementa u "par"
paragraf.id = "par";

// Vraća vrednost atributa "id" i ispisuje je u konzolu
console.log(paragraf.getAttribute("id"));

// Vraća vrednost atributa "class" i ispisuje je u konzolu
console.log(paragraf.getAttribute("class"));

// Dodaje novi atribut "title" elementu sa vrednošću "Ovo je title"
paragraf.setAttribute("title", "Ovo je title");

// Alternativni način: menja se direktno svojstvo title
paragraf.title = "Ovo je novi title";

// Briše atribut "title" sa elementa
paragraf.removeAttribute("title");

// Pokušava da postavi "class" preko svojstva class - ovo neće raditi jer je to read-only
paragraf.class = "prva"; // ne radi

// Ispravno: postavlja klasu preko svojstva className
paragraf.className = "prva";

// Dodaje još jednu klasu tako što konkatenira na postojeću vrednost
paragraf.className += " druga";

// Alternativno: setuje sve klase direktno atributom
paragraf.setAttribute("class", "prva druga treca");

// Dodaje novu klasu "treca" pomoću classList.add()
paragraf.classList.add("treca");

// Uklanja klasu "prva" ako postoji
paragraf.classList.remove("prva");

// Proverava da li element ima klasu "prva", vraća true/false
console.log(paragraf.classList.contains("prva"));

// Primer: ako ima "prva", uklanja je, inače je dodaje
if (paragraf.classList.contains("prva")) {
  paragraf.classList.remove("prva");
} else {
  paragraf.classList.add("prva");
}

// Kraći način za to: toggle dodaje ili uklanja klasu
paragraf.classList.toggle("prva");

// Menja klasu "prva" u "NOVAKLASA"
paragraf.classList.replace("prva", "NOVAKLASA");

// Vraća broj klasa koje element ima
console.log(paragraf.classList.length);

// Menja stil elemenata preko style svojstva
paragraf.style.backgroundColor = "black";
paragraf.style.color = "yellow";

// Alternativa: postavlja ceo inline stil odjednom
paragraf.setAttribute("style", "background-color: black; color:yellow");

// Selektuje prvo <button> dugme na stranici
const btn = document.querySelector("button");

// Selektuje element sa ID-jem "klik"
const p = document.getElementById("klik");

// Dodaje event listener na dugme: kad se klikne,
// menja tekst u paragrafu na "Kliknuto!"
btn.addEventListener("click", () => {
  p.textContent = "Kliknuto!";
});

// addEventListener jeste metoda koja slusa za odredjeni event(prvi argument) i kad se on desi izvrsi funkciju koju smo poslali kao callback(drugi argument)

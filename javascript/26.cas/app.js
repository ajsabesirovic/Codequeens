let current = 1;
const dodajKnjiguBtn = document.getElementById("add-book");
const listaKnjiga = document.getElementById("book-list");
const obrisiSveKnjige = document.getElementById("clear-all");
const sakrijProcitane = document.getElementById("toggle-read");

dodajKnjiguBtn.addEventListener("click", () => {
  const input = document.getElementById("book-title");
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Unesite naslov knjige!");
    return;
  }

  const knjiga = document.createElement("div");
  knjiga.innerText = inputValue;
  knjiga.dataset.id = current++;
  knjiga.setAttribute("title", inputValue);

  const procitanoBtn = document.createElement("button");
  procitanoBtn.innerText = "Procitano";

  procitanoBtn.addEventListener("click", () => {
    knjiga.classList.add("read");
    knjiga.removeAttribute("title");

    azurirajBrProcitanih();
  });

  const ukloniBtn = document.createElement("button");
  ukloniBtn.innerText = "Ukloni";

  ukloniBtn.addEventListener("click", () => {
    knjiga.remove();

    azurirajBrProcitanih();
  });

  knjiga.append(procitanoBtn);
  knjiga.append(ukloniBtn);

  listaKnjiga.append(knjiga);

  input.value = "";

  if (current == 2) {
    obrisiSveKnjige.disabled = false;
  }
});

obrisiSveKnjige.addEventListener("click", () => {
  const knjige = listaKnjiga.getElementsByTagName("div");

  for (let i = knjige.length - 1; i >= 0; i--) {
    knjige[i].remove();
  }

  //   ili
  // listaKnjiga.innerHTML = "";
  current = 1;
  obrisiSveKnjige.disabled = true;
});

function azurirajBrProcitanih() {
  const p = document.getElementById("read-counter");
  const procitane = listaKnjiga.getElementsByClassName("read").length;
  p.innerText = `Procitanih knjiga: ${procitane}`;
}

sakrijProcitane.addEventListener("click", () => {
  const procitane = listaKnjiga.querySelectorAll(".read");
  procitane.forEach((knjiga) => {
    knjiga.classList.toggle("hidden");
  });
});

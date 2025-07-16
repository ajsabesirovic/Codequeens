// Date je ugrađeni JavaScript objekat koji predstavlja tačan trenutak u vremenu
// i omogućava rad sa datumima i vremenom

// Kreiramo novi objekat Date koji predstavlja trenutni datum i vreme
const trenutnoVreme = new Date();

// Trenutni datum i vreme u standardnom formatu (ISO string)
console.log("Trenutni datum i vreme:", trenutnoVreme);

// getDay() vraća DAN U NEDELJI (0 = nedelja, 1 = ponedeljak, ..., 6 = subota)
console.log("Dan u nedelji (0-6):", trenutnoVreme.getDay());

// getMonth() vraća MESEC (0 = januar, 1 = februar, ..., 11 = decembar)
console.log("Mesec (0-11):", trenutnoVreme.getMonth());

// getFullYear() vraća CELOKUPNU godinu (npr. 2025)
console.log("Godina:", trenutnoVreme.getFullYear());

// Kreiramo novi datum za tačno definisan trenutak
// Format: new Date("YYYY-MM-DDTHH:MM:SS")
// T koristimo kao separator izmedju datuma i vremena
const specificanDatum = new Date("2025-07-14T14:00:03");
console.log("Specifičan datum:", specificanDatum);

// toDateString()	Vraća samo deo datuma kao čitljiv string
// toTimeString()	Vraća samo deo vremena kao čitljiv string

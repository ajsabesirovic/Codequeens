async function waitAndPrint() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  console.log("Gotovo cekanje");
}

waitAndPrint();

// // const id = setInterval(() => {
// //   console.log("Id timeout");
// // }, 1000);
// // //
// // clearTimeout(id);

// function podeli(a, b) {
//   if (b === 0) {
//     throw new Error("Deljenje sa nulom nije dozvoljeno!");
//   }
//   return a / b;
// }

// console.log(podeli(10, 2)); // 5
// try {
//   console.log(podeli(10, 0)); //  Ovde bacamo grešku
// } catch (e) {
//   console.log(e.message);
// }
// console.log("ajsa");

// const prom = new Promise((resolve, reject) => {
//   resolve("a");
// });
// console.log(prom);
// prom.then((el) => console.log(el)).then((el) => console.log(el));

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Facebook")
//   .then((res) => {
//     return processRequest(res);
//   })
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));
// console.log("ajsa");

async function doWork() {
  const res = await makeRequest("Google");
}
doWork();

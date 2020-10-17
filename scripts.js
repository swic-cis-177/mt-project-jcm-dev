// const date = document.querySelector("#date");

// date.addEventListener("focus", () => {
//   console.log("Input entered");
// });

const objTest = {
  date: document.querySelector("#date"),
  productType: document.querySelector("#type"),
  chemical: document.querySelector("#chem"),
  frequency: document.querySelector("#frequency"),
};

const arrayTest = new Array(0);

for (const property in objTest) {
  objTest[property].addEventListener("focus", () => {
    console.log("Input entered");
  });
}
//testing
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  for (const property in objTest) {
    console.log(objTest[property]);
  }

  arrayTest.push(objTest);

  for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
  }
});

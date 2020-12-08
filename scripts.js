import data from "./data.js";
import { createCustomerTable, generateCustomer } from "./lib.js";

console.log(data);
createCustomerTable(data);

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  data.push(generateCustomer(event.target.elements));
  createCustomerTable(data);
});

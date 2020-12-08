const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export const createCustomerTable = (customerData) => {
  tbody.innerText = " ";
  customerData.forEach(({ name, product, date, next }) => {
    const newCustomerRow = template.content.cloneNode(true);
    const newCustomerTDs = newCustomerRow.querySelectorAll("td");

    newCustomerTDs[0].textContent = name;
    newCustomerTDs[1].textContent = product;
    newCustomerTDs[2].textContent = date;
    newCustomerTDs[3].textContent = next;
    tbody.appendChild(newCustomerRow);
  });
};

const processForm = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (deets, { id, value }) =>
        // Spread out the accumulated form details and add the next id/value from form input
        ({
          ...deets,
          [id]: value,
        }),
      {}
    );

export const generateCustomer = (elements) => ({
  ...processForm(elements),
  next: setDate(processForm(elements).product, processForm(elements).date),
});

const setDate = (product, date) => {
  console.log(product);
  if (product.toLowerCase() == "fertilizer") {
    const objectDate = new Date(date);
    objectDate.setMonth(objectDate.getMonth() + 2);
    console.log(objectDate);
    return objectDate.toLocaleDateString();
  }
  if (product.toLowerCase() == "weed control") {
    const objectDate = new Date(date);
    objectDate.setMonth(objectDate.getMonth() + 1);
    console.log(objectDate);
    return objectDate.toLocaleDateString();
  }
};

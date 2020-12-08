const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

export default (customerData) => {
  tbody.innerText = " ";
  customerData.forEach(({ name, product, date }) => {
    const newCustomerRow = template.content.cloneNode(true);
    const newCustomerTDs = newCustomerRow.querySelectorAll("td");

    newCustomerTDs[0].textContent = name;
    newCustomerTDs[1].textContent = product;
    newCustomerTDs[2].textContent = date;
    tbody.appendChild(newCustomerRow);
  });
};
